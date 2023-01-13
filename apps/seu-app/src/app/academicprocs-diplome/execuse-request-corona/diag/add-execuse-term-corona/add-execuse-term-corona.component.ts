import { Component, OnInit, Inject } from '@angular/core';
import { Postpone } from 'src/app/shared/models/postpone';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddPostponeComponent } from 'src/app/academicprocs/postpone-request/diag/add-postpone/add-postpone.component';
import { ToastrService } from 'ngx-toastr';
import { TermPostponeService } from 'src/app/academicprocs/services/term-postpone.service';
import { NgForm } from '@angular/forms';
import { TermExecuseCoronaService } from 'src/app/academicprocs-diplome/services/term-execuse-corona.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-execuse-term',
  templateUrl: './add-execuse-term-corona.component.html',
  styleUrls: ['./add-execuse-term-corona.component.scss']
})
export class AddExecuseTermCoronaComponent implements OnInit {

  postpone: Postpone;
  reqData: any;
  msgs: any;
  private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddExecuseTermCoronaComponent>,
    private toastr: AppToasterService, private acadmicProc: TermExecuseCoronaService) { }

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
