import { Component, OnInit, Inject } from '@angular/core';
import { ChangeMajorService } from 'src/app/academicprocs/services/change-major.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-change-major',
  templateUrl: './add-change-major.component.html',
  styleUrls: ['./add-change-major.component.scss']
})
export class AddChangeMajorComponent implements OnInit {

  printAR;
  mj: { major };
  reqData;
  msgs;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddChangeMajorComponent>,
    private toastr: AppToasterService, private acadmicProc: ChangeMajorService) { }

  ngOnInit() {
    this.mj = { major: '' };
    this.acadmicProc.getِgetRequests().then(
      res => {
        this.acadmicProc.reqData = (res as any).data;
        this.acadmicProc.msgs = (res as any).messages;
        this.reqData = this.acadmicProc.reqData;
        this.msgs = this.acadmicProc.msgs;
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
    this.addRequest(this.mj);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
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
//
