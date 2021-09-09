import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TermPostponeCoronaService } from 'src/app/academicprocs-diplome/services/term-postpone-corona.service';
import { Postpone } from 'src/app/shared/models/postpone';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-postpone',
  templateUrl: './add-postpone-corona.component.html',
  styleUrls: ['./add-postpone-corona.component.scss']
})
export class AddPostponeCoronaComponent implements OnInit {

  postpone: Postpone;
  reqData: any;
  msgs: any;
  private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddPostponeCoronaComponent>,
    private toastr: AppToasterService, private acadmicProc: TermPostponeCoronaService) { }

  ngOnInit() {
    this.postpone = { reason: '' };
    this.reqData = this.acadmicProc.reqData;

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
    this.addRequest(form.value);
  }
  closeDiag() {
    this.dialogRef.close();
  }


}
