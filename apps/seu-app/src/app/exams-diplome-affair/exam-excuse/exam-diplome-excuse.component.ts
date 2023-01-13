import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ExamDiplomeExcuseService } from '../services/exam-excuse.service';
import { AddExamDiplomeExcuseComponent } from './diag/add-exam-diplome-excuse/add-exam-diplome-excuse.component';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-exam-diplome-excuse',
  templateUrl: './exam-diplome-excuse.component.html',
  styleUrls: ['./exam-diplome-excuse.component.scss']
})
export class ExamDiplomeExcuseComponent implements OnInit {
  req_data;
  msgs;
  status;
  isLoading = false;
  
  constructor(
    private translate: TranslateService, 
    public dialog: MatDialog, 
    private toastr: AppToasterService, 
    private acadmicProc: ExamDiplomeExcuseService
  ) {

  }

  ngOnInit() {
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
    this.acadmicProc.getgetRequests().then(
      (res :any) => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.req_data = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
      }, err => {
        console.log(err);
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

    let dialogref = this.dialog.open(AddExamDiplomeExcuseComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.acadmicProc.newreqs) {
        this.getRequests();
        this.acadmicProc.newreqs = false;
      }
    });
  }

  deleting = false;
  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.acadmicProc.deleteReq(id).then(res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status == 1) {
          this.req_data.requests.splice(index, 1);
        }
        this.deleting = false;
      }
        , err => {
          this.toastr.tryagain();
          this.deleting = false;
        });
    }
  }
  download(req) {
    return this.acadmicProc.download(req);
  }
}