import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UniversityWithdrawalService } from 'src/app/master-academic-requests/services/university-withdrawal.service';
import { masterWithdrawal } from 'src/app/shared/models/master-withdrawal';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-withdrawal-request',
  templateUrl: './add-withdrawal-request.component.html',
  styleUrls: ['./add-withdrawal-request.component.scss']
})
export class AddWithdrawalRequestComponent implements OnInit {

  withdrawalReq: masterWithdrawal;
  reqData: any;
  msgs: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddWithdrawalRequestComponent>,
    private toastr: AppToasterService, private acadmicProc: UniversityWithdrawalService) { }

  ngOnInit() {
    this.withdrawalReq = { email: '', mobile: '' };
    this.reqData = this.acadmicProc.reqData;

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
  requesting = false;
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.withdrawalReq);
  }
  closeDiag() {
    this.dialogRef.close();
  }

}
