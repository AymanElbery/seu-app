import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ObjectExamService } from '../services/object-exam.service';
import { AddExamObjectComponent } from './diag/add-exam-object/add-exam-object.component';
import { AppToasterService } from '../../shared/services/app-toaster';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RequestData } from '../../shared/models/request-data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-object-exam',
  templateUrl: './object-exam.component.tns.html',
  styleUrls: ['./object-exam.component.tns.scss']
})
export class ObjectExamComponent implements OnInit {

  reqData:RequestData={can_add_new_request:false,requests:[],reqs:[],notes:[]};
  msgs=[];
  status;
  isLoading = false;

  constructor(private toastr: AppToasterService,
     private acadmicProc: ObjectExamService,
     private routerExtensions: RouterExtensions,
     private translate: TranslateService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.getRequests();
  }
  getRequests() {
    this.isLoading = true;
    this.acadmicProc.getRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }
    )
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
  onTap(){
    this.routerExtensions.navigate(['/procedures/addobjectexam'], {
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