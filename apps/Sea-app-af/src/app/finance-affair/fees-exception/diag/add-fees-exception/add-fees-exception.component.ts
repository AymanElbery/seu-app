import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FeesExceptionService } from 'src/app/finance-affair/services/fees-exception.service';
import { FeesException } from 'src/app/shared/models/fees-exception';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-fees-exception',
  templateUrl: './add-fees-exception.component.html',
  styleUrls: ['./add-fees-exception.component.css']
})
export class AddFeesExceptionComponent implements OnInit {

  feesException: FeesException;
  reqData: any;
  msgs: any;


  banksList: any;
  accountRelativeList: any;
  haveAccountList: any;
  exceptionTypeList: any;
  associationsList: any;
  isLoading = false;
  accountOwner: any;
  fileType: string;
  approve: false;


  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddFeesExceptionComponent>,
    private toastr: ToastrService, private acadmicProc: FeesExceptionService) { }

  ngOnInit() {
    this.feesException = {
      exception_type: '', account_name: '', email: '', bank: '',
      iban: '', account_id: '', account_relative: '', association: '', work_status: '', proof_status: '',
      insurance_card: '', id_card: '', letter: '', mco_id_card: '', bank_card: ''
    };
    this.accountOwner = '';
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.banksList = this.acadmicProc.reqData.banks;
    this.accountRelativeList = this.acadmicProc.reqData.account_relative;
    this.haveAccountList = this.acadmicProc.reqData.have_account;
    this.exceptionTypeList = this.acadmicProc.reqData.exception_type;
    this.associationsList = this.acadmicProc.reqData.associations;

  }

  onSubmit(form: NgForm) {

    this.addRequest(this.feesException);
    this.dialogRef.close();

  }
  closeDiag() {
    this.dialogRef.close();
  }


  addRequest(data: any) {
    ////console.log(data);
    this.isLoading = true;
    this.acadmicProc.AddRequest(data).then(res => {
      this.msgs = (res as any).messages;
      this.msgs.forEach((element: any) => {
        this.toastr.success('', element.body);

      });

      this.isLoading = false;
    });
  }

  handleInputChange(e, fileType) {
    this.fileType = fileType;
    //console.log('handleInputChange ');
    //console.log(this.fileType);
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    //console.log('_reader ');
    //console.log(this.fileType);
    //console.log(e);

    if (this.fileType == 'bank_card')
      this.feesException.bank_card = reader.result;
    else if (this.fileType == 'proof_status')
      this.feesException.proof_status = reader.result;
    else if (this.fileType == 'insurance_card')
      this.feesException.insurance_card = reader.result;
    else if (this.fileType == 'id_card')
      this.feesException.id_card = reader.result;
    else if (this.fileType == 'work_status')
      this.feesException.work_status = reader.result;
    else if (this.fileType == 'letter')
      this.feesException.letter = reader.result;
    else if (this.fileType == 'mco_id_card')
      this.feesException.mco_id_card = reader.result;

  }

  ownerChange(p) {
    if (p == '1') {
      this.feesException.account_relative = '';
    }

    //console.log(p);
  }

  exceptionTypeChange(p) {

    this.feesException.association = '';

    this.feesException.account_name = '';
    this.feesException.email = '';
    this.feesException.bank = '';
    this.feesException.account_id = '';
    this.feesException.account_relative = '';
    this.feesException.iban = '';
    this.feesException.bank_card = '';
    this.accountOwner = '';


    this.feesException.proof_status = '';
    this.feesException.insurance_card = '';
    this.feesException.id_card = '';
    this.feesException.work_status = '';
    this.feesException.letter = '';
    this.feesException.mco_id_card = '';

  }

  associationChange(p) {
    this.feesException.proof_status = '';
    this.feesException.insurance_card = '';
    this.feesException.work_status = '';
    this.feesException.letter = '';
    this.feesException.mco_id_card = '';
    this.feesException.id_card = '';

  }


}
