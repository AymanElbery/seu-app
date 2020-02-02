import { Component, OnInit } from '@angular/core';
import { ExamsExecusesService } from '../services/exams-execuses.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../shared/services/app-toaster';
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
  selector: 'app-exams-execuses',
  templateUrl: './exams-execuses.component.tns.html',
  styleUrls: ['./exams-execuses.component.tns.scss']
})
export class ExamsExecusesComponent implements OnInit {

  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(private translate: TranslateService, private toastr: AppToasterService,
     private acadmicProc: ExamsExecusesService,
     private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.getRequests();
  }
  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getRequest().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }, err => {
        this.reqData = [];
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }
//this.translate.instant('general.delete_confirm'
  deleting = false;if
  delete(id, index) {
    dialogs.confirm({
        title:this.translate.instant('general.delete_confirm'),
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
      }, err => {
        this.toastr.tryagain();
        this.deleting = false;
      });
    }});
  }
  onTap(){
    this.routerExtensions.navigate(['/academicrequests/addexamsexecuses'], {
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
