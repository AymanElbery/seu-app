import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ExamObjectionService } from '../services/exam-objection.service';
import { AddObjectExamComponent } from './diag/add-object-exam.component';
import { ObjectExam } from 'src/app/shared/models/object-exam';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-exam-objection-diplome',
  templateUrl: './exams-objection.component.html',
  styleUrls: ['./exams-objection.component.css']
})
export class ExamsDiplomeObjectionComponent implements OnInit,OnDestroy {

  printAR;
  objectexam: ObjectExam;
  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(
    private translate: TranslateService, 
    public dialog: MatDialog, 
    private toastr: AppToasterService, 
    private examObjectionService: ExamObjectionService
    ) { }

  ngOnInit() {
    this.objectexam = { courses: [], exams: [], reason: '', bank: -1, account_number: '', fees_amount: '', attachment: '' };
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
    this.examObjectionService.getRequests().then(
      res => {
        this.examObjectionService.reqData = (res as any).data;
        this.examObjectionService.msgs = (res as any).messages;
        this.reqData = this.examObjectionService.reqData;
        this.msgs = this.examObjectionService.msgs;
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
    /* dialogConfig.direction = "rtl";
     dialogConfig.position = { top: '100px', left: '25px' };*/

    const dialogref = this.dialog.open(AddObjectExamComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if (this.examObjectionService.newreqs) {
        this.getRequests();
        this.examObjectionService.newreqs = false;
      }
    });
  }


  deleting = false;
  delete(id, index) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.deleting = true;
      this.examObjectionService.deleteReq(id).then(res => {
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