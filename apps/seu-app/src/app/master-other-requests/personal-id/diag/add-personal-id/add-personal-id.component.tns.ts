import { Component, OnInit, Inject } from '@angular/core';
import { universityCard } from '../../../../shared/models/university-card';
import { PersonalIDService } from '../../../../master-other-requests/services/personal-id.service';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { RouterExtensions } from 'nativescript-angular/router';
import { FilePickerOptions, Mediafilepicker, ImagePickerOptions } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from 'tns-core-modules/file-system';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';

declare const kUTTypePDF;
declare var java: any;
declare var android: any;
let filePath: string = null;
let imgPath: string = null;

@Component({
  selector: 'app-add-personal-id',
  templateUrl: './add-personal-id.component.tns.html',
  styleUrls: ['./add-personal-id.component.tns.scss']
})
export class AddPersonalIdComponent implements OnInit {
  constructor(
    private toastr: AppToasterService, 
    private univCard: PersonalIDService,
    private routerExtensions: RouterExtensions) { }

  card: universityCard;
  reqData:{"times":[any],"days":[any]};
  msgs;
  times:ValueItem<number>[] = [];
  days:ValueItem<number>[] = [];
  timesDropDown;
  daysDropDown;


  requesting = false;

  ngOnInit() {
    this.card = { name: '', phone: '', ssn: '', day: '', time: '', level: 'GR', photo: '', ssn_file: '' };
    this.univCard.getِgetRequests().then(
      res => {
        this.univCard.reqData = (res as any).data;
        this.univCard.msgs = (res as any).messages;
        this.reqData = this.univCard.reqData;
        this.msgs = this.univCard.msgs;
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
    );
  }
  addRequest(data: any) {
    this.univCard.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
  /* comppented error found not status
      if (res.status) {
        this.univCard.newreqs = true;
        this.dialogRef.close();
      } */
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
      let text = new java.lang.String(file.readSync());
      base64String= android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);

    }
    return base64String;
  }

  getTime(val: SelectedIndexChangedEventData) {
    const code = this.timesDropDown.getValue(val.newIndex);
    this.card.time=code;
  }

  getDay(val: SelectedIndexChangedEventData) {
    const code = this.daysDropDown.getValue(val.newIndex);
    this.card.day=code;
  }
}
