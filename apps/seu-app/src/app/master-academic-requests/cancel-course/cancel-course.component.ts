import { Component, OnInit } from '@angular/core';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { CancelCourseService } from '../services/cancel-course.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AddCancelCourseRequestComponent } from './diag/add-cancel-course-request/add-cancel-course-request.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cancel-course',
  templateUrl: './cancel-course.component.html',
  styleUrls: ['./cancel-course.component.scss']
})
export class CancelCourseComponent implements OnInit {
  printAR;
  cancelCousre: CancelCousre;
  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(private translate: TranslateService, public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: CancelCourseService) { }

  ngOnInit() {
    this.cancelCousre = { courses: null, agreement: 1 };
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
  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.height = '80%';
    /* dialogConfig.direction = "rtl";
     dialogConfig.position = { top: '100px', left: '25px' };*/

    const dialogref = this.dialog.open(AddCancelCourseRequestComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }


  print(req) {
    return this.acadmicProc.Download(req);

  }
  deleting = false;
  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.reqData.reqs.splice(index, 1);
        }
        this.deleting = false;
      }, err => {
        this.toastr.tryagain();
        this.deleting = false;
      });
    }
  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }

}
