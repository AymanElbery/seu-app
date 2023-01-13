import { Component, OnInit, Inject } from '@angular/core';
import { ObjectExam } from 'src/app/shared/models/object-exam';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExamObjectionService } from 'src/app/master-academic-requests/services/exam-objection.service';
import { ToastrService } from 'ngx-toastr';
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
  //exams;
  //courses:[];
  //teacherName:string;
  //choosedCode:string;
  //private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddObjectExamComponent>,
    private toastr: AppToasterService, private acadmicProc: ExamObjectionService) { }

  ngOnInit() {
    //this.changeRequest = {camp: []};
    //this.exam = {camp:''};
    this.exam = { courses: [], exams: [], bank: -1, reason: "", account_number: "", fees_amount: "", attachment: "" };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.exam.exams = this.acadmicProc.reqData.exams;

    // this.acadmicProc.getRequests().then(
    //   res => {
    //     this.acadmicProc.reqData = (res as any).data;
    //     this.acadmicProc.msgs = (res as any).messages;

    //     //this.canAdd = this.reqData.can_add_new_request;
    //     //this.exams=this.reqData.exams;
    //     ////console.log(this.reqData.banks[0]);
    //   }
    // );

  }
  requesting = false;
  addRequest(data: any) {
    data.bank = parseInt(data.bank);
    console.log(data);
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
      if (this.exam.courses[i].CRSE == item.CRN)
        this.exam.courses.splice(i, 1);
    }
    if (item.checekd) {
      this.exam.courses.push({ CRSE: parseInt(item.CRN), teacher: item.teacher });
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
    //console.log(this.exam.attachment);
  }


}