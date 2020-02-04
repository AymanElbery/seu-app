import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeMajorService } from '../services/change-major.service';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddCourseCancelComponent } from '../cancel-course/diag/add-course-cancel/add-course-cancel.component';
import { NgForm } from '@angular/forms';
import { AddChangeMajorComponent } from './diag/add-change-major/add-change-major.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-major',
  templateUrl: './change-major.component.html',
  styleUrls: ['./change-major.component.scss']
})
export class ChangeMajorComponent implements OnInit,OnDestroy {



  printAR;
  cancelCousre: CancelCousre;
  reqData;
  msgs;
  status;
  isLoading = false;

  constructor(private translate: TranslateService,public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: ChangeMajorService) { }

  ngOnInit() {
    this.isLoading = true;
    this.cancelCousre = { courses: null, agreement: 1 };
    this.getRequests();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
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

    let dialogref =     this.dialog.open(AddChangeMajorComponent, dialogConfig);
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
