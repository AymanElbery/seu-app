import { Component, OnInit, Inject } from "@angular/core";
import { ReEnroll } from "../../../../shared/models/re-enroll";
import { ReEnrollService } from "../../../services/re-enroll.service";
import { AppToasterService } from '../../../../shared/services/app-toaster.tns';
import { ModalDialogParams } from 'nativescript-angular/common';
import {FilePickerOptions, Mediafilepicker } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from "tns-core-modules/file-system";


declare const kUTTypePDF;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;
var filePath:string=null;

@Component({
  selector: "app-add-re-enroll",
  templateUrl: "./add-re-enroll.component.tns.html",
  styleUrls: ["./add-re-enroll.component.tns.scss"]
})
export class AddReEnrollComponent implements OnInit {
  printAR;
  reqData;
  msgs;
  reEnroll:ReEnroll={ proof: "", reason: "", has_proof: "1" };

  constructor(
    private _params: ModalDialogParams,
    private toastr: AppToasterService,
    private acadmicProc: ReEnrollService,
  ) {}

  ngOnInit() {
    this.acadmicProc.getِgetRequests().then(res => {
      this.acadmicProc.reqData = (res as any).data;
      this.acadmicProc.msgs = (res as any).messages;
      this.reqData = this.acadmicProc.reqData;
      this.msgs = this.acadmicProc.msgs;
    });
  }
  get fileName(){
    return filePath != null ? File.fromPath(filePath).name : "Browse";
  }
  requesting = false;
  addRequest(data: any) {

   this.acadmicProc.AddRequest(data).then(
      res => {
        this.toastr.push((res as any).messages);
        if (res["status"]) {
          this.acadmicProc.newreqs = true;
          this.closeDiag();
        }
        this.requesting = false;
      },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      }
    );
  }

  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.reEnroll.proof=this.convertToBase64()
    this.addRequest(this.reEnroll);
  }
  
  print(req) {
    return this.acadmicProc.Download(req);
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

convertToBase64(){
  let base64String:string;
  let file: File = File.fromPath(filePath);
  if (app.ios) {
    let text = NSString.stringWithString(file.readSync());
    let data = text.dataUsingEncoding(NSUTF8StringEncoding);
    base64String= data.base64EncodedStringWithOptions(0);
  } else {
    let text = new java.lang.String(file.readSync());
    let data = text.getBytes("UTF-8");
    base64String= android.util.Base64.encodeToString(data, android.util.Base64.DEFAULT);

  }
  return base64String;
}

}
