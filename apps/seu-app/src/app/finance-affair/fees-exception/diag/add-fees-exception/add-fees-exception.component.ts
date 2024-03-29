import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FeesExceptionService } from 'src/app/finance-affair/services/fees-exception.service';
import { FeesException } from 'src/app/shared/models/fees-exception';
import { NgForm } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-fees-exception',
  templateUrl: './add-fees-exception.component.html',
  styleUrls: ['./add-fees-exception.component.scss']
})
export class AddFeesExceptionComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data,private translate: TranslateService,
    public dialogRef: MatDialogRef<AddFeesExceptionComponent>,
    private toastr: AppToasterService, private acadmicProc: FeesExceptionService) { }

  feesException: FeesException;
  reqData: any;
  msgs: any;


  banksList: any;
  accountRelativeList: any;
  haveAccountList: any;
  exceptionTypeList: any;
  exceptionTypeListFiltered: any;
  associationsList: any;
  isLoading = false;
  accountOwner: any;
  fileType: string;
  approve: false;

  requesting = false;

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

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  closeDiag() {
    this.dialogRef.close();
  }
  addRequest(data: any) {
    if (data.iban && data.iban.length != '22') {
      this.toastr.push([{body:this.translate.instant("services.finance.iban_not_correct"),type:'error'}]);
      return false;
    }
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if ((res as any).status) {
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
    this.addRequest(this.feesException);
  }

  handleInputChange(e, fileType) {
    this.fileType = fileType;
    // console.log('handleInputChange ');
    // console.log(this.fileType);
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /pdf-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      this.toastr.push([{body:this.translate.instant("services.finance.format_not_correct"),type:'error'}]);
      return false;
    }
    
    reader.onload = this._handleReaderLoaded.bind(this);

    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;

    // console.log('_reader ');
    // console.log(this.fileType);
    // console.log(e);

    if (this.fileType == 'bank_card') {
      this.feesException.bank_card = reader.result;
    } else if (this.fileType == 'proof_status') {
      this.feesException.proof_status = reader.result;
    } else if (this.fileType == 'insurance_card') {
      this.feesException.insurance_card = reader.result;
    } else if (this.fileType == 'id_card') {
      this.feesException.id_card = reader.result;
    } else if (this.fileType == 'work_status') {
      this.feesException.work_status = reader.result;
    } else if (this.fileType == 'letter') {
      this.feesException.letter = reader.result;
    } else if (this.fileType == 'mco_id_card') {
      this.feesException.mco_id_card = reader.result;
    }

  }

  ownerChange(p) {
    // tslint:disable-next-line: triple-equals
    if (p == '1') {
      this.feesException.account_relative = '';
    }

    // console.log(p);
  }

  exceptionTypeChange(p) {

    // this.feesException.association = '';

    // this.feesException.account_name = '';
    // this.feesException.email = '';
    // this.feesException.bank = '';
    // this.feesException.account_id = '';
    // this.feesException.account_relative = '';
    // this.feesException.iban = '';
    // this.feesException.bank_card = '';
    // this.accountOwner = '';


    // this.feesException.proof_status = '';
    // this.feesException.insurance_card = '';
    // this.feesException.id_card = '';
    // this.feesException.work_status = '';
    // this.feesException.letter = '';
    // this.feesException.mco_id_card = '';

  }

  associationChange(p: string) {
    this.feesException.proof_status = '';
    this.feesException.insurance_card = '';
    this.feesException.work_status = '';
    this.feesException.letter = '';
    this.feesException.mco_id_card = '';
    this.feesException.id_card = '';
    if (p == '3') {
      this.exceptionTypeListFiltered = [this.exceptionTypeList[1]];
    } else {
      this.exceptionTypeListFiltered = this.exceptionTypeList;
    }
  }


}
