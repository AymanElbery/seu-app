import { Component, OnInit } from '@angular/core';
import { StudentInfoService } from '../services/student-info.service';
import { StudentInformation } from 'src/app/shared/models/student-information';
import { StudentInformationData } from '../../shared/models/student-information-data';
import { AppToasterService } from '../../shared/services/app-toaster';
import { FilePickerOptions, Mediafilepicker } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from 'tns-core-modules/file-system';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';

declare const kUTTypePDF;
declare var android: any;
let filePath: string = null;
let imgPath: string = null;

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.tns.html',
  styleUrls: ['./student-info.component.tns.scss']
})
export class StudentInfoComponent implements OnInit {

  reqData;
  msgs=[];
  cvDownload: string;
  photoDownload: string;
  studentInfo: StudentInformation;
  stdData: StudentInformationData
  isLoading = false;
  fileType;
  status:ValueItem<number>[] = [];
  terms:ValueItem<number>[] = [];
  sectors:ValueItem<number>[] = [];
  period:ValueItem<number>[] = [];
  locations:ValueItem<number>[] = [];
  statusDropDown;
  termsDropDown;
  sectorsDropDown;
  periodsDropDown;
  locationsDropDown;

  constructor(private academicService: StudentInfoService, private toastr: AppToasterService) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.studentInfo =
    {

      NAME_AR: '',
      NAME_EN: '',
      GRADUATION_TERM: '',
      EMAIL: '',
      PHONE: '',
      JOB_STATUS: '',
      JOB_LOCATION: '',
      JOB_TITLE: '',
      JOB_TILE2: '',
      EMAIL2: '',
      PHONE2: '',
      JOB_NAME: '',
      JOB_TYPE: '',
      JOB_TIME: '',
      JOB_YEAR: '',
      WORK_CITY: '',
      PHOTO: '',
      CV: ''
    }

    this.stdData =
    {

      name_ar: '',
      name_en: '',
      graduation_term: '',
      email: '',
      phone: '',
      job_status: '',
      job_location: '',
      job_title: '',
      job_title2: '',
      email2: '',
      phone2: '',
      job_name: '',
      job_type: '',
      job_time: '',
      job_year: '',
      work_city: '',
      photo: '',
      cv: ''
    }
 
    //this.getData();

    
    for (let i = 0; i < this.reqData.job_status.length; i++) {
        this.status.push(
          {
            value: this.reqData.job_status[i].id,
            display: this.reqData.job_status[i].value
          }
        );
      }
    for (let i = 0; i < this.reqData.job_type.length; i++) {
        this.terms.push(
          {
            value: this.reqData.job_type[i].id,
            display: this.reqData.job_type[i].value
          }
        );
      }
    for (let i = 0; i < this.reqData.job_time.length; i++) {
        this.period.push(
          {
            value: this.reqData.job_time[i].id,
            display: this.reqData.job_time[i].value
          }
        );
      }
    for (let i = 0; i < this.reqData.terms.length; i++) {
        this.terms.push(
          {
            value: this.reqData.terms[i].id,
            display: this.reqData.terms[i].value
          }
        );
      }
    for (let i = 0; i < this.reqData.cities.length; i++) {
        this.terms.push(
          {
            value: this.reqData.cities[i].id,
            display: this.reqData.cities[i].value
          }
        );
      }
      this.statusDropDown = new ValueList(this.status);
      this.termsDropDown = new ValueList(this.terms);
      this.periodsDropDown = new ValueList(this.period);
      this.sectorsDropDown = new ValueList(this.sectors);
      this.locationsDropDown = new ValueList(this.locations);
  }
  getData() {
    this.isLoading = true;
    this.academicService.getِRequests().then(
      res => {
        this.reqData = (res as any).data;
        this.msgs = (res as any).messages;
        this.studentInfo = this.reqData.user;
        this.stdData.name_ar = this.studentInfo.NAME_AR;
        this.stdData.name_en = this.studentInfo.NAME_EN;
        this.stdData.graduation_term = this.studentInfo.GRADUATION_TERM;
        this.stdData.email = this.studentInfo.EMAIL;
        this.stdData.phone = this.studentInfo.PHONE;
        this.stdData.job_status = this.studentInfo.JOB_STATUS;
        this.stdData.job_location = this.studentInfo.JOB_LOCATION;
        this.stdData.job_title = this.studentInfo.JOB_TITLE;
        this.stdData.job_title2 = this.studentInfo.JOB_TILE2;
        this.stdData.email2 = this.studentInfo.EMAIL2;
        this.stdData.phone2 = this.studentInfo.PHONE2;
        this.stdData.job_name = this.studentInfo.JOB_NAME;
        this.stdData.job_type = this.studentInfo.JOB_TYPE;
        this.stdData.job_time = this.studentInfo.JOB_TIME;
        this.stdData.job_year = this.studentInfo.JOB_YEAR;
        this.stdData.work_city = this.studentInfo.WORK_CITY;
        this.isLoading = false;
      }
    );
    this.cvDownload = this.academicService.DownloadCv();
    this.photoDownload = this.academicService.DownloadPhoto();
  }
  addRequest(data) {
    this.academicService.AddRequest(data).then(res => {
      this.academicService.msgs = (res as any).messages;
      this.msgs = this.academicService.msgs;
      this.toastr.push(this.msgs);
      if (res['status']) {
        this.getData();
      }

    });
  }
  requesting = false;
  onSubmit() {
    if (this.requesting) {
      return false;
    }
    this.stdData.cv =this.convertToBase64(filePath);
    this.stdData.photo =this.convertToBase64(imgPath);
    this.addRequest(this.stdData);
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
      base64String= android.util.Base64.encodeToString(data, android.util.Base64.NO_WRAP);

    }
    return base64String;
  }
  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

  getPeriod(val: SelectedIndexChangedEventData) {
    const code = this.periodsDropDown.getValue(val.newIndex);
    this.stdData.job_time=code;
  }
getTerm(val: SelectedIndexChangedEventData) {
    const code = this.termsDropDown.getValue(val.newIndex);
    this.stdData.graduation_term=code;
  }
  getSector(val: SelectedIndexChangedEventData) {
    const code = this.sectorsDropDown.getValue(val.newIndex);
    this.stdData.job_type=code;
  }
  getStatus(val: SelectedIndexChangedEventData) {
    const code = this.statusDropDown.getValue(val.newIndex);
    this.stdData.job_status=code;
  }
  getLocation(val: SelectedIndexChangedEventData) {
    const code = this.locationsDropDown.getValue(val.newIndex);
    this.stdData.work_city=code;
  }

}
