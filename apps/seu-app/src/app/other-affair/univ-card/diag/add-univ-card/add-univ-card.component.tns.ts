import { Component, OnInit } from '@angular/core';
import { universityCard } from '../../../../shared/models/university-card';
import { UvnivCardService } from '../../../services/univ-card.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { RouterExtensions } from 'nativescript-angular/router';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
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
  selector: 'app-add-univ-card',
  templateUrl: './add-univ-card.component.tns.html',
  styleUrls: ['./add-univ-card.component.tns.scss']
})
export class  AddUnivCardComponent implements OnInit {


  card: universityCard;
  reqData;
  msgs;
  times:ValueItem<number>[] = [];
  days:ValueItem<number>[] = [];
  timesDropDown;
  daysDropDown;

  constructor(
    private toastr: AppToasterService, private univCard: UvnivCardService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: 'UG', photo: '', ssn_file: '' };
    this.univCard.getِgetRequests().then(
      res => {
        this.univCard.reqData = (res as any).data;
        this.univCard.msgs = (res as any).messages;
        this.reqData = this.univCard.reqData;
        this.msgs = this.univCard.msgs;
      }
    );

    for (let i = 0; i < this.reqData.times.length; i++) {
        this.times.push(
          {
            value: this.reqData.times[i].id,
            display: this.reqData.times[i].value
          }
        );
      }
      this.timesDropDown = new ValueList(this.times);

      for (let i = 0; i < this.reqData.days.length; i++) {
        this.days.push(
          {
            value: this.reqData.days[i].id,
            display: this.reqData.days[i].value
          }
        );
      }
      this.daysDropDown= new ValueList(this.days);
  }


  requesting = false;
  addRequest(data: any) {
    this.univCard.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.univCard.newreqs = true;
        this.routerExtensions.navigate(['/other/universitycard']);
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
    this.card.ssn_file =this.convertToBase64(filePath);
    this.card.photo =this.convertToBase64(imgPath);
    this.requesting = true;
    this.addRequest(this.card);
  }

  goBack() {
    this.routerExtensions.backToPreviousPage();
}
  call(hr) {
    return Math.floor(Math.random() * 10) + hr;

  }
  get fileName(){
    return filePath != null ? File.fromPath(filePath).name : "Browse";
  }
  get imageName(){
    return imgPath != null ? File.fromPath(imgPath).name : "Browse";
  }
  getTime(val: SelectedIndexChangedEventData) {
    const code = this.timesDropDown.getValue(val.newIndex);
    this.card.time=code;
  }

  getDay(val: SelectedIndexChangedEventData) {
    const code = this.daysDropDown.getValue(val.newIndex);
    this.card.day=code;
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
