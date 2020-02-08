import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { examExcuse } from '../../../../shared/models/exam_excuse';
import { ExamsExecusesService } from '../../../services/exams-execuses.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { RouterExtensions } from 'nativescript-angular/router';
import { FilePickerOptions, Mediafilepicker, ImagePickerOptions } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from 'tns-core-modules/file-system'
declare const kUTTypePDF;
declare var NSString: any;
declare var NSUTF8StringEncoding: any;
declare var java: any;
declare var android: any;
let filePath: string = null;
let imgPath: string = null;

@Component({
  selector: 'app-add-exam-execuse',
  templateUrl: './add-exam-execuse.component.tns.html',
  styleUrls: ['./add-exam-execuse.component.tns.scss']
})
export class AddExamExecuseComponent implements OnInit {

  examExcuse: examExcuse;
  reqData;
  msgs: any;
  cets:ValueItem<number>[]=[];
  cetsDropDown;

  constructor(
    private toastr: AppToasterService, private acadmicProc: ExamsExecusesService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.examExcuse = { courses: [], reason: '', type: '', attachment: '' };
    this.reqData = this.acadmicProc.reqData;
    for (let i = 0; i < this.reqData.exams_type.length; i++) {
      this.cets.push(
        {
          value: this.reqData.exams_type[i].id,
          display: this.reqData.exams_type[i].value
        }
      );
    }
    this.cetsDropDown = new ValueList(this.cets);

  }
  changeStatus(it, e) {
    if (e.value) {

      this.examExcuse.courses.push({ CRSE: it.CRN });

    }


  }


  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {
      console.log('ressssssssssssssssssssss',res)
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/academicrequests/examsexecuses']);
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
    this.examExcuse.attachment ="data:text/html;base64,"+this.convertToBase64(filePath);
    
    this.requesting = true;
    this.addRequest(this.examExcuse);
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

  goBack() {
    this.routerExtensions.backToPreviousPage();
}

getCet(val: SelectedIndexChangedEventData) {
  const code = this.cetsDropDown.getValue(val.newIndex);
  this.examExcuse.type=code;
}
}

