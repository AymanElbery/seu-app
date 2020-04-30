import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { ResumeService } from '../../services/resume.service';

import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from "@angular/material/core";

export class Title{
  text: any;
  items: [];
}

export class Item{
  text: any;
}


@Component({
  selector: 'app-resume-en',
  styleUrls: ['./resume-en.component.css'],
  templateUrl: './resume-en.component.html'
})
export class ResumeEnComponent{

  id;
  photo = "" ;
  name;
  email;
  phone;
  jobTitle;
  section;
  work;
  nationality;

  nameError;
  emailError;
  phoneError;
  jobTitleError;
  sectionError;
  workError;

  title;
  titles = [];
  item;
  message;

  data;
  countries;
  profile = "notExist";

  agree = false;

  constructor(
    public userService: UserService, 
    private resumeService: ResumeService, 
    private http: HttpClient, 
    private reqservice: HttpRequestService, 
    private router: Router, 
    private route: ActivatedRoute,
    private toastr: AppToasterService,
    public translate: TranslateService
  ) {
    this.id = this.userService.userData.id;
    this.resumeService.getStuffByID(this.id).subscribe(
      (response: any) => {
        if (response) {
          this.email = response.data.WORK_EMAIL;
          this.name = response.data.EMP_NAME_E;
          this.getResumeByEmail(this.email);
        }
      },
      error => {}
    );
    
    this.resumeService.getCountries().subscribe(
      (response: any) => {
        if (response) {
          this.countries = response.data;
        }
      },
      error => {}
    );
  }

  agreeCond(event: any){
    this.agree = (event == "A") ? true : false;
  }

  getResumeByEmail(email){
    this.resumeService.getResumeByEmail(email, "en").subscribe(
      (response: any) => {
        if (response) {
          if (response.status) {
            this.data = response.data;
            this.photo = this.data.PHOTO_PATH;
            this.name = this.data.NAME;
            this.email = this.data.EMAIL;
            this.phone = this.data.PHONE;
            this.jobTitle = this.data.JOB_TITLE;
            this.section = this.data.SECTION;
            this.work = this.data.WORK;
            this.nationality = this.data.NATIONALITY;
            this.titles = this.data.TITLES;
            if (this.titles) {
              this.titles = this.data.TITLES;
            } else {
              this.titles = [];
            }
            if (this.photo != null) {
              this.profile = this.photo;
            }else{
              this.photo = "none";
            }
          } else {
            this.photo = "none";
          }
          
        }
      },
      error => {}
    );
  }

  addTitle() {
    this.title = new Title();
    this.title.text = "";
    this.title.items = [];
    this.titles.push(this.title);
  }
  removeTitle(i){
    this.titles.splice(i, 1);
  }



  addItem(title) {
    this.item = new Item();
    this.item.text = "";
    title.items.push(this.item); 
  }

  removeItem(title, j){
    title.items.splice(j, 1);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.photo = reader.result;
  }
  
  hideNameMessages(){
    this.nameError = null;
  }
  hideEmailMessages(){
    this.emailError = null;
  }
  hidePhoneMessages(){
    this.phoneError = null;
  }
  hideJobTitleMessages(){
    this.jobTitleError = null;
  }
  hideSectionMessages(){
    this.sectionError = null;
  }
  hideWorkMessages(){
    this.workError = null;
  }

  onSubmit(){

    let valid = true;
    if (this.photo != "none") {
      if (this.photo.split(".")[1] == "pdf") {
        this.photo = "none";
      }
    }

    if (this.name == "" || this.name == null) {
      this.nameError = "هذا الحقل مطلوب";
      valid = false;
    }
    if (this.email == "" || this.email == null) {
      this.emailError = "هذا الحقل مطلوب";
      valid = false;
    }
    if (this.phone == "" || this.phone == null) {
      this.phoneError = "هذا الحقل مطلوب";
      valid = false;
    }
    if (this.jobTitle == "" || this.jobTitle == null) {
      this.jobTitleError = "هذا الحقل مطلوب";
      valid = false;
    }
    if (this.section == "" || this.section == null) {
      this.sectionError = "هذا الحقل مطلوب";
      valid = false;
    }
    if (this.work == "" || this.work == null) {
      this.workError = "هذا الحقل مطلوب";
      valid = false;
    }

    if (valid) {
      let data = {
        id          : this.id,
        photo       : this.photo,
        name        : this.name,
        email       : this.email,
        phone       : this.phone,
        jobTitle    : this.jobTitle,
        section     : this.section,
        work     : this.work,
        nationality : this.nationality,
        titles      : this.titles,
      };
      
      this.resumeService.addResume(data, "en").subscribe(
        (response: any) => {
          if (response) {
            window.location.reload();
          }
        },
        error => {}
      ); 
    }
  }

  
}