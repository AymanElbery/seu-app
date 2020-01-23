import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FeesExceptionService } from '../../../../finance-affair/services/fees-exception.service';
import { FeesException } from '../../../../shared/models/fees-exception';
import { NgForm } from '@angular/forms';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { topmost, Frame } from 'tns-core-modules/ui/frame';
import { ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { FilePickerOptions } from 'nativescript-mediafilepicker/mediafilepicker.common';
import { Mediafilepicker } from 'nativescript-mediafilepicker';
import { android } from 'tns-core-modules/application/application';

@Component({
  selector: 'app-add-fees-exception',
  templateUrl: './add-fees-exception.component.html',
  styleUrls: ['./add-fees-exception.component.scss']
})
export class AddFeesExceptionComponent implements OnInit {


  constructor(
    private toastr: AppToasterService, private acadmicProc: FeesExceptionService) { }

  feesException: FeesException;
  reqData: any;
  msgs: any;


  banksList: any;
  itemBankSource: any;
  accountRelativeList: any;
  itemRelativeSource: any;

  haveAccountList: any;
  itemAccountSource: any;

  exceptionTypeList: any;
  itemTypeSource: any;

  associationsList: any;
  itemassociationsSource: any;

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

    this.itemAccountSource = new ValueList<any>();
    this.itemBankSource = new ValueList<any>();

    this.itemRelativeSource = new ValueList<any>();

    this.itemTypeSource = new ValueList<any>();

    this.itemassociationsSource = new ValueList<any>();

    this.accountOwner = '';
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.banksList = this.acadmicProc.reqData.banks;
    this.banksList.forEach(element => {
      this.itemBankSource.push({ value: element.id, display: element.value });
    });
    this.accountRelativeList = this.acadmicProc.reqData.account_relative;
    this.accountRelativeList.forEach(element => {
      this.itemRelativeSource.push({ value: element.id, display: element.value });
    });
    this.haveAccountList = this.acadmicProc.reqData.have_account;
    this.haveAccountList.forEach(element => {
      this.itemAccountSource.push({ value: element.id, display: element.value });
    });
    this.exceptionTypeList = this.acadmicProc.reqData.exception_type;
    this.exceptionTypeList.forEach(element => {
      this.itemTypeSource.push({ value: element.id, display: element.value });
    });

    this.associationsList = this.acadmicProc.reqData.associations;
    this.associationsList.forEach(element => {
      this.itemassociationsSource.push({ value: element.id, display: element.value });
    });

  }
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if ((res as any).status) {
        this.acadmicProc.newreqs = true;
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
    const reader = new FileReader();
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
    if (p == '1') {
      this.feesException.account_relative = '';
    }

    // console.log(p);
  }

  exceptionTypeChange(e: SelectedIndexChangedEventData) {

    this.feesException.exception_type = this.itemTypeSource.getValue(e.newIndex);
    alert(this.feesException.exception_type);
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

  assChange(p: SelectedIndexChangedEventData) {
    this.feesException.association = this.itemassociationsSource.getValue(p.newIndex);
    alert(this.feesException.association);
    this.feesException.proof_status = '';
    this.feesException.insurance_card = '';
    this.feesException.work_status = '';
    this.feesException.letter = '';
    this.feesException.mco_id_card = '';
    this.feesException.id_card = '';

  }
  public openCustomFilesPicker(type: string) {
  
  
  /*  let extensions = [];
    if (app.ios) {
        extensions = [kUTTypePDF];
    } else {
        extensions = ['pdf', 'png', 'jpeg'];
    }

    const options: FilePickerOptions = {
        android: {
            extensions,
            maxNumberFiles: 1
        },
        ios: {
            extensions,
            multipleSelection: false,
          //  hostView: this._hostView
        }
    };

    const mediafilepicker = new Mediafilepicker();
    mediafilepicker.openFilePicker(options);

    // tslint:disable-next-line: only-arrow-functions
    mediafilepicker.on('getFiles', function(res) {

        const results = res.object.get('results');
        if (results) {

            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < results.length; i++) {// only upload one file

                const result = results[i];
                if (type === 'file') {
                  filePath = result.file;
                } else {
                  imgPath = result.file;
                }
            }
        }
  });

    // tslint:disable-next-line: only-arrow-functions
    mediafilepicker.on('error', function(res) {
      const msg = res.object.get('msg');
      console.log(msg);
  });

    // tslint:disable-next-line: only-arrow-functions
    mediafilepicker.on('cancel', function(res) {
      const msg = res.object.get('msg');
      console.log(msg);
  });
}

  convertToBase64(filePath: string) {
    let base64String: string;
    let file: File;
    if (filePath != null) {
     file = File.fromPath(filePath);
    } else {
      return;
    }

    if (app.ios) {
      const text = NSString.stringWithString(file.readSync());
      const data = text.dataUsingEncoding(NSUTF8StringEncoding);
      base64String = data.base64EncodedStringWithOptions(0);
    } else {
      const text = new java.lang.String(file.readSync());
      const data = text.getBytes('UTF-8');
      base64String = android.util.Base64.encodeToString(data, android.util.Base64.DEFAULT);

    }
    return base64String;*/
  }
  goBack() {
    // tslint:disable-next-line: deprecation
    // topmost().goBack();
    Frame.topmost().goBack();

  }


}
