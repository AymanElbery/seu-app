import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Postpone } from 'src/app/shared/models/postpone';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { SummerWithdrawService } from 'src/app/academicprocs/services/summer-withdraw.service';

@Component({
  selector: 'app-add-summer-withdraw',
  templateUrl: './add-summer-withdraw.component.html',
  styleUrls: ['./add-summer-withdraw.component.css']
})
export class AddSummerWithdrawComponent implements OnInit {


  postpone: Postpone;
  reqData: any;
msgs: any;

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddSummerWithdrawComponent>,
               private toastr: ToastrService, private acadmicProc: SummerWithdrawService ) { }

  ngOnInit() {
    this.postpone = { reason: ''};
    this.reqData = this.acadmicProc.reqData;

  }

  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(  res => {
      console.log(data);
      this.msgs =   (res as any).messages;
      console.log(this.msgs);
      this.msgs.forEach((element: any) => {
    this.toastr.success('', element.body);

    });
        });



  }
  onSubmit(form: NgForm) {
this.addRequest(form.value);
this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }

}
