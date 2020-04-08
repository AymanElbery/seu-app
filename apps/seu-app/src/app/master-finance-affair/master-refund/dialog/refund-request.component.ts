import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { PaymentRefundService } from '../../services/payment-refund.service';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { PaymentRefund } from 'src/app/shared/models/payment-refund';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-refund-request',
  templateUrl: './refund-request.component.html',
  styleUrls: ['./refund-request.component.css']
})
export class RefundRequestComponent implements OnInit {

  payrefund: PaymentRefund;
  reftype;
  messages;
  isLoading = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<RefundRequestComponent>, private translate: TranslateService,
    private toastr: AppToasterService, private refunservice: PaymentRefundService) { }

  ngOnInit() {
    this.payrefund = { refund_reason: '', iban: '', bank_name: '', name: '', last_four_id: '', refund_type: '', national_id: '', payment_reciept_copy: '' };
    this.getRequests();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.getRequests();
    });
  }

  getRequests() {
    this.isLoading = true;
    this.refunservice.getRequest().then(
      res => {
        // console.log("get data",reqData);

        this.reftype = (res as any).data["types"];
        this.messages = (res as any).data["messages"];
        //console.log("get data",this.reftype,this.messages);

        this.isLoading = false;
      }, err => {

        this.toastr.tryagain();
        this.isLoading = false;
      }
    );
  }

  closeDiag() {
    this.dialogRef.close();
  }


  requesting = false;
  addRequest(data: any) {
    this.isLoading = true;
    //console.log("save data",this.data);
    this.refunservice.AddRefundRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.refunservice.newreqs = true;
        this.dialogRef.close();

      }
      this.requesting = false;
      this.isLoading = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  onSubmit(form: NgForm) {
    // console.log("save dataa",this.payrefund);
    if ( this.payrefund.iban.length != 22) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.master_refund.erro_22digit") }]);
      return false;
    }
    if (this.payrefund.last_four_id.length != 4) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.master_refund.erro_4digit") }]);
      return false;
    }
    if (!this.payrefund.national_id) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.master_refund.erro_national_id") }]);
      return false;
    }
    if (!this.payrefund.payment_reciept_copy) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("services.master_refund.erro_reciept_copy") }]);
      return false;
    }

    this.addRequest(this.payrefund);
  }


  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    //console.log("file", file);
    const pattern = /image-*/;
    const reader = new FileReader();

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.payrefund.national_id = reader.result;
    // console.log("file",reader.result);

  }
  handleInputChangeFile(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    reader.onload = this._handleReaderLoadedFile.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoadedFile(e) {
    const reader = e.target;
    this.payrefund.payment_reciept_copy = reader.result;

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }



}
