import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../account/services/user.service';

import { HttpRequestService } from '../shared/services/http-request.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-docs-confirm-home',
  styleUrls: ['./docs-confirm.component.scss'],
  templateUrl: './docs-confirm.component.html'
})
export class DocsConfirmComponent implements OnInit, OnDestroy {
  datePickerConfig: Partial<BsDatepickerConfig>;
  selection;
  submitted_data = {};
  requesting = false;
  showNameFields = false;
  showSsnFields = false;
  showWorkFields = false;
  idFile = false;
  idFileName;
  idFileSsn = false;
  idFileNameSsn;
  idFileWork = false;
  idFileQualify = false;
  idFileNameWork;
  idFileNameQualify;
  valid = true;
  email_seu_error = false;

  first_name;
  father_name;
  mid_name;
  last_name;

  first_name_s;
  father_name_s;
  mid_name_s;
  last_name_s;

  first_name_ar_error;
  father_name_ar_error;
  mid_name_ar_error;
  last_name_ar_error;

  first_name_en_error;
  father_name_en_error;
  mid_name_en_error;
  last_name_en_error;

  national_id_error;
  actWork_error;
  qualify_error;
  birth_city_error;
  rel_error;
  social_status_error;
  idDocWorkError;
  qualifyDocError;
  qualifyDoc;

  ssn;
  mobile;
  mobile_error;
  mobile_max_error;
  mobile_number_error;
  mobile2_number_error;
  mobile2;
  mobile2_error;
  mobile2_max_error;
  workEmail;
  birth_city;
  rel;
  workEmail_error;
  work;
  email;
  email_error;
  twitterId;
  twitterId_error;
  districts;
  cities;
  socialStatuses = [
    {
      name: "متزوج",
      value: "m",
    },
    {
      name: "أعزب",
      value: "s",
    },
    {
      name: "مطلق",
      value: "a",
    },
    {
      name: "أرمل",
      value: "w",
    },
  ];
  rels = [
    {
      NAME: "مسلم",
      CODE: "MUSLIM",
    },
    {
      NAME: "غير ذلك",
      CODE: "OTHER",
    }
  ];
  qualifies = [
    {
      name: "دكتوراه",
      value: "PHD",
    },
    {
      name: "ماجيستير",
      value: "MA",
    },
    {
      name: "بكالوريوس",
      value: "BA",
    },
    {
      name: "دبلوم",
      value: "diploma",
    },
    {
      name: "ثانوي",
      value: "secondary",
    },
    {
      name: "كفاءة",
      value: "efficiency",
    },
  ];
  streetName;
  streetName_error;
  streetNameEn;
  streetNameEn_error;
  buildingNo;
  buildingNo_error;
  city;
  city_error;
  district;
  district_error;
  postalCode;
  postalCode_error;
  additionalNumber;
  additionalNumber_error;

  firstNameAr;
  fatherNameAr;
  midNameAr;
  lastNameAr;
  firstNameEn;
  fatherNameEn;
  midNameEn;
  lastNameEn;

  nationalId;
  idDocError;
  idDoc;
  idPhoto;
  workPhoto;
  actWork;
  qualify;
  social_status;
  buildingNo_max_error;
  postalCode_max_error;
  additionalNumber_max_error;
  showWorkEmailFields = false;
  selectedCityId;
  highQualify = false;

  FULLNameAr = '';
  FULLNameEn = '';
  univsArOther = false;
  univsEnOther = false;
  majorOther = false;
  cityOther = false;

  univ_ar;
  univ_en;
  majorInput;
  birthCityInput;
  agree = false;
  confirmEmail = false;

  displayData = false;

  constructor(public userService: UserService, private http: HttpClient, private reqservice: HttpRequestService, private router: Router, private toastr: AppToasterService, public translate: TranslateService,
    public dialogRef: MatDialogRef<DocsConfirmComponent>, @Inject(MAT_DIALOG_DATA) public confirmdata
  ) {
    this.datePickerConfig = { dateInputFormat: 'DD-MM-YYYY', showWeekNumbers: false };
    this.userService.getCities().subscribe(
      (response: any) => {
        if (response) {
          this.cities = response.data;

          this.userService.getEmpData(this.userService.userData.id).subscribe(
            (response: any) => {
              if (response) {
                this.firstNameAr = response.data[0].FIRST_NAME;
                this.fatherNameAr = response.data[0].FATHER_NAME;
                this.midNameAr = response.data[0].MID_NAME;
                this.lastNameAr = response.data[0].LAST_NAME;

                this.firstNameEn = response.data[0].FIRST_NAME_S;
                this.fatherNameEn = response.data[0].FATHER_NAME_S;
                this.midNameEn = response.data[0].MID_NAME_S;
                this.lastNameEn = response.data[0].LAST_NAME_S;

                this.FULLNameAr = this.firstNameAr + ' ' + this.fatherNameAr + ' ' + this.midNameAr + ' ' + this.lastNameAr;
                this.FULLNameEn = this.firstNameEn + ' ' + this.fatherNameEn + ' ' + this.midNameEn + ' ' + this.lastNameEn;


                this.ssn = response.data[0].NATIONAL_ID;
                this.nationalId = response.data[0].NATIONAL_ID;
                this.mobile = response.data[0].MOBILE_NO;
                this.mobile2 = response.data[0].MOBILE2_NO;
                this.workEmail = response.data[0].WORK_EMAIL;
                this.work = response.data[0].ACTUAL_DEPT_DESC;
                this.email = response.data[0].EMAIL;
                this.twitterId = response.data[0].TWITTER_ID;

                this.district = response.data[0].DISTRICT;
                //this.city = response.data[0].CITY;
                // this.qualify = response.data[0].QUALIFY;
                // if(this.qualify == 'PHD' || this.qualify == 'MA' || this.qualify == 'BA'){
                //   this.highQualify = true;
                //   this.userService.getUniversities().subscribe(
                //     (resp: any) => {
                //       if (resp) {
                //         this.univsAr    = resp.data.AR;
                //         this.univsEn    = resp.data.EN;
                //         this.majors     = resp.data.MAJORS;
                //         this.gpas        = resp.data.GPA;
                //         this.study_types = resp.data.STUDY_TYPE;

                //         this.gpa = response.GPA;
                //         this.uni_en = response.UNI_EN;
                //       }
                //     },
                //     error => { }
                //   );
                // }
                if (this.city) {
                  for (let i = 0; i < this.cities.length; i++) {
                    if (this.cities[i].NAME_AR == this.city) {
                      this.selectedCityId = this.cities[i].ID;
                    }
                  }
                  this.userService.getDistrictsByCityId(this.selectedCityId).subscribe(
                    (response: any) => {
                      if (response) {
                        this.districts = response.data;
                      }
                    },
                    error => { }
                  );
                }
                this.buildingNo = response.data[0].BUILDING_NO;
                this.additionalNumber = response.data[0].ADDITIONAL_NUMBER;
                this.postalCode = response.data[0].POSTAL_CODE;
                this.streetName = response.data[0].STREET_NAME;
                this.streetNameEn = response.data[0].STREET_NAME_EN;
              }
            },
            error => { }
          );


        }
      },
      error => { }
    );
  }
  ngOnInit() {
    document.getElementById("side-menu").style.display = "none";
  }
  ngOnDestroy() {
    document.getElementById("side-menu").style.display = "block";

  }

  back(){
    this.displayData = false;
    this.agree = false;
  }

  changeUnivAr(e){
    if(e.CODE == '9999'){
      this.univsArOther = true;
    }else{
      this.univsArOther = false;
    }
  }
  changeUnivEn(e){
    if(e.CODE == '2222'){
      this.univsEnOther = true;
    }else{
      this.univsEnOther = false;
    }
  }
  changeMajor(e){
    if(e.CODE == '9999'){
      this.majorOther = true;
    }else{
      this.majorOther = false;
    }
  }
  removeBirthCityError(e){
    this.birth_city_error = false;
    if(e.ID == '9999'){
      this.cityOther = true;
    }else{
      this.cityOther = false;
    }
  }

  keyPressArabic(e){
    if (e.key.match(/^[\u0621-\u064A]+$/) || e.key == "Backspace") {
      return true;
    }else{
      e.preventDefault();
      return false;
    }
  }

  keyPressEnglish(e){
    if (e.key.match(/^[a-zA-Z]+$/) || e.key == "Backspace") {
      return true;
    }else{
      e.preventDefault();
      return false;
    }
  }

  keyPressNumber(e){
    if ((e.key.match(/^[0-9]+$/) || e.key == "Backspace")) {
      return true;
    }else{
      e.preventDefault();
      return false;
    }
  }

  showNameEdit() {
    this.showNameFields = this.showNameFields ? false : true;
    if (this.showNameFields == false) {
      this.first_name_ar_error = false;
      this.father_name_ar_error = false;
      this.mid_name_ar_error = false;
      this.last_name_ar_error = false;
      this.first_name_en_error = false;
      this.father_name_en_error = false;
      this.mid_name_en_error = false;
      this.last_name_en_error = false;

      this.idDocError = false;
    }
  }

  showSsnEdit() {
    this.showSsnFields = this.showSsnFields ? false : true;
    if (this.showSsnFields == false) {
      this.national_id_error = false;

      this.idDocError = false;
    }
  }

  showWorkEdit() {
    this.showWorkFields = this.showWorkFields ? false : true;
  }

  showWorkEmailEdit() {
    this.showWorkEmailFields = this.showWorkEmailFields ? false : true;
  }

  idFileChange(e) {
    this.idFile = true;
    this.idFileName = e.target.files[0].name;
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

    this.idDocError = false;
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    this.idPhoto = reader.result;
  }

  idFileSsnChange(fileInput: any) {
    this.idFileSsn = true;
    this.idFileNameSsn = fileInput.target.files[0].name;
  }

  idFileWorkChange(e) {
    this.idFileWork = true;
    this.idFileNameWork = e.target.files[0].name;

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoadedWork.bind(this);
    reader.readAsDataURL(file);

    this.idDocWorkError = false;
  }

  idFileQualifyChange(e) {
    this.idFileQualify = true;
    this.idFileNameQualify = e.target.files[0].name;
    this.qualify_file_error = false;

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoadedQualify.bind(this);
    reader.readAsDataURL(file);

    this.qualifyDocError = false;
  }

  _handleReaderLoadedWork(e) {
    const reader = e.target;
    this.workPhoto = reader.result;
  }

  qualifyFile;
  _handleReaderLoadedQualify(e) {
    const reader = e.target;
    this.qualifyFile = reader.result;
  }

  scrollToTob() {
    document.getElementById("exampleModalLabel").scrollIntoView();
  }

  removeFirstNameArError() { this.first_name_ar_error = false; }
  removeFatherNameArError() { this.father_name_ar_error = false; }
  removeMidNameArError() { this.mid_name_ar_error = false; }
  removeLastNameArError() { this.last_name_ar_error = false; }
  removeFirstNameEnError() { this.first_name_en_error = false; }
  removeFatherNameEnError() { this.father_name_en_error = false; }
  removeMidNameEnError() { this.mid_name_en_error = false; }
  removeLastNameEnError() { this.last_name_en_error = false; }

  removeNationalIdError() { this.national_id_error = false; }
  removeActWorkError() { this.actWork_error = false; }
  removeRelError() { this.rel_error = false; }
  removeSocialStatusError() { this.social_status_error = false; }

  removeMobileError() { this.mobile_error = false; this.mobile_max_error = false; this.mobile_number_error = false;}
  removeMobile2Error() { this.mobile2_error = false; this.mobile2_max_error = false; this.mobile2_number_error = false;}
  removeWorkEmailError() { this.workEmail_error = false; }
  removeEmailError() { this.email_error = false;  this.email_seu_error = false;}
  removeTwitterIdError() { this.twitterId_error = false; }
  removeBuildingNoError() { this.buildingNo_error = false; this.buildingNo_max_error = false; }
  removeStreetNameError() { this.streetName_error = false; }
  removeStreetNameEnError() { this.streetNameEn_error = false; }
  removeDistrictError() { this.district_error = false; }
  removeCityError() {
    this.city_error = false;
    this.district = '';
    this.districts = [];
    this.userService.getDistrictsByCityId(this.city).subscribe(
      (response: any) => {
        if (response) {
          this.districts = response.data;
        }
      },
      error => { }
    );
  }
  univsAr;
  univsEn;
  uni_ar;
  uni_en;
  majors;
  major;
  gpas;
  gpa;
  study_types;
  study_type;
  qualify_date;
  removeQualifyError(e) {
    this.qualify_error = false;
    if(e.value == 'MA' || e.value == 'PHD' || e.value == 'BA'){
      this.highQualify = true;
      this.userService.getUniversities().subscribe(
        (response: any) => {
          if (response) {
            this.univsAr    = response.data.AR;
            this.univsEn    = response.data.EN;
            this.majors     = response.data.MAJORS;
            this.gpas        = response.data.GPA;
            this.study_types = response.data.STUDY_TYPE;
          }
        },
        error => { }
      );
    }else{
      this.highQualify = false;
    }
  }
  removePostalCodeError() { this.postalCode_error = false; this.postalCode_max_error = false; }
  removeAdditionalNumberError() { this.additionalNumber_error = false; this.additionalNumber_max_error = false; }

  qualify_file_error;
  uni_ar_error;
  uni_en_error;
  major_error;
  gpa_error;
  study_type_error;
  qualify_date_error;
  submit() {
    let valid = true;
    if (!this.email) {
      this.email_error = true;
      valid = false;
    }
    
    if (this.email && this.email.split("@")[1] == "seu.edu.sa") {
      this.email_seu_error = true;
      valid = false;
    }

    if (this.showNameFields) {
      if (!this.firstNameAr) { this.first_name_ar_error = true; this.scrollToTob(); valid = false; }
      if (!this.fatherNameAr) { this.father_name_ar_error = true; this.scrollToTob(); valid = false; }
      if (!this.midNameAr) { this.mid_name_ar_error = true; this.scrollToTob(); valid = false; }
      if (!this.lastNameAr) { this.last_name_ar_error = true; this.scrollToTob(); valid = false; }
      if (!this.firstNameEn) { this.first_name_en_error = true; this.scrollToTob(); valid = false; }
      if (!this.fatherNameEn) { this.father_name_en_error = true; this.scrollToTob(); valid = false; }
      if (!this.midNameEn) { this.mid_name_en_error = true; this.scrollToTob(); valid = false; }
      if (!this.lastNameEn) { this.last_name_en_error = true; this.scrollToTob(); valid = false; }
    }

    if (this.showSsnFields) {
      if (!this.nationalId) { this.national_id_error = true; this.scrollToTob(); valid = false; }
    }

    if (this.showNameFields || this.showSsnFields) {
      if (!this.idDoc) {
        this.idDocError = true;
        this.scrollToTob();
        valid = false;
      }
    }

    if (this.showWorkFields) {
      if (!this.actWork) { this.actWork_error = true; this.scrollToTob(); }
      if (!this.idFileWork) {
        this.idDocWorkError = true;
        this.scrollToTob();
        valid = false;
      }
    }

    if (this.qualify == 'MA' || this.qualify == 'PHD' || this.qualify == 'BA') {
      if (!this.uni_ar) { this.uni_ar_error = true; }
      if (!this.uni_en) { this.uni_en_error = true; }
      if (!this.major) { this.major_error = true; }
      if (!this.gpa) { this.gpa_error = true; }
      if (!this.study_type) { this.study_type_error = true; }
      if (!this.qualify_date) { this.qualify_date_error = true; }
    }
    
    if (!this.qualify) { this.qualify_error = true; valid = false; }
    if (!this.qualifyFile) { this.qualify_file_error = true; valid = false; this.scrollToTob(); }

    if (!this.birth_city) { this.birth_city_error = true; valid = false; }
    if (!this.social_status) { this.social_status_error = true; valid = false; }
    if (!this.rel) { this.rel_error = true;  valid = false; }

    if (!this.mobile) {
      this.mobile_error = true;
      valid = false;
    } else {
      var regExp = /^(05)[0-9]{8}$/g;
      if(!regExp.test(this.mobile)){
        this.mobile_number_error = true;
        valid = false;
      }else{
        let length = this.mobile.toString().length;
        if (length != 10) {
          this.mobile_max_error = true;
          valid = false;
        }
      }
    }

    if (this.mobile2) {
      var regExp = /^(05)[0-9]{8}$/g;
      if(!regExp.test(this.mobile2)){
        this.mobile2_number_error = true;
        valid = false;
      }else{
        let length = this.mobile2.toString().length;
        if (length != 10) {
          this.mobile2_max_error = true;
          valid = false;
        }
      }
    } 

    if (!this.buildingNo) {
      this.buildingNo_error = true;
      valid = false;
    } else {
      let length = this.buildingNo.toString().length
      if (length != 4) {
        this.buildingNo_max_error = true;
        valid = false;
      }
    }

    if (!this.streetName) {
      this.streetName_error = true;
      valid = false;
    }

    if (!this.streetNameEn) {
      this.streetNameEn_error = true;
      valid = false;
    }

    if (!this.district || this.district == "--") {
      this.district_error = true;
      valid = false;
    }

    if (!this.city || this.city == "--") {
      this.city_error = true;
      valid = false;
    }

    if (!this.postalCode) {
      this.postalCode_error = true;
      valid = false;
    } else {
      let length = this.postalCode.toString().length
      if (length != 5) {
        this.postalCode_max_error = true;
        valid = false;
      }
    }

    if (!this.additionalNumber) {
      this.additionalNumber_error = true;
      valid = false;
    } else {
      let length = this.additionalNumber.toString().length
      if (length != 4) {
        this.additionalNumber_max_error = true;
        valid = false;
      }
    }

    let university_ar = "";
    let university_en = "";
    let major_data = "";
    let birth_city_data = "";
    if (valid) {
      if(this.univsArOther){
        university_ar = this.univ_ar;
      }else{
        university_ar = this.uni_ar;
      }
      if(this.univsEnOther){
        university_en = this.univ_en;
      }else{
        university_en = this.uni_en;
      }
      if(this.majorOther){
        major_data = this.majorInput;
      }else{
        major_data = this.major;
      }
      if(this.cityOther){
        birth_city_data = this.birthCityInput;
      }else{
        birth_city_data = this.birth_city;
      }
      this.submitted_data = {
        id: this.userService.userData.id,
        FIRST_NAME: this.firstNameAr,
        FATHER_NAME: this.fatherNameAr,
        MID_NAME: this.midNameAr,
        LAST_NAME: this.lastNameAr,
        FIRST_NAME_S: this.firstNameEn,
        FATHER_NAME_S: this.fatherNameEn,
        MID_NAME_S: this.midNameEn,
        LAST_NAME_S: this.lastNameEn,
        NATIONAL_ID: this.nationalId,
        ACTUAL_DEPT_DESC: this.actWork,
        MOBILE_NO: this.mobile,
        WORK_EMAIL: this.workEmail,
        EMAIL: this.email,
        TWITTER_ID: this.twitterId,
        BUILDING_NO: this.buildingNo,
        STREET_NAME: this.streetName,
        STREET_NAME_EN: this.streetNameEn,
        DISTRICT: this.district,
        CITY: this.city,
        POSTAL_CODE: this.postalCode,
        ADDITIONAL_NUMBER: this.additionalNumber,
        idPhoto: this.idPhoto,
        workPhoto: this.workPhoto,
        idFileName: this.idFileName,
        idFileNameWork: this.idFileNameWork,
        nameCheck: this.showNameFields,
        ssnCheck: this.showSsnFields,
        workCheck: this.showWorkFields,
        emailWorkCheck: this.showWorkEmailFields,
        birth_city: birth_city_data,
        gpa: this.gpa,
        qualify: this.qualify,
        uni_ar: university_ar,
        uni_en: university_en,
        study_type: this.study_type,
        qualify_date: this.qualify_date,
        mobile2: this.mobile2,
        social_status: this.social_status,
        rel: this.rel,
        major: major_data,
        qualifyFile: this.qualifyFile,
      };
      this.displayData = true;
    }
  }
  email_code;
  sms_code;
  agreeFun(){
    this.requesting = true;
    this.userService.sendEmail(this.submitted_data['EMAIL']).subscribe(
    (response: any) => {
      if (response) {
        if (response['status']) {
          this.displayData = false;
          this.confirmEmail = true;
        } else {
          this.requesting = false;
          this.toastr.tryagain();
        }
      }
    },
    error => {
      this.toastr.tryagain();
      this.requesting = false;
    });
  }


  requestingSMS = false;
  confirmSMS = false;
  email_code_error = false;
  sendSMS(){
    this.requestingSMS = true;
    this.userService.sendSMS(this.submitted_data['EMAIL'], this.email_code, this.submitted_data['MOBILE_NO']).subscribe(
    (response: any) => {
      if (response) {
        if (response['status']) {
          this.confirmEmail = false;
          this.confirmSMS = true;
        } else {
          this.requestingSMS = false;
          this.email_code_error = true;
        }
      }
    },
    error => {
      this.toastr.tryagain();
      this.requesting = false;
    });
  }

  sms_code_error = false;
  requestingSMS_confirm = false;
  sendSMS_confirm(){
    this.requestingSMS_confirm = true;
    this.userService.sendSMS_confirm(this.submitted_data['MOBILE_NO'], this.sms_code, this.submitted_data).subscribe(
    (response: any) => {
      if (response) {
        if (response['status']) {
          this.confirmSMS = false;
          this.userService.userData['emp_confirm']['show'] = false;
          this.dialogRef.close();
        } else {
          this.requestingSMS_confirm = false;
          this.sms_code_error = true;
        }
      }
    },
    error => {
      this.toastr.tryagain();
      this.requesting = false;
    });
  }


  allowSelection = false;
  onScroll(e) {
    if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
      this.allowSelection = true;
    }
  }
}
