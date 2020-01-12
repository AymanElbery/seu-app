import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ExamObjectionService } from 'src/app/master-academic-requests/services/exam-objection.service';
import { from } from 'rxjs';
import { AddObjectExamComponent } from './diag/add-object-exam/add-object-exam.component';
import { ObjectExam } from 'src/app/shared/models/object-exam';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-exam-objection',
  templateUrl: './exam-objection.component.html',
  styleUrls: ['./exam-objection.component.scss']
})
export class ExamObjectionComponent implements OnInit {

  printAR;
  objectexam: ObjectExam;
  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(private translate: TranslateService, public dialog: MatDialog, private toastr: AppToasterService, private acadmicProc: ExamObjectionService) { }

  ngOnInit() {
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


