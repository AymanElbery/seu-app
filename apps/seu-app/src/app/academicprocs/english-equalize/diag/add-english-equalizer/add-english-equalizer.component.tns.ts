import { Component, OnInit } from '@angular/core';
import { EnglishEqualizerService } from '../../../services/english-equalizer.service';
import { EnglishEqual } from '../../../../shared/models/english-equal';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import * as app from 'tns-core-modules/application';
import { File } from "tns-core-modules/file-system";
import { Mediafilepicker, FilePickerOptions } from 'nativescript-mediafilepicker';
import { RouterExtensions } from 'nativescript-angular/router';

declare const kUTTypePDF;
declare var android: any;
var filePath:string=null;
var imgPath:string=null;

@Component({
  selector: 'app-add-english-equalizer',
  templateUrl: './add-english-equalizer.component.tns.html',
  styleUrls: ['./add-english-equalizer.component.tns.scss']
})
export class AddEnglishEqualizerComponent implements OnInit {

  englishEqual: EnglishEqual;
  reqData: EnglishEqual={ tests: [], attachment: '', ENG_TESTS: [], notes: {}, crse_transfer_grades: [] };
  msgs: any;
  private imageSrc = '';

  constructor(
    private toastr: AppToasterService, 
    private acadmicProc: EnglishEqualizerService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.englishEqual = { tests: [], attachment: '', ENG_TESTS: [], notes: {}, crse_transfer_grades: [] };

    this.reqData = this.acadmicProc.reqData;
  }
  changeStatus(it, e) {
    if (e.value) {
      it.test = it.TEST_PK;
      this.englishEqual.tests.push(it);
      ////console.log(this.englishEqual.tests);
    } else {
      for (let i = 0; i < this.englishEqual.tests.length; i++) {
        if (this.englishEqual.tests[i].test == it.test)
          this.englishEqual.tests.splice(i, 1);
      }
    }
    console.log(this.englishEqual.tests);

  }

  requesting = false;
  addRequest(data: any) {
    this.acadmicProc.AddRequest(data).then(res => {

      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.acadmicProc.newreqs = true;
        this.routerExtensions.navigate(['/procedures/eequalize']);
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
    this.englishEqual.attachment=this.convertToBase64(imgPath);
    this.addRequest(this.englishEqual);
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
    let data = file.readSync();
    if (app.ios) {
      base64String= data.base64EncodedStringWithOptions(0);
    } else {
      base64String= android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);

    }
    return base64String;
  }
  get imageName(){
    return imgPath != null ? File.fromPath(imgPath).name : "Browse";
  }
  goBack() {
    this.routerExtensions.backToPreviousPage();
}
}
