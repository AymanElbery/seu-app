import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ObjectExamService } from '../services/object-exam.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AddObjectExamComponent } from './add-object-exam/add-object-exam.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-exam-object',
  templateUrl: './exam-object.component.html',
  styleUrls: ['./exam-object.component.scss']
})
export class ExamObjectComponent implements OnInit, OnDestroy {

  reqData;
  msgs;
  status;
  isLoading = false;
  deleting = false;
  subscriptions;

  constructor(
    private translate: TranslateService,
    public dialog: MatDialog, 
    private toastr: AppToasterService, 
    private acadmicProc: ObjectExamService
  ) {

  }

  ngOnInit() {
    this.getRequests();
    this.subscribeLangChange();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
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

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = this.reqData.courses;

    let dialogref = this.dialog.open(AddObjectExamComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }

  
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
  }

  download(req) {
    return this.acadmicProc.download(req);
  }

  cancel(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.acadmicProc.cancelReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.getRequests();
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }
  }

  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.getRequests();
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }
  }
}