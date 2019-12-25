import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ObjectExamService } from 'src/app/academicprocs/services/object-exam.service';
import { ObjectExam } from 'src/app/shared/models/object-exam';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-exam-object',
  templateUrl: './add-exam-object.component.html',
  styleUrls: ['./add-exam-object.component.scss']
})
export class AddExamObjectComponent implements OnInit {


  reqData: any;
  exam: ObjectExam;
  msgs: any;
  //exams;
  //courses:[];
  //teacherName:string;
  //choosedCode:string;
  //private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddExamObjectComponent>,
    private toastr: AppToasterService, private acadmicProc: ObjectExamService) { }

  ngOnInit() {
    //this.changeRequest = {camp: []};
    //this.exam = {camp:''};
    this.exam = { courses: [], exams: [], bank: -1, reason: "", account_number: "", fees_amount: "", attachment: "" };
    this.acadmicProc.getgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
        this.exam.exams = this.acadmicProc.reqData.exams;

        //this.canAdd = this.reqData.can_add_new_request;
        //this.exams=this.reqData.exams;
        ////console.log(this.reqData.banks[0]);
      }
    );

  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.dialogRef.close();
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }

    this.requesting = true;
    this.addRequest(this.exam);
  }
  closeDiag() {
    this.dialogRef.close();
  }

  changeStatus(item, checked) {
    for (let i = 0; i < this.exam.courses.length; i++) {
      if (this.exam.courses[i].CRSE == item.CRN)
        this.exam.courses.splice(i, 1);
    }
    if (checked) {
      this.exam.courses.push({ CRSE: parseInt(item.CRN), teacher: item.teacher });
    }
    console.log(this.exam.courses);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.exam.attachment = reader.result;
    //console.log(this.exam.attachment);
  }


}