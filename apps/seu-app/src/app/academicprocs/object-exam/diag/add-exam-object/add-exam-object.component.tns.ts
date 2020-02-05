import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ObjectExamService } from '../../../services/object-exam.service';
import { ObjectExam } from '../../../../shared/models/object-exam';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { RouterExtensions } from 'nativescript-angular/router';
import { FilePickerOptions, Mediafilepicker, ImagePickerOptions } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from 'tns-core-modules/file-system';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
declare const kUTTypePDF;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;
let imgPath: string = null;
let filePath: string = null;

@Component({
  selector: 'app-add-exam-object',
  templateUrl: './add-exam-object.component.tns.html',
  styleUrls: ['./add-exam-object.component.tns.scss']
})
export class AddExamObjectComponent implements OnInit {


  reqData: {"banks":[any]};
  exam: ObjectExam;
  msgs: any;
  banks:ValueItem<number>[] = [];
  banksDropDown;
  accountNo:ValueItem<string>[] = [
    {
      "value":"1",
      "display":"SA2315000999222200220034"
  }
  ];
  accountNoDropDown=new ValueList(this.accountNo);

  fees:ValueItem<string>[] = [
    {
      "value":"500",
      "display":"500 RS"
  },
  {
    "value":"1000",
    "display":"1000 RS"
  },   {
  "value":"1500",
  "display":"1500 RS"
  }
  ];
  feesDropDown=new ValueList(this.fees);

  constructor(
    private toastr: AppToasterService,
     private acadmicProc: ObjectExamService,
     private routerExtensions: RouterExtensions) { }
     
  get imageName(){
      return imgPath != null ? File.fromPath(imgPath).name : "Browse";
    }

  ngOnInit() {

    this.exam = { courses: [], exams: [], bank: -1, reason: "", account_number: "", fees_amount: "", attachment: "" };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.exam.exams = this.acadmicProc.reqData.exams;

    for (let i = 0; i < this.reqData.banks.length; i++) {
      this.banks.push(
        {
          value: this.reqData.banks[i].id,
          display: this.reqData.banks[i].value
        }
      );
    }
    this.banksDropDown = new ValueList(this.banks);

  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/procedures/objectexam']);
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
    this.exam.attachment=this.convertToBase64(imgPath);
    this.addRequest(this.exam);
  }

  changeStatus(item, e) {
    for (let i = 0; i < this.exam.courses.length; i++) {
      if (this.exam.courses[i].CRSE == item.CRN)
        this.exam.courses.splice(i, 1);
    }
    if (e.value) {
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
      extensions = ['png','jpeg'];
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
}