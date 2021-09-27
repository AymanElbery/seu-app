import { Component, OnInit, Inject } from '@angular/core';
import { ChangeCampMajorService } from 'src/app/academicprocs/services/change-camp-major.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-change-camp-major',
  templateUrl: './add-change-camp-major.component.html',
  styleUrls: ['./add-change-camp-major.component.scss']
})
export class AddChangeCampMajorComponent implements OnInit {
  printAR;
  cmp: { camp };
  mj: { major };
  reqData;
  msgs;
  majors = [];
  requesting = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddChangeCampMajorComponent>,
    private toastr: AppToasterService, private acadmicProc: ChangeCampMajorService) { }

  ngOnInit() {
    this.cmp = { camp: '' };
    this.mj = { major: '' };
    this.reqData = this.data;
    this.msgs = this.acadmicProc.msgs;
  }

  changeCamp(){
    this.requesting = true;
    this.acadmicProc.getMajors(this.cmp.camp).then(
      res => {
        this.majors = (res as any).data.majors;
        this.requesting = false;
      }, err => {
        this.toastr.tryagain();
        this.requesting = false;
      }
    );
  }
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
    let data = {
      camp: this.cmp.camp,
      major: this.mj.major,
    }
    this.addRequest(data);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
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
