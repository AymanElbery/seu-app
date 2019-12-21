import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Postpone } from 'src/app/shared/models/postpone';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SummerWithdrawService } from 'src/app/academicprocs/services/summer-withdraw.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-summer-withdraw',
  templateUrl: './add-summer-withdraw.component.html',
  styleUrls: ['./add-summer-withdraw.component.css']
})
export class AddSummerWithdrawComponent implements OnInit {


  postpone: Postpone;
  reqData: any;
  msgs: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddSummerWithdrawComponent>,
    private toastr: AppToasterService, private acadmicProc: SummerWithdrawService) { }

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
