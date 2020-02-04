import { Component, OnInit, Inject } from '@angular/core';
import { StudentInfo } from '../../../../shared/models/student-info';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { GraduateProfileService } from '../../../../master-other-requests/services/graduate-profile.service';
import { NgForm } from '@angular/forms';
import { StudentData } from '../../../../shared/models/student-data';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ValueItem, ValueList, SelectedIndexChangedEventData } from 'nativescript-drop-down';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { FilePickerOptions, Mediafilepicker } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { File } from 'tns-core-modules/file-system';
import { RouterExtensions } from 'nativescript-angular/router';

declare const kUTTypePDF;
declare var android: any;
let filePath: string = null;
let imgPath: string = null;
@Component({
  selector: 'app-add-graduate-profile',
  templateUrl: './add-graduate-profile.component.html',
  styleUrls: ['./add-graduate-profile.component.scss']
})
export class AddGraduateProfileComponent implements OnInit {

  reqData;
  msgs;
  stdinfo: StudentData;
  fileType;
  status:ValueItem<number>[] = [];
  job_promo:ValueItem<number>[] = [];
  sectors:ValueItem<number>[] = [];
  locations:ValueItem<number>[] = [];
  statusDropDown;
  job_promosDropDown;
  sectorsDropDown;
  locationsDropDown;

  // isLoading = false;


  constructor(
    private toastr: AppToasterService, private gradService: GraduateProfileService,
    private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.drawerLocation = SideDrawerLocation.Right; 
    this.stdinfo = {
      name_ar: '',
      name_en: '',
      mobile: '',
      email: '',
      job_status: '',
      job_sector: '',
      year_job: '',
      job_com: '',
      job_promo: '',
      job_promo_year: '',
      job_loc: '',
      employer_name: '',
      employer_job_title: '',
      employer_phone: '',
      employer_email: '',
      image: '',
      cv: '',
      STD_RESUME: ''
    };


    // this.isLoading = true;

    this.reqData = this.gradService.reqData;


  }


  addRequest(data: any) {
    this.gradService.AddRequest(data).then(res => {
      this.toastr.push((res as any).messages);
      if (res['status']) {
        this.gradService.newreqs = true;
        this.routerExtensions.navigate(['/other/graduateprofile']);
      }
      for (let i = 0; i < this.reqData.job_status.length; i++) {
        this.status.push(
          {
            value: this.reqData.job_status[i].id,
            display: this.reqData.job_status[i].value
          }
        );
      }
    for (let i = 0; i < this.reqData.job_sector.length; i++) {
        this.sectors.push(
          {
            value: this.reqData.job_sector[i].id,
            display: this.reqData.job_sector[i].value
          }
        );
      }
   
    for (let i = 0; i < this.reqData.job_promo.length; i++) {
        this.job_promo.push(
          {
            value: this.reqData.job_promo[i].id,
            display: this.reqData.job_promo[i].value
          }
        );
      }
    for (let i = 0; i < this.reqData.cities.length; i++) {
        this.locations.push(
          {
            value: this.reqData.cities[i].id,
            display: this.reqData.cities[i].value
          }
        );
      }
      this.statusDropDown = new ValueList(this.status);
      this.job_promosDropDown = new ValueList(this.job_promo);
      this.sectorsDropDown = new ValueList(this.sectors);
      this.locationsDropDown = new ValueList(this.locations);
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  requesting = false;
  onSubmit(form: NgForm) {
    if (this.requesting) {
      return false;
    }
    this.stdinfo.cv=this.convertToBase64(filePath);
    this.stdinfo.image =this.convertToBase64(imgPath);
    this.requesting = true;
    this.addRequest(this.stdinfo);

  }

  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
  }

 getJobPromo(val: SelectedIndexChangedEventData) {
    const code = this.job_promosDropDown.getValue(val.newIndex);
    this.stdinfo.job_promo=code;
  }
  getSector(val: SelectedIndexChangedEventData) {
    const code = this.sectorsDropDown.getValue(val.newIndex);
    this.stdinfo.job_sector=code;
  }
  getStatus(val: SelectedIndexChangedEventData) {
    const code = this.statusDropDown.getValue(val.newIndex);
    this.stdinfo.job_status=code;
  }
  getLocation(val: SelectedIndexChangedEventData) {
    const code = this.locationsDropDown.getValue(val.newIndex);
    this.stdinfo.job_loc=code;
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


}
