import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import{ExamObjectionService} from 'src/app/master-academic-requests/services/exam-objection.service';
import { from } from 'rxjs';
import { AddObjectExamComponent } from './diag/add-object-exam/add-object-exam.component';
import { ObjectExam } from 'src/app/shared/models/object-exam';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exam-objection',
  templateUrl: './exam-objection.component.html',
  styleUrls: ['./exam-objection.component.css']
})
export class ExamObjectionComponent implements OnInit {

  printAR;
  objectexam:ObjectExam;
  reqData;
  msgs;
  status;
  isLoading = false;
  constructor(public dialog: MatDialog, private toastr: ToastrService, private acadmicProc: ExamObjectionService) { }

  ngOnInit() {
    this.isLoading = true;
    this.objectexam = {courses:[],exams:[],reason:'',bank:-1,account_number:'',fees_amount:'',attachment:'' };
    this.acadmicProc.getRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.isLoading = false;
        //  console.log(this.reqData.requests);
      }
    );
  }

  openDialoge() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.height = '80%';
   /* dialogConfig.direction = "rtl";
    dialogConfig.position = { top: '100px', left: '25px' };*/

    this.dialog.open(AddObjectExamComponent, dialogConfig);
  }

  addRequest(data) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.acadmicProc.msgs = (res as any).messages;
    });
  }
  onSubmit(form: NgForm) {
    this.addRequest(form.value);


  }


  delete(id, index) {
    if (confirm('هل انت متأكد')) {
      this.acadmicProc.deleteReq(id).then(res => {
        this.msgs = (res as any).messages;
        this.status = (res as any).status;

        this.msgs.forEach((element: any) => {
          this.toastr.success('', element.body);

        });
        if (this.status === 1) {
          this.acadmicProc.reqData.requests.splice(index, 1);
        }
      });

    }

  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }

}


