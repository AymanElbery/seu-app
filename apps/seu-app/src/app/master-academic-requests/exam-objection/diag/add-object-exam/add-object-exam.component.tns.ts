import { Component, OnInit, Inject } from '@angular/core';
import { ObjectExam } from '../../../../shared/models/object-exam';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ExamObjectionService } from '../../../services/exam-objection.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import * as app from 'tns-core-modules/application';
import { File } from 'tns-core-modules/file-system';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { FilePickerOptions, Mediafilepicker, ImagePickerOptions } from 'nativescript-mediafilepicker';
import { RouterExtensions } from 'nativescript-angular/router';
declare const kUTTypePDF;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;
let imgPath: string = null;
let filePath: string = null;


@Component({
  selector: 'app-add-object-exam',
  templateUrl: './add-object-exam.component.tns.html',
  styleUrls: ['./add-object-exam.component.tns.scss']
})
export class AddObjectExamComponent implements OnInit {


  reqData: {
    "bank_names":[{"id":any,"value":any}]
    "amounts":[{"id":any,"value":any}],
    "bank_accounts":[{"id":any,"value":any}]
    };
  exam: ObjectExam;
  msgs: any;
  banks:ValueItem<number>[] = [];
  banksDropDown;
  accountNo:ValueItem<string>[] =[];
  accountNoDropDown;
  fees:ValueItem<string>[] = [];
  feesDropDown;


  constructor(
    private toastr: AppToasterService, private acadmicProc: ExamObjectionService, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.exam = { courses: [], exams: [], bank: -1, reason: "", account_number: "", fees_amount: "", attachment: "" };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.exam.exams = this.acadmicProc.reqData.exams as (Array<{CRN:string,CRSE_TITLE:string,teacher:string}>);

    this.exam.exams.forEach(element => {
      element.teacher='';
    });
    for (let i = 0; i < this.reqData.bank_names.length; i++) {
      this.banks.push(
        {
          value: this.reqData.bank_names[i].id,
          display: this.reqData.bank_names[i].value
        }
      );
    }
    this.banksDropDown = new ValueList(this.banks);

    for (let i = 0; i < this.reqData.amounts.length; i++) {
      this.fees.push(
        {
          value: this.reqData.amounts[i].id,
          display: this.reqData.amounts[i].value
        }
      );
    }
    this.feesDropDown = new ValueList(this.fees);

    for (let i = 0; i < this.reqData.bank_accounts.length; i++) {
      this.accountNo.push(
        {
          value: this.reqData.bank_accounts[i].id,
          display: this.reqData.bank_accounts[i].value
        }
      );
    }
    this.accountNoDropDown = new ValueList(this.accountNo);
  }

  
  requesting = false;
  addRequest(data: any) {
    data.bank = parseInt(data.bank);
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/academicrequests/objectexam']);
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.exam.attachment = "data:text/html;base64,"+this.convertToBase64(filePath);
    this.requesting = true;
    this.addRequest(this.exam);

  }

  changeStatus(item, e) {
    item.checekd=e.value;
    for (let i = 0; i < this.exam.courses.length; i++) {
      if (this.exam.courses[i].CRSE == item.CRN)
        this.exam.courses.splice(i, 1);
    }
    if (item.checekd) {
      console.log(item);
      this.exam.courses.push({ CRSE: parseInt(item.CRN), teacher: item.teacher });
    }
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
public openCustomFilesPicker(type:string) {
  var extensions = [];
  if (app.ios) {
      extensions = [kUTTypePDF];
  } else {
      extensions = ['png','jpeg','pdf'];
  }

  let options: FilePickerOptions = {
      android: {
          extensions: extensions,
          maxNumberFiles: 1
      },
      ios: {
          extensions: extensions,
          multipleSelection: false,
        //  hostView: this._hostView
      }
  };

  let mediafilepicker = new Mediafilepicker();
  mediafilepicker.openFilePicker(options);

  mediafilepicker.on("getFiles", function (res) {

      let results = res.object.get('results');
      if (results) {

          for (let i = 0; i < results.length; i++) {//only upload one file

              let result = results[i];
              if(type==='file'){
                filePath=result.file;
              }else{
                imgPath=result.file;
              }
          }
      }
});

mediafilepicker.on("error", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
});

mediafilepicker.on("cancel", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
});
}

convertToBase64(filePath:string){
  let base64String:string;
  let file: File;
  if(filePath!=null){
   file= File.fromPath(filePath);
  }else{
    return;
  }
  
  let data = file.readSync();

  if (app.ios) {
    base64String= data.base64EncodedStringWithOptions(0);
  } else {
    base64String= android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);

  }
  return base64String;
}
getBank(val: SelectedIndexChangedEventData) {
  const code = this.banksDropDown.getValue(val.newIndex);
  this.exam.bank=code;
}
getAccountNo(val: SelectedIndexChangedEventData) {
  const code = this.accountNoDropDown.getValue(val.newIndex);
  this.exam.account_number=code;
}
getFees(val: SelectedIndexChangedEventData) {
  const code = this.feesDropDown.getValue(val.newIndex);
  this.exam.fees_amount=code;
}

get fileName(){
  return filePath != null ? File.fromPath(filePath).name : "Browse";
}
}