import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TermExecuseService } from '../services/term-execuse.service';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddExecuseTermComponent } from './diag/add-execuse-term/add-execuse-term.component.tns';
import { AppToasterService } from '../../shared/services/app-toaster';
import { RequestData } from '../../shared/models/request-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-execuse-request',
  templateUrl: './execuse-request.component.tns.html',
  styleUrls: ['./execuse-request.component.tns.scss']
})
export class ExecuseRequestComponent implements OnInit {

  printAR;
  reason: string;
  reqData:RequestData={can_add_new_request:false,requests:[],reqs:[],notes:[]};
  msgs=[];
  status;
  isLoading = false;
  isDownLoaded = false;

  constructor(private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,private acadmicProc: TermExecuseService,private toastr: AppToasterService,
    private downloader: DataDownLoadService,private translate: TranslateService,) { }
    
  ngOnInit() {
    Downloader.init(); 
    this.isLoading = true;
    this.reason = '';
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

    this._modalService.showModal(AddExecuseTermComponent, options)
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
        title: "هل انت متأكد؟",
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
    }
});
  }
 
}
