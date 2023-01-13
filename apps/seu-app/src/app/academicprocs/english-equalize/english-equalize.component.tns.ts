import { Component, OnInit } from '@angular/core';
import { EnglishEqualizerService } from '../services/english-equalizer.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application'; 
import { RequestData } from '../../shared/models/request-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';

@Component({
  selector: 'app-english-equalize',
  templateUrl: './english-equalize.component.tns.html',
  styleUrls: ['./english-equalize.component.tns.scss']
})
export class EnglishEqualizeComponent implements OnInit {

  printAR;
  reason: string;
  reqData:RequestData={can_add_new_request:false,notes:[],reqs:[],requests:[]};
  msgs=[];
  status;
  isLoading = false;

  constructor(private toastr: AppToasterService, 
    private acadmicProc: EnglishEqualizerService,
    private routerExtensions: RouterExtensions,
    private downloader: DataDownLoadService) { }

  ngOnInit() {
    Downloader.init(); 
    this.isLoading = true;
    this.reason = '';
    this.getRequests();
  }
  getRequests() {
    this.acadmicProc.getِgetRequests().then(
      res => {
        //console.log(res);
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }
    );
  }

  print(req) {
    this.downloader.downloadFile(this.acadmicProc.Download(req));
    this.toastr.download();
    this.downloader.csize.subscribe(x => {
      console.log("xxxx",x)
      this.printAR = x;
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
          this.reqData.requests.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }});
  }

  onTap(){
    this.routerExtensions.navigate(['/procedures/addeequalize'], {
      transition: {
          name: 'fade'
      }
  });
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

}
