import { Component, OnInit } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ReEnrollService } from 'src/app/master-academic-requests/services/re-enroll.service';
import { AddReEnrollComponent } from 'src/app/master-academic-requests/re-enroll/diag/add-re-enroll/add-re-enroll.component';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-re-enroll',
  templateUrl: './re-enroll.component.html',
  styleUrls: ['./re-enroll.component.scss']
})
export class ReEnrollComponent implements OnInit {


  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(private translate: TranslateService, public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: ReEnrollService) { }

  ngOnInit() {
    this.reEnroll = { proof: '', reason: '', has_proof: '' };
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
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';

    const dialogref = this.dialog.open(AddReEnrollComponent, dialogConfig);
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
          this.reqData.requests.splice(index, 1);
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
