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
  selector: 'app-resume',
  styleUrls: ['./resume.component.css'],
  templateUrl: './resume.component.html'
})
export class ResumeComponent{

  id;
  photo = "" ;
  name;
  email;
  phone;
  jobTitle;
  section;
  nationality;

  nameError;
  emailError;
  phoneError;
  jobTitleError;
  sectionError;

  title;
  titles = [];
  item;
  message;

  data;
  countries;
  profile = "notExist";

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
    this.resumeService.getCountries().subscribe(
      (response: any) => {
        if (response) {
          this.countries = response.data;
        }
      },
      error => {}
    );
    this.resumeService.getResumeById(this.id).subscribe(
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
            this.nationality = this.data.NATIONALITY;
            this.titles = this.data.TITLES;
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

    if (valid) {
      let data = {
        id          : this.id,
        photo       : this.photo,
        name        : this.name,
        email       : this.email,
        phone       : this.phone,
        jobTitle    : this.jobTitle,
        section     : this.section,
        nationality : this.nationality,
        titles      : this.titles,
      };
      
      this.resumeService.addResume(data).subscribe(
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