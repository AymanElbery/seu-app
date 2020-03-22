import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TermPostponeService } from '../services/term-postpone.service';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common';
import { AddPostponeComponent } from './diag/add-postpone/add-postpone.component.tns';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { RequestData } from '../../shared/models/request-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';

@Component({
  selector: 'app-postpone-request',
  templateUrl: './postpone-request.component.tns.html',
  styleUrls: ['./postpone-request.component.tns.scss']
})
export class PostponeRequestComponent implements OnInit {

  printAR='طباعة';
  reason: string;
  reqData:RequestData={can_add_new_request:false,notes:[],reqs:[],requests:[]};
  msgs=[];
  status;
  isDownLoaded = false;


  constructor(private _modalService: ModalDialogService,private translate: TranslateService,
    private _vcRef: ViewContainerRef,private acadmicProc: TermPostponeService,private toastr: AppToasterService,
    private downloader: DataDownLoadService) { }

  ngOnInit() {
    Downloader.init(); 
    this.isLoading = true;
    this.reason = '';
    this.getRequests();
  }


  isLoading = false;
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

    this._modalService.showModal(AddPostponeComponent, options)
        .then( result => {
        if (this.acadmicProc.newreqs) {
          this.getRequests();
          this.acadmicProc.newreqs = false;
        }
    });
}

  print(req) {
    this.downloader.downloadFile(this.acadmicProc.Download(req));
    console.log('downloiad');
    this.printAR = '1%';
    this.downloader.csize.subscribe(x => {
      console.log("xxxx",x)
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
    }
  })

  }
    
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

}
