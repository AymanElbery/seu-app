import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TermPostponeService } from 'src/app/academicprocs/services/term-postpone.service';
import { AddRequestComponent } from 'src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component';
import { ToastrService } from 'ngx-toastr';
import { Postpone } from 'src/app/shared/models/postpone';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-postpone',
  templateUrl: './add-postpone.component.html',
  styleUrls: ['./add-postpone.component.css']
})
export class AddPostponeComponent implements OnInit {

  postpone: Postpone;
  reqData: any;
  msgs: any;
  private imageSrc = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddPostponeComponent>,
    private toastr: AppToasterService, private acadmicProc: TermPostponeService) { }

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
