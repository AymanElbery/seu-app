import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { examExcuse } from 'src/app/shared/models/exam_excuse';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ExamsExecusesService } from '../../../services/exams-execuses.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-exam-execuse',
  templateUrl: './add-exam-execuse.component.html',
  styleUrls: ['./add-exam-execuse.component.scss']
})
export class AddExamExecuseComponent implements OnInit {

  examExcuse: examExcuse;
  reqData;
  msgs: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddExamExecuseComponent>,
    private toastr: AppToasterService, private acadmicProc: ExamsExecusesService) { }

  ngOnInit() {
    this.examExcuse = { courses: [], reason: '', type: '', attachment: '' };
    this.reqData = this.acadmicProc.reqData;

  }
  changeStatus(it, e) {
    if (e.target.checked) {

      this.examExcuse.courses.push({ CRSE: it.CRN });

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
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.examExcuse.attachment = reader.result;
  }


}

