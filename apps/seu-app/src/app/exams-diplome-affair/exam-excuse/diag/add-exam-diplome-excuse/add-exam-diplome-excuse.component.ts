import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { examExcuse } from 'src/app/shared/models/exam_excuse';
import { ExamDiplomeExcuseService } from '../../../services/exam-excuse.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
@Component({
  selector: 'app-add-exam-diplome-excuse',
  templateUrl: './add-exam-diplome-excuse.component.html',
  styleUrls: ['./add-exam-diplome-excuse.component.scss']
})
export class AddExamDiplomeExcuseComponent implements OnInit {

  examExcuse: examExcuse;
  reqData;
  msgs: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddExamDiplomeExcuseComponent>,
    private toastr: AppToasterService, private acadmicProc: ExamDiplomeExcuseService) { }

  ngOnInit() {
    this.examExcuse = { courses: [], reason: '', type: '', attachment: '' };
    this.reqData = this.acadmicProc.reqData;
  }
  changeStatus(it, e) {
    if (e.target.checked) {
      this.examExcuse.courses.push({ CRSE: it.CRN });
    } else {
      const index = this.examExcuse.courses.findIndex((item) => { return item.CRSE == it.CRN });
      if (index > -1) {
        this.examExcuse.courses.splice(index, 1);
      }
    }
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
    this.addRequest(this.examExcuse);
  }
  closeDiag() {
    this.dialogRef.close();
  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.examExcuse.attachment = reader.result;
  }


}
