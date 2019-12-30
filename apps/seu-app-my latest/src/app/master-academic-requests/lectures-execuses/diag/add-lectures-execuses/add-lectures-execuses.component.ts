import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LectureExecuse } from 'src/app/shared/models/lecture-execuse';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import {LecturesExecusesService} from '../../../services/lectures-execuses.service';
@Component({
  selector: 'app-add-lectures-execuses',
  templateUrl: './add-lectures-execuses.component.html',
  styleUrls: ['./add-lectures-execuses.component.css']
})
export class AddLecturesExecusesComponent implements OnInit {

  lectureExecuse: LectureExecuse;
  msgs: any;
private imageSrc = '';
reqData;

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddLecturesExecusesComponent>,
               private toastr: ToastrService, private acadmicProc: LecturesExecusesService ) { }

  ngOnInit() {
    this.lectureExecuse = {courses: [], attachment: '', reason: '', date: '', type: '', week: ''
    };
    this.reqData = this.acadmicProc.reqData  ;
    console.log(this.reqData);

  }
  changeStatus(it, e) {
    if (e.target.checked) {
      this.lectureExecuse.courses.push({CRSE: it.CRN});
    } else {
      for (let i = 0 ; i < this.lectureExecuse.courses.length; i++) {
        console.log(this.lectureExecuse.courses[i]);
        console.log(it.CRN);
        if (this.lectureExecuse.courses[i].CRSE === it.CRN) {
          this.lectureExecuse.courses.splice(i, 1);
        }

      }    }
    console.log(this.lectureExecuse.courses);

  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.lectureExecuse.attachment = reader.result;
    console.log(this.lectureExecuse.attachment);
  }
  handleInputChange2(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded2.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded2(e) {
    const reader = e.target;
    this.lectureExecuse.attachment = reader.result;
    console.log(this.lectureExecuse.attachment);
  }
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(  res => {
   this.msgs =   (res as any).messages;
   this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });



  }
  onSubmit(form: NgForm) {

this.addRequest(this.lectureExecuse);
console.log(this.lectureExecuse);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }



}
