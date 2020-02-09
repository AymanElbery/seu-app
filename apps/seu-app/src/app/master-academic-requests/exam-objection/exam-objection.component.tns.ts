import { Component, OnInit } from '@angular/core';
import { ExamObjectionService } from '../../master-academic-requests/services/exam-objection.service';
import { ObjectExam } from '../../shared/models/object-exam';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import* as dialogs from "tns-core-modules/ui/dialogs";
import { RequestData } from '../../shared/models/request-data';

@Component({
  selector: 'app-exam-objection',
  templateUrl: './exam-objection.component.tns.html',
  styleUrls: ['./exam-objection.component.tns.scss']
})
export class ExamObjectionComponent implements OnInit {

  printAR;
  objectexam: ObjectExam;
  reqData:RequestData={can_add_new_request:false,notes:[],reqs:[],requests:[]};
  msgs;
  status;
  isLoading = false;
  constructor(private translate: TranslateService, private toastr: AppToasterService,
     private acadmicProc: ExamObjectionService,private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.objectexam = { courses: [], exams: [], reason: '', bank: -1, account_number: '', fees_amount: '', attachment: '' };
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
      }, err => {
        this.msgs = [];
        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
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
    this.routerExtensions.navigate(['/academicrequests/addobjectexam'], {
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


