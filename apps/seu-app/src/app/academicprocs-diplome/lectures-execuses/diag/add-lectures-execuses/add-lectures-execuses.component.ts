import { Component, OnInit, Inject } from '@angular/core';
import { LectureExecuse } from 'src/app/shared/models/lecture-execuse';
import { LectureExecuseServiceService } from 'src/app/academicprocs-diplome/services/lecture-execuse-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-lectures-execuses-diplome',
  templateUrl: './add-lectures-execuses.component.html',
  styleUrls: ['./add-lectures-execuses.component.scss']
})
export class AddLecturesExecusesComponent implements OnInit {

  lectureExecuse: LectureExecuse;
  msgs: any;
  reqData;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddLecturesExecusesComponent>,
    private toastr: AppToasterService, private acadmicProc: LectureExecuseServiceService) { }

  ngOnInit() {
    this.lectureExecuse = {
      courses: [], attachment: '', reason: '', date: '', type: '', week: '1'
    };
    this.reqData = this.acadmicProc.reqData;
  }
  changeStatus(it, e) {
    if (e.target.checked) {
      this.lectureExecuse.courses.push({ CRSE: it.CRN });
    } else {
      for (let i = 0; i < this.lectureExecuse.courses.length; i++) {
        if (this.lectureExecuse.courses[i].CRSE === it.CRN) {
          this.lectureExecuse.courses.splice(i, 1);
        }
      }
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
    this.lectureExecuse.attachment = reader.result;
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
    this.addRequest(this.lectureExecuse);
  }

  closeDiag() {
    this.dialogRef.close();
  }


}
