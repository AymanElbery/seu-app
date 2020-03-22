import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SummerWithdrawService } from '../services/summer-withdraw.service';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from 'nativescript-toast';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/common'; 
import { AppToasterService } from '../../shared/services/app-toaster.tns';
import { AddSummerWithdrawComponent } from './diag/add-summer-withdraw/add-summer-withdraw.component.tns';
import { TranslateService } from '@ngx-translate/core';
import { RequestData } from '../../shared/models/request-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';

@Component({
  selector: 'app-summer-withdraw',
  templateUrl: './summer-withdraw.component.tns.html',
  styleUrls: ['./summer-withdraw.component.tns.scss']
})
export class SummerWithdrawComponent implements OnInit {

  constructor(private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
    private acadmicProc: SummerWithdrawService,
    private toaster:AppToasterService,
    private translate: TranslateService,
    private downloader: DataDownLoadService) { }

  printAR;
  reason: string;
  reqData:RequestData={can_add_new_request:false,notes:[],reqs:[],requests:[]};
  msgs=[];
  status;
  isLoading = false;
  deleting = false;
  isDownLoaded = false;

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.isLoading = true;
    this.reason = '';
    this.getRequests();
  }
  getRequests() {
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }, err => {
        this.msgs = [];
        this.toaster.tryagain();
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

    this._modalService.showModal(AddSummerWithdrawComponent, options)
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
        this.toaster.push((res as any).messages);

        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
            this.toaster.tryagain();
            this.deleting = false;
        });
    }});
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }
}

