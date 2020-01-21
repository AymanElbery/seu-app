import { Component, OnInit} from '@angular/core';
import { CourseEqual } from '../../../../shared/models/course-equal';
import { CourseEqualizerService } from '../../../services/course-equalizer.service';
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
  selector: 'app-add-course-equalize',
  templateUrl: './add-course-equalize.component.tns.html',
  styleUrls: ['./add-course-equalize.component.tns.scss']
})
export class AddCourseEqualizeComponent implements OnInit {
;

  constructor(
    private toastr: AppToasterService, 
    private acadmicProc: CourseEqualizerService,
    private routerExtensions: RouterExtensions) { }
  get fileName(){
    return filePath != null ? File.fromPath(filePath).name : "Browse";
  }
  get imageName(){
    return imgPath != null ? File.fromPath(imgPath).name : "Browse";
  }

  curseEqual: CourseEqual;
  reqData: CourseEqual;
  msgs: any;
  private imageSrc = '';
  univs:ValueItem<number>[] = [];
  hours:ValueItem<number>[] = [];
  grades:ValueItem<number>[] = [];
  langs:ValueItem<number>[] = [
    {
      "value":1,
      "display":"عربى"
  },
    {
      "value":2,
      "display":"English"
    }
  ];
  univsDropDown;
  hoursDropDown;
  gradesDropDown;
  langsDropDown=new ValueList(this.langs);  requesting = false;

  ngOnInit() {
    this.curseEqual = {
      courses: [],
      can_add_new_request: false,
      course_list: [],
      messages: [],
      univ_list_arr: [],
      PREV_UNIV: 0,
      DESC_CRSE_FILE: '', TRANSCRIPT_FILE: '', notes: '',
      hourse_list:[],
      grade_list:[]
    };
    this.reqData = this.acadmicProc.reqData as CourseEqual;
    for (let i = 0; i < this.reqData.univ_list_arr.length; i++) {
      this.univs.push(
        {
          value: this.reqData.univ_list_arr[i].UN_ID,
          display: this.reqData.univ_list_arr[i].UN_NAME
        }
      );
    }
    for (let i = 0; i < this.reqData.hourse_list.length; i++) {
      this.hours.push(
        {
          value: this.reqData.hourse_list[i].value,
          display: this.reqData.hourse_list[i].value
        }
      );
    }
    for (let i = 0; i < this.reqData.grade_list.length; i++) {
      this.grades.push(
        {
          value: this.reqData.grade_list[i].value,
          display: this.reqData.grade_list[i].value
        }
      );
    }
    this.gradesDropDown = new ValueList(this.grades);
    this.hoursDropDown = new ValueList(this.hours);
    this.univsDropDown = new ValueList(this.univs);

  }
  changeStatus(it, e) {
    if (e.value) {
      it.TRNS_CRSE = it.CRSE_PK;
      this.curseEqual.courses.push(it);
    } else {
      for (let i = 0; i < this.curseEqual.courses.length; i++) {
        if (this.curseEqual.courses[i].TRNS_CRSE == it.TRNS_CRSE) {
          this.curseEqual.courses.splice(i, 1);
        }

      }
    }

  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      alert(res);
      this.toastr.push((res as any).messages);
      if (res['status']) {
        console.log("resultttttttttttt",res);
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/procedures/equalize']);
      }
      this.requesting = false;
    },
      err => {
        alert(err);
        this.toastr.tryagain();
        this.requesting = false;

      }).catch(reson=>alert(reson));
  }
  onSubmit() {
    if (this.requesting) {
      return false;
    }

    this.requesting = true;
    this.curseEqual.DESC_CRSE_FILE =this.convertToBase64(filePath);
    this.curseEqual.TRANSCRIPT_FILE=this.convertToBase64(imgPath);
    this.addRequest(this.curseEqual);
  }

  getUniv(val: SelectedIndexChangedEventData) {
    const code = this.univsDropDown.getValue(val.newIndex);
    this.curseEqual.PREV_UNIV=code;
  }
  getGrade(val: SelectedIndexChangedEventData,index:number) {
    const code = this.gradesDropDown.getValue(val.newIndex);
    this.reqData.course_list[index].TRNS_GRADE=code;
  }
  getHour(val: SelectedIndexChangedEventData,index:number) {
    const code = this.hoursDropDown.getValue(val.newIndex);
    this.reqData.course_list[index].TRNS_HRS=code;
  }
  getLang(val: SelectedIndexChangedEventData,index:number) {
    const code = this.langsDropDown.getValue(val.newIndex);
    this.reqData.course_list[index].TRNS_LANG=code;
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
