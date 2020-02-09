import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FeesExceptionService } from '../../../../finance-affair/services/fees-exception.service';
import { FeesException } from '../../../../shared/models/fees-exception';
import { NgForm } from '@angular/forms';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { topmost, Frame } from 'tns-core-modules/ui/frame';
import { ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { FilePickerOptions, Mediafilepicker, ImagePickerOptions } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from 'tns-core-modules/file-system';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { TranslateService } from '@ngx-translate/core';
import { ThrowStmt } from '@angular/compiler';

declare const kUTTypePDF;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;
let filePath: string = null;
let scPath: string = null;
let gidPath: string = null;
let cidPath: string = null;
let wPath: string = null;
let assidPath: string = null;
let idPath: string = null;
const imgPath: string = null;
let bcPath: string = null;



@Component({
  selector: 'app-add-fees-exception',
  templateUrl: './add-fees-exception.component.html',
  styleUrls: ['./add-fees-exception.component.scss']
})
export class AddFeesExceptionComponent implements OnInit {


  constructor(private cdr: ChangeDetectorRef,
              private toastr: AppToasterService, private acadmicProc: FeesExceptionService, private trns: TranslateService) { }

  feesException: FeesException;
  reqData= {
  "banks":[],
  "account_relative":[],
  "exception_type":[],
  "associations":[],
  "have_account":[]
};
  msgs: any;
  gidText: any;
  cidText: any;
  cbText: any;
  idText: any;
  assText: any;
  wText: any;
  bcText: any;

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
  scText;
  agree: boolean;

  ngOnInit() {
    this.feesException = {
      exception_type: '', account_name: '', email: '', bank: '',
      iban: '', account_id: '', account_relative: '', association: '', work_status: '', proof_status: '',
      insurance_card: '', id_card: '', letter: '', mco_id_card: '', bank_card: ''
    };

    this.scText = this.trns.instant('general.choosefile');
    this.gidText = this.trns.instant('general.choosefile');
    this.cidText = this.trns.instant('general.choosefile');
    this.cbText = this.trns.instant('general.choosefile');

    this.idText = this.trns.instant('general.choosefile');
    this.wText = this.trns.instant('general.choosefile');
    this.assText = this.trns.instant('general.choosefile');
    this.idText = this.trns.instant('general.choosefile');

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
      this.itemBankSource.push({ value: element.BANK_PK, display: element.BANK_TITLE });
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
  changeStatus(e) {

    this.agree = e.value;

  }
  accChangee(e: SelectedIndexChangedEventData) {

   const p = this.itemAccountSource.getValue(e.newIndex);
   // tslint:disable-next-line: triple-equals
   if (p == '1') {
    this.feesException.account_relative = '';
  }
  }
  addRequest() {
    if (!this.agree) {
      this.toastr.push([{type: 'info', body: this.trns.instant('general.agree')}]);

      return;
    }
    this.feesException.proof_status = this.convertToBase64(scPath);
    this.feesException.insurance_card = this.convertToBase64(gidPath);
    this.feesException.id_card = this.convertToBase64(cidPath);
    this.feesException.letter = this.convertToBase64(assidPath);
    this.feesException.mco_id_card = this.convertToBase64(idPath);
    this.feesException.work_status = this.convertToBase64(wPath);
    this.feesException.bank_card = this.convertToBase64(bcPath);
    this.acadmicProc.AddRequest(this.feesException).then(res => {
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
    // this.addRequest(this.feesException);
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

    // tslint:disable-next-line: triple-equals
    if (this.fileType == 'bank_card') {
      this.feesException.bank_card = reader.result;
      // tslint:disable-next-line: triple-equals
    } else if (this.fileType == 'proof_status') {
      this.feesException.proof_status = reader.result;
      // tslint:disable-next-line: triple-equals
    } else if (this.fileType == 'insurance_card') {
      this.feesException.insurance_card = reader.result;
      // tslint:disable-next-line: triple-equals
    } else if (this.fileType == 'id_card') {
      this.feesException.id_card = reader.result;
      // tslint:disable-next-line: triple-equals
    } else if (this.fileType == 'work_status') {
      this.feesException.work_status = reader.result;
      // tslint:disable-next-line: triple-equals
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

  exceptionTypeChange(e: SelectedIndexChangedEventData) {

    this.feesException.exception_type = this.itemTypeSource.getValue(e.newIndex);

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

  bankChange(e: SelectedIndexChangedEventData) {

    this.feesException.bank = this.itemBankSource.getValue(e.newIndex);
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


    let extensions = [];
    if (app.ios) {
      extensions = [kUTTypePDF];
    } else {
      extensions = ['pdf', 'png', 'jpeg'];
    }

    const options: ImagePickerOptions = {
      android: {
        isCaptureMood: false, // if true then camera will open directly.
        isNeedCamera: true,
        maxNumberFiles: 1,
        isNeedFolderList: true
    }, ios: {
        isCaptureMood: false, // if true then camera will open directly.
        maxNumberFiles: 1
    }
    };


    const mediafilepicker = new Mediafilepicker();
    mediafilepicker.openImagePicker(options);
    mediafilepicker.on('getFiles', this.selectFile.bind(this));

    // tslint:disable-next-line: only-arrow-functions
    mediafilepicker.on('getFiles', function(res) {

      const results = res.object.get('results');
      console.log(results);
      let selfile = '';
      if (results) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < 1; i++) {// only upload one file
          const result = results[i];
          filePath = result.file;

          // console.log(filePath);
          if (type == 'sc') {
            scPath = filePath;
            selfile = scPath.replace(/^.*[\\\/]/, '');
            this.scText = selfile;
            // tslint:disable-next-line: triple-equals
          } else if (type == 'gid') {
            gidPath = filePath;
            selfile = gidPath.replace(/^.*[\\\/]/, '');
            this.gidText = selfile;
            // tslint:disable-next-line: triple-equals
          } else if (type == 'cid') {
            cidPath = filePath;
            selfile = cidPath.replace(/^.*[\\\/]/, '');

            this.cidText = selfile;
            // tslint:disable-next-line: triple-equals
          } else if (type == 'w') {
            wPath = filePath;
            selfile = wPath.replace(/^.*[\\\/]/, '');

            this.wText = wPath;
            // tslint:disable-next-line: triple-equals
          } else if (type == 'ass') {
            assidPath = filePath;
            selfile = assidPath.replace(/^.*[\\\/]/, '');

            this.assText = selfile ;
            // tslint:disable-next-line: triple-equals
          } else if (type == 'id') {
            idPath = filePath;
            selfile = idPath.replace(/^.*[\\\/]/, '');

            this.idText = selfile;
          } else if (type == 'bank_card') {
            bcPath = filePath;
            selfile = bcPath.replace(/^.*[\\\/]/, '');

            this.cbText = selfile;
          }

          this.cdr.detectChanges();
     }

      }
    }.bind(this));

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

  selectFile(e) {

  }
  convertToBase64(path) {
    let base64String: string;
    let file: File;
    if (path != null) {
      file = File.fromPath(path);
    } else {
      return;
    }

    base64String = this.getBase64String(file);
    console.log(base64String);
    return base64String;
  }
  getBase64String(file: File) {
    const data = file.readSync();
    if (app.ios) {
      return data.base64EncodedStringWithOptions(0);
    } else {
      return android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);
    }
  }
  goBack() {
    // tslint:disable-next-line: deprecation
    // topmost().goBack();
    Frame.topmost().goBack();

  }


}
