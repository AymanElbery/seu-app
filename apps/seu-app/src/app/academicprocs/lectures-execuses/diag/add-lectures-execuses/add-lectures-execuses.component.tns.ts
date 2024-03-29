import { Component, OnInit, Inject } from '@angular/core';
import { LectureExecuse } from '../../../../shared/models/lecture-execuse';
import { LectureExecuseServiceService } from '../../../services/lecture-execuse-service.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { RouterExtensions } from 'nativescript-angular/router';

import { FilePickerOptions, Mediafilepicker } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from "tns-core-modules/file-system";
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';

declare const kUTTypePDF;
declare var android: any;
var filePath:string=null;
var imgPath:string=null;

@Component({
  selector: 'app-add-lectures-execuses',
  templateUrl: './add-lectures-execuses.component.tns.html',
  styleUrls: ['./add-lectures-execuses.component.tns.scss']
})
export class AddLecturesExecusesComponent implements OnInit {

  lectureExecuse: LectureExecuse;
  msgs: any;
  private imageSrc = '';
  reqData={
    "text_list":[],
    "schedules":[],
    "lectures_type":[],
    "weeks_list":[],
    "weeks_dates":[]
  };
  dates:ValueItem<number>[] = [];
  weeks:ValueItem<number>[] = [];
  lecs:ValueItem<number>[] = [];
  datesDropDown;
  weeksDropDown;
  lecsDropDown;
  
  constructor(private routerExtensions: RouterExtensions,
    private toastr: AppToasterService, private acadmicProc: LectureExecuseServiceService) { }

  ngOnInit() {
    this.lectureExecuse = {
      courses: [], attachment: '', reason: '', date: '', type: '', week: '1'
    };
    this.reqData = this.acadmicProc.reqData;
    if(this.reqData){
      for (let i = 0; i < this.reqData.lectures_type.length; i++) {
        this.lecs.push(
          {
            value: this.reqData.lectures_type[i].id,
            display: this.reqData.lectures_type[i].value
          }
        );
      }
  
      this.lecsDropDown = new ValueList(this.lecs);
  
      for (let i = 0; i < this.reqData.weeks_list.length; i++) {
        this.weeks.push(
          {
            value: this.reqData.weeks_list[i].id,
            display: this.reqData.weeks_list[i].value
          }
        );
      }
      this.weeksDropDown = new ValueList(this.weeks);
  
      for (let i = 0; i < this.reqData.weeks_dates[this.lectureExecuse.week].length; i++) {
        this.dates.push(
          {
            value: this.reqData.weeks_dates[this.lectureExecuse.week][i],
            display: this.reqData.weeks_dates[this.lectureExecuse.week][i]
          }
        );
      }
      this.datesDropDown = new ValueList(this.dates);
  
    }
    
  }
  changeStatus(it, e) {
    if (e.value) {
      this.lectureExecuse.courses.push({ CRSE: it.CRN });
    } else {
      for (let i = 0; i < this.lectureExecuse.courses.length; i++) {
        if (this.lectureExecuse.courses[i].CRSE === it.CRN) {
          this.lectureExecuse.courses.splice(i, 1);
        }
      }
    }

  }
 

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/procedures/lecexecuse']);
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

    this.lectureExecuse.attachment = this.convertToBase64(filePath);
    this.requesting = true;
    this.addRequest(this.lectureExecuse);
  }

  public openCustomFilesPicker(type:string) {
    var extensions = [];
    if (app.ios) {
        extensions = [kUTTypePDF];
    } else {
        extensions = ['pdf','png','jpeg'];
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
  get fileName(){
    return filePath != null ? File.fromPath(filePath).name : "Browse";
  }
  get imageName(){
    return imgPath != null ? File.fromPath(imgPath).name : "Browse";
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}


getLec(val: SelectedIndexChangedEventData) {
  const code = this.lecsDropDown.getValue(val.newIndex);
  this.lectureExecuse.type=code;
}
getWeek(val: SelectedIndexChangedEventData) {
  const code = this.weeksDropDown.getValue(val.newIndex);
  this.lectureExecuse.week=code;
}
getDate(val: SelectedIndexChangedEventData) {
  const code = this.datesDropDown.getValue(val.newIndex);
  this.lectureExecuse.date=code;
}
}
