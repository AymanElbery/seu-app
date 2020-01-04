import { Component, OnInit, Inject } from '@angular/core';
import { ReEnroll } from 'src/app/shared/models/re-enroll';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ReEnrollService } from 'src/app/master-academic-requests/services/re-enroll.service';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-re-enroll',
  templateUrl: './add-re-enroll.component.html',
  styleUrls: ['./add-re-enroll.component.scss']
})
export class AddReEnrollComponent implements OnInit {

  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddReEnrollComponent>,
    private toastr: AppToasterService, private acadmicProc: ReEnrollService) { }

  ngOnInit() {
    this.reEnroll = { proof: '', reason: '', has_proof: '' };

    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;

    // this.acadmicProc.getِgetRequests().then(
    //   res => {
    //     this.acadmicProc.reqData = (res as any).data;
    //     this.acadmicProc.msgs = (res as any).messages;
    //     this.reqData = this.acadmicProc.reqData;
    //     this.msgs = this.acadmicProc.msgs;
    //   }
    // );
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
    if (this.reEnroll.has_proof.toString() == "true") {
      this.reEnroll.has_proof = "1"
    }
    else {
      this.reEnroll.has_proof = "0"
    }
    this.addRequest(this.reEnroll);
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
    this.reEnroll.proof = reader.result;

  }

  print(req) {
    return this.acadmicProc.Download(req);

  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {

    this.dialogRef.close();
  }
}
