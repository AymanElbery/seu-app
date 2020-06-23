import { Component, OnInit, ViewEncapsulation, OnDestroy, ɵConsole } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { ResumeService } from '../../services/resume.service';

import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
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
  displayEmail;
  phone;
  // address;
  jobTitle;
  faculty;
  office;
  section;
  // work;
  nationality;

  nameError;
  emailError;
  phoneError;
  // addressError;
  jobTitleError;
  sectionError;
  facultyError;
  officeError;
  // workError;

  title;
  titles = [];
  item;
  message;

  data;
  countries;
  profile = "notExist";

  agree = false;
  pidm;
  sectionEdit = true;
  facultyEdit = true;
  loading = false;
  imagePath;
  

  facs = [];
  deps = [];

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
    this.loading = true;
    this.id = this.userService.userData.id;
    this.pidm = this.userService.userData.PIDM;

    this.getFaculty();
    this.getFaculties();
    this.getDepartment();
    
    this.resumeService.getStuffByID(this.id).subscribe(
      (response: any) => {
        if (response) {
          this.name = response.data.EMP_NAME;
          this.email = response.data.WORK_EMAIL;
          this.displayEmail = btoa(this.email);
          this.jobTitle = response.data.CARRER_DESC;
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

  getFaculty(){
    this.resumeService.getFac(this.pidm).subscribe(
      (response: any) => {
        if (response) {
          if (response.data == null) {
            this.facultyEdit = true;
          } else {
            this.facultyEdit = false;
            let facCode = response.data.DEP_CODE;
            this.resumeService.getFacStr(facCode).subscribe(
              (response: any) => {
                if (response) {
                  this.faculty = response.data.COLL_TITLE_AR;
                }
              },
              error => {}
            );
          }
        }
      },
      error => {}
    );
  }

  getFaculties(){
    this.resumeService.getFacs().subscribe(
      (response: any) => {
        if (response) {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].COLL_PK !== "PY") {
              this.facs.push(response.data[i]);
            }
          }
        }
      },
      error => {}
    );
  }

  changeFac(){
    this.resumeService.getDepsOnFac(this.faculty).subscribe(
      (response: any) => {
        if (response) {
          this.deps = response.data;
        }
      },
      error => {}
    );
  }

  getDepartment(){
    this.resumeService.getDept(this.pidm).subscribe(
      (response: any) => {
        if (response) {
          if (response.data == null) {
            this.sectionEdit = true;
          } else {
            this.sectionEdit = false;
            let depCode = response.data.DEP_CODE;
            this.resumeService.getDeptStr(depCode).subscribe(
              (response: any) => {
                if (response) {
                  this.section = response.data.DEPT_DESC_AR;
                }
              },
              error => {}
            );
          }
        }
      },
      error => {}
    );
  }

  agreeCond(event: any){
    this.agree = (event == "A") ? true : false;
  }

  getResumeByEmail(email){
    this.resumeService.getResumeByEmail(email, "ar").subscribe(
      (response: any) => {
        if (response) {
          this.loading = false;
          if (response.status) {
            this.data = response.data;
            this.photo = this.data.PHOTO_PATH;
            this.name = this.data.NAME;
            this.email = this.data.EMAIL;
            this.phone = this.data.PHONE;
            // this.address = this.data.ADDRESS;
            this.jobTitle = this.data.JOB_TITLE;
            this.section = this.data.SECTION;
            this.faculty = this.data.FACULTY;
            this.changeFac();
            this.office = this.data.OFFICE;
            // this.work = this.data.WORK;
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
    this.imagePath = this.photo;
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
  // hideAddressMessages(){
  //   this.addressError = null;
  // }
  hideJobTitleMessages(){
    this.jobTitleError = null;
  }
  hideSectionMessages(){
    this.sectionError = null;
  }
  hideFacultyMessages(){
    this.facultyError = null;
  }
  hideOfficeMessages(){
    this.officeError = null;
  }
  // hideWorkMessages(){
  //   this.workError = null;
  // }

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

    // if (this.address == "" || this.address == null) {
    //   this.addressError = "هذا الحقل مطلوب";
    //   valid = false;
    // }
    
    if (this.jobTitle == "" || this.jobTitle == null) {
      this.jobTitleError = "هذا الحقل مطلوب";
      valid = false;
    }
    
    if (this.section == "" || this.section == null) {
      this.sectionError = "هذا الحقل مطلوب";
      valid = false;
    }
    if (this.faculty == "" || this.faculty == null) {
      this.facultyError = "هذا الحقل مطلوب";
      valid = false;
    }
    if (this.office == "" || this.office == null) {
      this.officeError = "هذا الحقل مطلوب";
      valid = false;
    }

    // if (this.work == "" || this.work == null) {
    //   this.workError = "هذا الحقل مطلوب";
    //   valid = false;
    // }
    
    if (valid) {
      let data = {
        id          : this.id,
        photo       : this.photo,
        name        : this.name,
        email       : this.email,
        phone       : this.phone,
        // address     : this.address,
        jobTitle    : this.jobTitle,
        section     : this.section,
        faculty     : this.faculty,
        office      : this.office,
        // work        : this.work,
        nationality : this.nationality,
        titles      : this.titles,
      };
      
      this.resumeService.addResume(data, "ar").subscribe(
        (response: any) => {
          if (response) {
            this.toastr.push([{
              'type' : 'success',
              'body' : 'تم تحديث السيرة الذاتية الخاصة بكم ، يمكنك الإطلاع عليها من خلال الدخول إلى البوابة'
            }]);
            this.router.navigate(['/resume/ar']);
            //window.location.reload();
          }
        },
        error => {}
      ); 
    }
  }

  
}