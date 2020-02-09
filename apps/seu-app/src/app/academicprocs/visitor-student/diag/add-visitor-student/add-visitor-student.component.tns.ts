import { Component, OnInit, Inject } from '@angular/core';
import { VisitorStudentService } from '../../../services/visitor-student.service';
import { VisitorStudent } from '../../../../shared/models/visitor-student';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { RouterExtensions } from 'nativescript-angular/router';
import { FilePickerOptions, Mediafilepicker, ImagePickerOptions } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from 'tns-core-modules/file-system';
 
declare const kUTTypePDF;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;
let filePath: string = null;
let imgPath: string = null;

@Component({
  selector: 'app-add-visitor-student',
  templateUrl: './add-visitor-student.component.tns.html',
  styleUrls: ['./add-visitor-student.component.tns.scss']
})
export class AddVisitorStudentComponent implements OnInit {

  visitorStudent: VisitorStudent
  reqData= {"notes":[]};
  msgs: any;
  universitiesList: [any];
  termList: [any];
  yearList: [any];
  coursesList: [any];
  isLoading = false;
  approves:{approve};
  univs:ValueItem<number>[] = [];
  terms:ValueItem<number>[] = [];
  years:ValueItem<number>[] = [];
  subjects:ValueItem<number>[] = [];
  univsDropDown;
  termsDropDown;
  yearsDropDown;
  subjectsDropDown;
  constructor(
      private toastr: AppToasterService,
      private acadmicProc: VisitorStudentService,
      private routerExtensions: RouterExtensions) { }

      get fileName(){
        return filePath != null ? File.fromPath(filePath).name : "Browse";
      }
      get imageName(){
        return imgPath != null ? File.fromPath(imgPath).name : "Browse";
      }

  ngOnInit() {
    this.approves={approve:false};
    this.visitorStudent = { university: '', term: '', year: '', course_name: '', course_symbol: '', course_code: '', course_equal: '', hours: 0, attachment: '' };
    this.reqData = this.acadmicProc.reqData;
    this.msgs = this.acadmicProc.msgs;
    this.universitiesList = this.acadmicProc.reqData.universities_list;
    this.termList = this.acadmicProc.reqData.term_list;
    this.yearList = this.acadmicProc.reqData.year_list;
    this.coursesList = this.acadmicProc.reqData.courses_list;

    for (let i = 0; i < this.universitiesList.length; i++) {
        this.univs.push(
          {
            value: this.universitiesList[i].UN_ID,
            display: this.universitiesList[i].UN_NAME
          }
        );
      }
      for (let i = 0; i < this.termList.length; i++) {
        this.terms.push(
          {
            value: this.termList[i].id,
            display: this.termList[i].value
          }
        );
      }
      for (let i = 0; i < this.yearList.length; i++) {
        this.years.push(
          {
            value: this.yearList[i].id,
            display: this.yearList[i].value
          }
        );
      }
      for (let i = 0; i < this.coursesList.length; i++) {
        this.subjects.push(
          {
            value: this.coursesList[i].id,
            display: this.coursesList[i].value
          }
        );
      }
      this.yearsDropDown = new ValueList(this.years);
      this.termsDropDown = new ValueList(this.terms);
      this.univsDropDown = new ValueList(this.univs);
      this.subjectsDropDown = new ValueList(this.subjects);

  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/procedures/visitorstudent']);
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
    this.visitorStudent.attachment =this.convertToBase64(filePath);
    this.requesting = true;
    this.addRequest(this.visitorStudent);
  }
  public openCustomFilesPicker(type:string) {
    var extensions = [];
    if (app.ios) {
        extensions = [kUTTypePDF];
    } else {
        extensions = ['pdf','png','jpeg','jpg','bmp'];
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

  goBack() {
    this.routerExtensions.backToPreviousPage();
}
getUniv(val: SelectedIndexChangedEventData) {
    const code = this.univsDropDown.getValue(val.newIndex);
    this.visitorStudent.university=code;
  }
getTerm(val: SelectedIndexChangedEventData) {
    const code = this.termsDropDown.getValue(val.newIndex);
    this.visitorStudent.term=code;
  }
  getYear(val: SelectedIndexChangedEventData) {
    const code = this.yearsDropDown.getValue(val.newIndex);
    this.visitorStudent.year=code;
  }
  getSubject(val: SelectedIndexChangedEventData) {
    const code = this.subjectsDropDown.getValue(val.newIndex);
    this.visitorStudent.course_equal=code;
  }
}
