import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UniversityWithdrawalService } from 'src/app/master-academic-requests/services/university-withdrawal.service';
import { masterWithdrawal } from 'src/app/shared/models/master-withdrawal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-withdrawal-request',
  templateUrl: './add-withdrawal-request.component.html',
  styleUrls: ['./add-withdrawal-request.component.css']
})
export class AddWithdrawalRequestComponent implements OnInit {

  withdrawalReq: masterWithdrawal;
  reqData: any;
  msgs: any;

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddWithdrawalRequestComponent>,
               private toastr: ToastrService, private acadmicProc: UniversityWithdrawalService ) { }

  ngOnInit() {
    this.withdrawalReq = { email: '',mobile:''};
    this.reqData = this.acadmicProc.reqData;

  }

  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(  res => {
      this.msgs =   (res as any).messages;
      //console.log(this.msgs);
      this.msgs.forEach((element: any) => {
       this.toastr.success('', element.body);

    });
        });



  }
  onSubmit(form: NgForm) {
    this.addRequest(this.withdrawalReq);
    //console.log(this.withdrawalReq);
    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }

}
