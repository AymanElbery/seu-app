import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ChangeCourseService } from '../../../../master-other-requests/services/change-course.service';
import { changeCourse } from '../../../../shared/models/change-course';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ModalDialogParams } from 'nativescript-angular/common';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { Frame } from 'tns-core-modules/ui/frame/frame';
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

let filePath1: string = null;
let filePath2: string = null;
let filePath3: string = null;



@Component({
  selector: 'app-add-change-course',
  templateUrl: './add-change-course.component.html',
  styleUrls: ['./add-change-course.component.scss']
})
export class AddChangeCourseComponent implements OnInit {
  outSide: boolean;
  // tslint:disable-next-line: variable-name
  constructor(private cdr: ChangeDetectorRef,
              private trns: TranslateService,
              private toastr: AppToasterService,
              private acadmicProc: ChangeCourseService) { }

  printAR;
  course: changeCourse;
  reqData:{"majors":[{"key":number,"value":any}]};
  msgs;
  hiddenfield: true;
  majors: ValueItem<number>[] = [];
  majorsDropDown;
  requesting = false;
  fileTxt0 = '';
  fileTxt1 = '';
  fileTxt2 = '';

  ngOnInit() {
    this.course = { major: '', mobile: '', reason: '', outside: '', bacholar_copy: '', academic_record: '' };
    this.reqData = this.acadmicProc.reqData;
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.reqData.majors.length; i++) {
      this.majors.push(
        {
          value: this.reqData.majors[i].key,
          display: this.reqData.majors[i].value
        }
      );
    }
    this.majorsDropDown = new ValueList(this.majors);
    this.fileTxt0 = this.trns.instant('general.choosefile');
    this.fileTxt1 = this.trns.instant('general.choosefile');
    this.fileTxt2 = this.trns.instant('general.choosefile');


  }
  changeStatus(e) {

    this.outSide = e.value;

  }
  addRequest(data: changeCourse) {
    data.academic_record = this.convertToBase64(filePath1);
    data.bacholar_copy = this.convertToBase64(filePath2);
    data.outside = '';
    // tslint:disable-next-line: triple-equals
    if (filePath3 != '') {
      data.outside = this.convertToBase64(filePath3);
    }
    this.acadmicProc.AddRequest(data).then(res => {
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
      });
  }
  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    this.addRequest(this.course);
  }

  print(req) {
    // return this.acadmicProc.(req);

  }

  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  closeDiag() {
  }
  getmajor(val: SelectedIndexChangedEventData) {
    const code = this.majorsDropDown.getValue(val.newIndex);
    this.course.major = code;
  }

  goBack() {
    // tslint:disable-next-line: deprecation
    // topmost().goBack();
    Frame.topmost().goBack();

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
          // tslint:disable-next-line: triple-equals
          if (type == '1') {
            filePath1 = filePath;
            selfile = filePath1.replace(/^.*[\\\/]/, '');
            this.fileTxt0 = selfile;
            // tslint:disable-next-line: triple-equals
          } else if (type == '2') {
            filePath2 = filePath;
            selfile = filePath2.replace(/^.*[\\\/]/, '');
            this.fileTxt1 = selfile;
            // tslint:disable-next-line: triple-equals
          } else if (type == '3') {
            filePath3 = filePath;
            selfile = filePath3.replace(/^.*[\\\/]/, '');
            this.fileTxt2 = selfile;
          }
            // tslint:disable-next-line: triple-equals
          // } else if (type == 'w') {
          //   wPath = filePath;
          //   selfile = wPath.replace(/^.*[\\\/]/, '');

          //   this.wText = wPath;
          //   // tslint:disable-next-line: triple-equals
          // } else if (type == 'ass') {
          //   assidPath = filePath;
          //   selfile = assidPath.replace(/^.*[\\\/]/, '');

          //   this.assText = selfile ;
          //   // tslint:disable-next-line: triple-equals
          // } else if (type == 'id') {
          //   idPath = filePath;
          //   selfile = idPath.replace(/^.*[\\\/]/, '');

          //   this.idText = selfile;
          // } else if (type == 'bank_card') {
          //   bcPath = filePath;
          //   selfile = bcPath.replace(/^.*[\\\/]/, '');

          //   this.cbText = selfile;
          // }

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
}
