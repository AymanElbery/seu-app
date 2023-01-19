import { Component, OnInit, Inject } from '@angular/core';
import { ObjectExam } from 'src/app/shared/models/object-exam';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExamObjectionService } from '../../services/exam-objection.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-object-exam',
  templateUrl: './add-object-exam.component.html',
  styleUrls: ['./add-object-exam.component.scss']
})
export class AddObjectExamComponent implements OnInit {


  reqData: any;
  exam: ObjectExam;
  msgs: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddObjectExamComponent>,
    private toastr: AppToasterService, private examObjectionService: ExamObjectionService) { }

  ngOnInit() {
    //this.changeRequest = {camp: []};
    //this.exam = {camp:''};
    this.exam = { courses: [], exams: [], bank: -1, reason: "", account_number: "", fees_amount: "", attachment: "" };
    this.reqData = this.examObjectionService.reqData;
    this.msgs = this.examObjectionService.msgs;
    this.exam.exams = this.examObjectionService.reqData.exams;

  }
  requesting = false;
  addRequest(data: any) {
    data.bank = parseInt(data.bank);
    this.examObjectionService.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.examObjectionService.newreqs = true;
        this.dialogRef.close();
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
        console.log(err);
      });
  }
  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.exam);
  }

  closeDiag() {
    this.dialogRef.close();
  }

  changeStatus(item, e) {
    for (let i = 0; i < this.exam.courses.length; i++) {
      if (this.exam.courses[i].CRSE == item.CRSE_CODE){
        this.exam.courses.splice(i, 1);
      }
    }
    if (item.checekd) {
      this.exam.courses.push({ CRSE: item.CRSE_CODE ,CRN: parseInt(item.CRN), teacher: item.teacher });
    }
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
  }


}