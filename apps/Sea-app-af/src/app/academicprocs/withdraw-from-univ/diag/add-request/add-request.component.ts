import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { WithdrawFromUnivService } from 'src/app/academicprocs/services/withdraw-from-univ.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  withdraw: UnivWithdraw;
  reqData: any;
msgs: any;
private imageSrc = '';

  constructor( @Inject(MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<AddRequestComponent>,
               private toastr: ToastrService, private acadmicProc: WithdrawFromUnivService ) { }

  ngOnInit() {
    this.withdraw = {FeesForstd: 0, IBAN: '', IBANNAME: '', branch: '', email: '', mobile : null, bankimage : '', BANKID: 0};
    this.reqData = this.acadmicProc.reqData;

  }
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.withdraw.bankimage = reader.result;
    //console.log(this.withdraw.bankimage);
  }
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(  res => {
   this.msgs =   (res as any).messages;
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
