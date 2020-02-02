import { Component, OnInit} from '@angular/core';
import { ReEnroll } from '../../../../shared/models/re-enroll';
import { ReEnrollService } from '../../../services/re-enroll.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ModalDialogParams } from 'nativescript-angular/common';
import {FilePickerOptions, Mediafilepicker } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from "tns-core-modules/file-system";

declare const kUTTypePDF;
declare var android: any;
var filePath:string=null;
@Component({
  selector: 'app-add-re-enroll',
  templateUrl: './add-re-enroll.component.tns.html',
  styleUrls: ['./add-re-enroll.component.tns.scss']
})
export class AddReEnrollComponent implements OnInit {

  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;
  constructor(private _params: ModalDialogParams,
    private toastr: AppToasterService, private acadmicProc: ReEnrollService) { }

  ngOnInit() {
    this.reEnroll = { proof: '', reason: '', has_proof: '' };

    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.closeDiag();
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
    this.requesting = true;
    if (this.reEnroll.has_proof.toString() == "true") {
      this.reEnroll.has_proof = "1"
      this.reEnroll.proof=this.convertToBase64()
    }
    else {
      this.reEnroll.has_proof = "0"
    }
    this.addRequest(this.reEnroll);
  }
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
    this._params.closeCallback();
  }

 public openCustomFilesPicker() {
    var extensions = [];
    if (app.ios) {
        extensions = [kUTTypePDF];
    } else {
        extensions = ['pdf'];
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
                filePath=result.file;
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
changeStatus(e){
  this.reEnroll.has_proof=e.value;

}
convertToBase64(){
  let base64String:string;
  let file: File
  if(filePath!=null){
     file = File.fromPath(filePath);
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
get fileName(){
  return filePath != null ? File.fromPath(filePath).name : "Browse";
}
}
