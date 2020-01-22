import { Component, OnInit } from '@angular/core';
import { CourseEqualizerService } from '../services/course-equalizer.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import * as utils from "tns-core-modules/utils/utils";
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
  selector: 'app-course-equalize',
  templateUrl: './course-equalize.component.tns.html',
  styleUrls: ['./course-equalize.component.tns.scss']
})
export class CourseEqualizeComponent implements OnInit {

  printAR;
  reason: string;
  reqData;
  msgs;
  status;
  isLoading = false;


  constructor(private toastr: AppToasterService,
     private acadmicProc: CourseEqualizerService,
     private routerExtensions: RouterExtensions) { }

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
        ////console.log(res);
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
        // //console.log(this.reqData.reqs);
      }
    );
  }


  print(req) {
    utils.openUrl(this.acadmicProc.Download(req));

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
      }});
      }

  onTap(){
    this.routerExtensions.navigate(['/procedures/addequalize'], {
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