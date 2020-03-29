import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReEnrollService } from '../services/re-enroll.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddReEnrollComponent } from './diag/add-re-enroll/add-re-enroll.component.tns';
import { TranslateService } from '@ngx-translate/core';
import { RequestData } from '../../shared/models/request-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';

@Component({
  selector: 'app-re-eenrollment',
  templateUrl: './re-eenrollment.component.tns.html',
  styleUrls: ['./re-eenrollment.component.tns.scss']
})
export class ReEenrollmentComponent implements OnInit {
  printAR='طباعة';
  reEnroll: ReEnroll;
  reqData:RequestData={can_add_new_request:false,requests:[],reqs:[],notes:[]};
  msgs=[];
  status;
  isLoading = false;
  isDownLoaded = false;

  constructor(private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
    private toastr: AppToasterService, 
    private acadmicProc: ReEnrollService,
    private translate: TranslateService,private downloader: DataDownLoadService) { }

  ngOnInit() {
    Downloader.init(); 
    this.isLoading = true;
    this.reEnroll = { proof: '', reason: '', has_proof: '1' };
    this.getRequests();
  }


  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }, err => {
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

  onTap(): void {
    const options: ModalDialogOptions = {
        viewContainerRef: this._vcRef,
        context: {},
        fullscreen: false,
    };

    this._modalService.showModal(AddReEnrollComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
}

  print(req) {
    this.downloader.downloadFile(this.acadmicProc.Download(req));
    this.toastr.download();
    this.downloader.csize.subscribe(x => {
      this.printAR = x;
      if (x == '100') {
        this.isDownLoaded = true;
        this.translate.get('general.ar_print').subscribe(res => {
            this.printAR = res;
          }
          );

      }
    });
  }
  deleting = false;
  delete(id, index) {
    dialogs.confirm({
        title: this.translate.instant('general.delete_confirm'),
        message: "",
        okButtonText: "OK",
        cancelButtonText: 'Cancel'
    }).then((result:boolean) => {
      if (result) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }}) 
 }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;
  }

}
