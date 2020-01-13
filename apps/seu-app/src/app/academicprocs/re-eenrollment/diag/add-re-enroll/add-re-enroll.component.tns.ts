import { Component, OnInit, Inject } from '@angular/core';
import { ReEnroll } from '../../../../shared/models/re-enroll';
import { ReEnrollService } from '../../../services/re-enroll.service';
import { NgForm } from '@angular/forms';
import { AppToasterService } from '../../../../shared/services/app-toaster.tns';
import { ModalDialogParams } from 'nativescript-angular/common';
import {FilePickerOptions, Mediafilepicker } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
declare const kUTTypePDF;

@Component({
  selector: 'app-add-re-enroll',
  templateUrl: './add-re-enroll.component.tns.html',
  styleUrls: ['./add-re-enroll.component.tns.scss']
})
export class AddReEnrollComponent implements OnInit {
  constructor(
    // tslint:disable-next-line: variable-name
    private _params: ModalDialogParams,
    private toastr: AppToasterService,
    private acadmicProc: ReEnrollService,
  ) {}
  printAR;
  reEnroll: ReEnroll;
  reqData;
  msgs;

  requesting = false;

  ngOnInit() {
    this.reEnroll = { proof: '', reason: '', has_proof: '1' };
    this.acadmicProc.getِgetRequests().then(res => {
      this.acadmicProc.reqData = (res as any).data;
      this.acadmicProc.msgs = (res as any).messages;
      this.reqData = this.acadmicProc.reqData;
      this.msgs = this.acadmicProc.msgs;
    });
  }
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(
      res => {
        this.toastr.push((res as any).messages);
        if ((res as any).status) {
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
    this.addRequest(this.reEnroll);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    e.target.nextSibling.innerHTML = e.target.files[0].name;

    // console.log(e);
    // console.log(e.target.nextSibling.innerHTML);
    // console.log(e.target.files[0].name);
    // console.log(e.target.files.name);

    // let thisVal = this.val();
    /* if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
     */
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.reEnroll.proof = reader.result;
    console.log(this.reEnroll.proof);
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
  let extensions = [];

  if (app.ios) {
      extensions = [kUTTypePDF];
  } else {
      extensions = ['pdf'];
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
      console.dir(results);

      if (results) {

          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < results.length; i++) {

              const result = results[i];
              console.log(result.file);

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

}
