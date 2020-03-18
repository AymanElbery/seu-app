import { Component, OnInit } from '@angular/core';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { CancelCourseService } from '../services/cancel-course.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { TranslateService } from '@ngx-translate/core';
import { RequestData } from '../../shared/models/request-data';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';

@Component({
  selector: 'app-cancel-course',
  templateUrl: './cancel-course.component.tns.html',
  styleUrls: ['./cancel-course.component.tns.scss']
})
export class CancelCourseComponent implements OnInit {


  printAR='طباعة';
  cancelCousre: CancelCousre;
  reqData:RequestData={can_add_new_request:false,notes:[],reqs:[],requests:[]};
  msgs=[];
  status;
  isLoading = false;
  isDownLoaded = false;
  constructor(private toastr: AppToasterService, private acadmicProc: CancelCourseService,
    private routerExtensions: RouterExtensions,private translate: TranslateService,
    private downloader: DataDownLoadService) { }

  ngOnInit() {
    Downloader.init(); 
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.isLoading = true;
    this.cancelCousre = { courses: null, agreement: 1 };
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

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;
  }

  onTap(){
    this.routerExtensions.navigate(['/procedures/addcancelcourse'], {
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
