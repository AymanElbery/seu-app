import { Component, OnInit } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ReEnrollService } from '../services/re-enroll.service';
import { AddCourseCancelComponent } from '../cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { NgForm } from '@angular/forms';
import { AddReEnrollComponent } from './diag/add-re-enroll/add-re-enroll.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-re-eenrollment',
  templateUrl: './re-eenrollment.component.html',
  styleUrls: ['./re-eenrollment.component.scss']
})
export class ReEenrollmentComponent implements OnInit {
  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: ReEnrollService) { }

  ngOnInit() {
    this.isLoading = true;
    this.reEnroll = { proof: '', reason: '', has_proof: '1' };
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
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';

    let dialogref = this.dialog.open(AddReEnrollComponent, dialogConfig);
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
    if (confirm('هل انت متأكد؟')) {
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
  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;
  }

}
