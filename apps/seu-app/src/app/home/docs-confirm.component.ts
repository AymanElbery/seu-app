import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../account/services/user.service';

import { HttpRequestService } from '../shared/services/http-request.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-docs-confirm-home',
  styleUrls: ['./docs-confirm.component.scss'],
  templateUrl: './docs-confirm.component.html'
})
export class DocsConfirmComponent implements OnInit, OnDestroy {
  selection;
  requesting = false;
  showNameFields = false;
  showSsnFields = false;
  showWorkFields = false;
  idFile= false;
  idFileName;
  idFileSsn= false;
  idFileNameSsn;
  idFileWork= false;
  idFileNameWork;
  valid = true;

  first_name ;
  father_name ;
  mid_name ;
  last_name ;

  first_name_s ;
  father_name_s ;
  mid_name_s ;
  last_name_s ;

  first_name_ar_error ;
  father_name_ar_error  ;
  mid_name_ar_error  ;
  last_name_ar_error  ;

  first_name_en_error  ;
  father_name_en_error  ;
  mid_name_en_error  ;
  last_name_en_error  ;

  national_id_error;
  actWork_error;
  idDocWorkError;

  ssn;
  mobile;
  mobile_error;
  mobile_max_error;
  workEmail;
  workEmail_error;
  work;
  email;
  email_error;
  twitterId;
  twitterId_error;
  districts;
  cities;
  streetName;
  streetName_error;
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
  buildingNo_max_error;
  postalCode_max_error;
  additionalNumber_max_error;
  showWorkEmailFields = false;
  
  
  constructor(public userService: UserService, private http: HttpClient, private reqservice: HttpRequestService, private router: Router, private toastr: AppToasterService, public translate: TranslateService,
    public dialogRef: MatDialogRef<DocsConfirmComponent>,
  ) {
    this.userService.getDistricts().subscribe(
        (response: any) => {
          if (response) {
            this.districts = response.data;
          }
        },
        error => {}
    );

    this.userService.getCities().subscribe(
        (response: any) => {
          if (response) {
            this.cities = response.data;
          }
        },
        error => {}
    );

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

            this.ssn = response.data[0].NATIONAL_ID;
            this.mobile = response.data[0].MOBILE_NO;
            this.workEmail = response.data[0].WORK_EMAIL;
            this.work = response.data[0].ACTUAL_DEPT_DESC;
            this.email = response.data[0].EMAIL;
            this.twitterId = response.data[0].TWITTER_ID;

            this.district = response.data[0].DISTRICT;
            this.city = response.data[0].CITY;
            this.buildingNo = response.data[0].BUILDING_NO;
            this.additionalNumber = response.data[0].ADDITIONAL_NUMBER;
            this.postalCode = response.data[0].POSTAL_CODE;
            this.streetName = response.data[0].STREET_NAME;
          }
        },
        error => {}
      );
  }
  ngOnInit() {
    document.getElementById("side-menu").style.display = "none";
  }
  ngOnDestroy() {
    document.getElementById("side-menu").style.display = "block";

  }

  showNameEdit(){
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
  showSsnEdit(){
    this.showSsnFields = this.showSsnFields ? false : true;
    if (this.showSsnFields == false) {
        this.national_id_error = false;

        this.idDocError = false;
    }
  }
  showWorkEdit(){
    this.showWorkFields = this.showWorkFields ? false : true;
  }

  showWorkEmailEdit(){
    this.showWorkEmailFields = this.showWorkEmailFields ? false : true;
  }

  idFileChange(e){
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

  idFileSsnChange(fileInput: any){
    this.idFileSsn = true;
    this.idFileNameSsn = fileInput.target.files[0].name;
  }

  idFileWorkChange(e){
    this.idFileWork = true;
    this.idFileNameWork = e.target.files[0].name;

    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoadedWork.bind(this);
    reader.readAsDataURL(file);

    this.idDocWorkError = false;
  }

  _handleReaderLoadedWork(e) {
    const reader = e.target;
    this.workPhoto = reader.result;
  }

  scrollToTob(){
    document.getElementById("exampleModalLabel").scrollIntoView();
  }

  removeFirstNameArError(){ this.first_name_ar_error = false; }
  removeFatherNameArError(){ this.father_name_ar_error = false; }
  removeMidNameArError(){ this.mid_name_ar_error = false; }
  removeLastNameArError(){ this.last_name_ar_error = false; }
  removeFirstNameEnError(){ this.first_name_en_error = false; }
  removeFatherNameEnError(){ this.father_name_en_error = false; }
  removeMidNameEnError(){ this.mid_name_en_error = false; }
  removeLastNameEnError(){ this.last_name_en_error = false; }

  removeNationalIdError(){ this.national_id_error = false; }
  removeActWorkError(){ this.actWork_error = false; }

  removeMobileError(){ this.mobile_error = false;  this.mobile_max_error = false;}
  removeWorkEmailError(){ this.workEmail_error = false; }
  removeEmailError(){ this.email_error = false; }
  removeTwitterIdError(){ this.twitterId_error = false; }
  removeBuildingNoError(){ this.buildingNo_error = false; this.buildingNo_max_error = false; }
  removeStreetNameError(){ this.streetName_error = false; }
  removeDistrictError(){ this.district_error = false; }
  removeCityError(){ this.city_error = false; }
  removePostalCodeError(){ this.postalCode_error = false; this.postalCode_max_error = false;  }
  removeAdditionalNumberError(){ this.additionalNumber_error = false; this.additionalNumber_max_error = false;  }


  submit(){
    let valid = true;
    if (this.showNameFields) {
        if (!this.firstNameAr) { this.first_name_ar_error = true; this.scrollToTob(); valid = false;}
        if (!this.fatherNameAr) { this.father_name_ar_error = true; this.scrollToTob(); valid = false;}
        if (!this.midNameAr) { this.mid_name_ar_error = true; this.scrollToTob(); valid = false;}
        if (!this.lastNameAr) { this.last_name_ar_error = true; this.scrollToTob(); valid = false;}
        if (!this.firstNameEn) { this.first_name_en_error = true; this.scrollToTob(); valid = false;}
        if (!this.fatherNameEn) { this.father_name_en_error = true; this.scrollToTob(); valid = false;}
        if (!this.midNameEn) { this.mid_name_en_error = true; this.scrollToTob(); valid = false;}
        if (!this.lastNameEn) { this.last_name_en_error = true; this.scrollToTob(); valid = false;}
    }

    if (this.showSsnFields) {
        if (!this.nationalId) { this.national_id_error = true; this.scrollToTob(); valid = false;}
    }

    if (this.showNameFields || this.showSsnFields) {
        if (!this.idDoc) {
            this.idDocError = true; 
            this.scrollToTob();
            valid = false;
        } 
    }

    if (this.showWorkFields) {
        if (!this.actWork) { this.actWork_error = true; this.scrollToTob();}
        if (!this.idFileWork) {
            this.idDocWorkError = true; 
            this.scrollToTob();
            valid = false;
        }
    }

    if (!this.mobile) { 
        this.mobile_error = true;
        valid = false;
    }else{
        let length = this.mobile.toString().length
        if (length != 10) {
            this.mobile_max_error = true;
            valid = false;
        }
    }

    if (!this.workEmail) { 
        this.workEmail_error = true;
        valid = false;
    }  
    
    if (!this.email) { 
        this.email_error = true;
        valid = false;
    } 

    if (!this.twitterId) { 
        this.twitterId_error = true;
        valid = false;
    } 

    if (!this.buildingNo) { 
        this.buildingNo_error = true;
        valid = false;
    }else{
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
    }else{
        let length = this.postalCode.toString().length
        if (length != 5) {
            this.postalCode_max_error = true;
            valid = false;
        }
    }

    if (!this.additionalNumber) { 
        this.additionalNumber_error = true;
        valid = false;
    }else{
        let length = this.additionalNumber.toString().length
        if (length != 4) {
            this.additionalNumber_max_error = true;
            valid = false;
        }
    }

    if (valid) {
        let data = {
            id                          : this.userService.userData.id,
            FIRST_NAME                  : this.firstNameAr,
            FATHER_NAME                 : this.fatherNameAr,
            MID_NAME                    : this.midNameAr,
            LAST_NAME                   : this.lastNameAr,
            FIRST_NAME_S                : this.firstNameEn,
            FATHER_NAME_S               : this.fatherNameEn,
            MID_NAME_S                  : this.midNameEn,
            LAST_NAME_S                 : this.lastNameEn,
            NATIONAL_ID                 : this.nationalId,
            ACTUAL_DEPT_DESC            : this.actWork,
            MOBILE_NO                   : this.mobile,
            WORK_EMAIL                  : this.workEmail,
            EMAIL                       : this.email,
            TWITTER_ID                  : this.twitterId,
            BUILDING_NO                 : this.buildingNo,
            STREET_NAME                 : this.streetName,
            DISTRICT                    : this.district,
            CITY                        : this.city,
            POSTAL_CODE                 : this.postalCode,
            ADDITIONAL_NUMBER           : this.additionalNumber,
            idPhoto                     : this.idPhoto,
            workPhoto                   : this.workPhoto,
            idFileName                  : this.idFileName,
            idFileNameWork              : this.idFileNameWork,
            nameCheck                   : this.showNameFields,
            ssnCheck                    : this.showSsnFields,
            workCheck                   : this.showWorkFields,
            emailWorkCheck              : this.showWorkEmailFields
        };
        this.requesting = true;
        this.userService.updateEmpInfo(data).subscribe(
            (response: any) => {
              if (response) {
                //this.router.navigate(['/home']);
                  if (response['status']) {
                    this.userService.userData['showConfirmations'] = false;
                    this.dialogRef.close();
                  } else {
                    this.requesting = false;
                    this.toastr.tryagain();
                  }
              }
            },
            error => {
              this.toastr.tryagain();
              this.requesting = false;
            }
        );
    } 
  }

  



  allowSelection = false;
  onScroll(e) {
    //scrollTop + clientHeight = scrollHeight
    if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
      this.allowSelection = true;
    }
  }
  saveChoose() {
    // if(this.requesting){
    //   return false; 
    // }
    // this.requesting = true;
    // const headers = new HttpHeaders({
    //   Authorization: this.reqservice.getSSOAuth(),
    //   'Content-Type': 'application/json',
    // });
    // this.http.post(environment.baselink + environment.servicesprefix + "/rest/policy_acceptance/change_status", { username: this.userService.userData.username, status: this.selection, emp_id: this.userService.userData.id }, { headers }).subscribe(res => {
    //   if (res['status']) {
    //     this.userService.userData['policy'] = "Done";
    //     this.dialogRef.close();
    //   } else {
    //     this.requesting = false;
    //     this.toastr.tryagain();
    //   }
    // },
    // err => {
    // this.toastr.tryagain();
    // this.requesting = false;
    // });
  }
}
