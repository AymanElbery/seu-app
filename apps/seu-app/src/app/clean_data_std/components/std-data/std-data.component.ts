import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { Clean_data_stdService } from '../../services/clean_data_std.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-std-data',
  styleUrls: ['./std-data.component.css'],
  templateUrl: './std-data.component.html'
})
export class StdDataComponent implements OnInit, OnDestroy{

  isLoading = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  form: FormGroup;
  std_id;
  std_email;
  std_ssn;
  cities;
  districts;
  universities;
  majors;
  degrees;
  countries;

  errorDisplay = false;

  basicDisplay = false;
  basic;

  addressDisplay = false;
  addressManualDisplay = false;
  address;

  submitted = false;

  dataForm = true;
  emailForm = false;
  smsForm = false;

  email_code;
  sms_code;
  email_code_error = false;
  sms_code_error = false;
  data;

  showOtherBirthCity = false;
  skip_button = false;

  constructor(
    public userService: UserService,
    public clean_dataService: Clean_data_stdService,
    public translate: TranslateService,
    private toastr: AppToasterService,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      'birth_date'    : ['', [Validators.required]],
      'personal_email': ['', [Validators.required, Validators.email]],
      'mobile'        : ['', [Validators.required]],
      'birth_city'    : ['', [Validators.required]],
      'birth_city_other'    : [''],
      'city_ar'    : [''],
      'city_en'    : [''],
      'street_ar'    : [''],
      'street_en'    : [''],
      'district_ar'    : [''],
      'district_en'    : [''],
      'unit_no'    : [''],
      'zip_code'    : [''],
      'building_no'    : [''],
      'additional_no'    : [''],
    });
    this.std_ssn = this.userService.userData.ssn;
    this.std_id = this.userService.userData.id;
    this.std_email= this.userService.userData.email;
    this.getLookups();
  }

  ngOnInit() {
    document.getElementById("side-menu").style.display = "none";
  }

  ngOnDestroy() {
    document.getElementById("side-menu").style.display = "block";
  }

  skip(){
    this.userService.userData.DATA_CLEANED_STD = 1;
    this.router.navigate(['/']);
  }

  getLookups(){
    this.isLoading = true;
    this.clean_dataService.get("data_clean_std/lookups") 
    .subscribe(
      (response: any) => {
        if (response.status) {
          this.cities = response.data.cities;
          this.districts = response.data.districts;
          this.skip_button = response.data.skip;
        }
        this.isLoading = false;
      },
      error => {
      }
    )
  }

  changeBirthCity(value){
    if(value.NAME_EN == 'Other'){
      this.showOtherBirthCity = true;
      this.form.get('birth_city_other').setValidators(Validators.required);
    }else{
      this.showOtherBirthCity = false;
    }
  }

  changeBirthDate(value){
    let birthDate = this.formatDate(value);
    this.isLoading = true;
    this.clean_dataService.get("data_clean_std/info/" + birthDate + "/" + this.std_ssn) 
    .subscribe(
      (response: any) => {
        if (response.status) {
          this.basic = response.data.basic;
          this.address = response.data.address;

          if(!response.address){
            this.basicDisplay = true;
            this.addressDisplay = false;
            this.addressManualDisplay = true;

          }else{
            this.basicDisplay = true;
            this.addressDisplay = true;
            this.addressManualDisplay = false;
          }

          if(!response.basic){
            this.errorDisplay = true;
            this.basicDisplay = false;
            this.addressDisplay = false;
            this.addressManualDisplay = false;
          }else{
            this.errorDisplay = false;
            this.basicDisplay = true;
          }
        }
        this.isLoading = false;
      },
      error => {
      }
    )
  }

  formatDate(date) {  
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  onSubmit(){
    let formData = this.form.value;
    this.data = {
      'STD_ID'          : this.std_id,
      'NAME_AR'         : this.basic.firstName_AR + " " + this.basic.fatherName_AR + " " + this.basic.grandFatherName_AR + " " + this.basic.familyName_AR,
      'NAME_EN'         : this.basic.firstName_EN + " " + this.basic.fatherName_EN + " " + this.basic.grandFatherName_EN + " " + this.basic.familyName_EN,
      'BIRTH_DATE'      : this.formatDate(formData.birth_date),
      'PERSONAL_EMAIL'  : formData.personal_email,
      'MOBILE'          : formData.mobile,
      'BIRTH_CITY'      : this.showOtherBirthCity ? formData.birth_city_other : formData.birth_city,
      'CITY_AR'         : (this.addressDisplay) ? this.address.CityNameAr : formData.city_ar,
      'CITY_EN'         : (this.addressDisplay) ? this.address.CityNameEn : formData.city_en,
      'STREET_AR'       : (this.addressDisplay) ? this.address.StreetNameAr : formData.street_ar,
      'STREET_EN'       : (this.addressDisplay) ? this.address.StreetNameEn : formData.street_en,
      'DISTRICT_AR'     : (this.addressDisplay) ? this.address.DistrictAreaAr : formData.district_ar,
      'DISTRICT_EN'     : (this.addressDisplay) ? this.address.DistrictAreaEn : formData.district_en,
      'UNIT_NO'         : (this.addressDisplay) ? this.address.UnitNo : formData.unit_no,
      'ZIP_CODE'        : (this.addressDisplay) ? this.address.ZipCode : formData.zip_code,
      'BUILDING_NO'     : (this.addressDisplay) ? this.address.BuildingNo : formData.building_no,
      'ADDITIONAL_NO'   : (this.addressDisplay) ? this.address.AdditionalNo : formData.additional_no,
      'ADDRESS'         : (this.addressDisplay) ? 0 : 1,
      'STATUS'          : (this.addressDisplay) ? 1 : 2,
      'SSN'             : this.std_ssn,
      'STD_EMAIL'       : this.std_email,
      'GENDER'          : this.basic.gender,
    };

    this.sendEmail();
  }

  sendEmail(){
    this.dataForm = false;
    this.emailForm = true;
    this.smsForm = false;
    this.userService.sendEmailStd(this.data.PERSONAL_EMAIL).subscribe(
      (response: any) => {
        if (response) {
          if (response['status']) {
          } else {
            this.submitted = false;
            this.toastr.tryagain();
          }
        }
      },
      error => {
        this.toastr.tryagain();
        this.submitted = false;
      });
  }

  sendSms(){
    this.userService.sendSMSStd(this.data.PERSONAL_EMAIL, this.email_code , this.data.MOBILE).subscribe(
    (response: any) => {
      if (response) {
        if (response['status']) {
          this.dataForm = false;
          this.emailForm = false;
          this.smsForm = true;
        } else {
          this.submitted = false;
          this.email_code_error = true;
        }
      }
    },
    error => {
      this.toastr.tryagain();
      this.submitted = false;
    });
  }

  sendSMS_confirm(){
    this.userService.sendSMS_confirm_std(this.data.MOBILE, this.sms_code, this.data).subscribe(
    (response: any) => {
      if (response) {
        if (response['status']) {
          this.userService.userData.DATA_CLEANED_STD = 1;
          this.router.navigate(['/']);
        } else {
          this.submitted = false;
          this.sms_code_error = true;
        }
      }
    },
    error => {
      this.toastr.tryagain();
      this.submitted = false;
    });
  }
}