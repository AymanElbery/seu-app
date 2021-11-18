import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { Clean_dataService } from '../../services/clean_data.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-emp-data',
  styleUrls: ['./emp-data.component.css'],
  templateUrl: './emp-data.component.html'
})
export class EmpDataComponent implements OnInit, OnDestroy{

  isLoading = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  form: FormGroup;
  emp_id;
  emp_email;
  emp_ssn;
  cities;
  districts;
  universities;
  majors;
  degrees;
  countries;
  idFileQualify = false;
  idFileNameWork;
  idFileNameQualify;
  qualify_file_error;
  qualifyFile;
  qualifyDocError;

  errorDisplay = false;

  basicDisplay = false;
  basic;

  addressDisplay = false;
  addressManualDisplay = false;
  address;

  qualifyDisplay = false;
  qualifyManualDisplay = false;
  qualify;

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

  manual_qualify_insert = false; 
  constructor(
    public userService: UserService,
    public clean_dataService: Clean_dataService,
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
      'institute_name'    : [''],
      'college_name'    : [''],
      'major_name'    : [''],
      'gpa'    : [''],
      'certificate'    : [''],
      'graduation_date'    : [''],
      'degree'    : [''],
      'country'    : [''],
    });
    this.emp_ssn = this.userService.userData.ssn;
    this.emp_id = this.userService.userData.id;
    this.emp_email= this.userService.userData.email;
    this.getLookups();
  }

  ngOnInit() {
    document.getElementById("side-menu").style.display = "none";
  }

  ngOnDestroy() {
    document.getElementById("side-menu").style.display = "block";
  }

  skip(){
    this.userService.userData.DATA_CLEANED = 1;
    this.router.navigate(['/']);
  }

  getLookups(){
    this.isLoading = true;
    this.clean_dataService.get("data_clean/lookups") 
    .subscribe(
      (response: any) => {
        if (response.status) {
          this.cities = response.data.cities;
          this.districts = response.data.districts;
          this.universities = response.data.universities;
          this.majors = response.data.majors;
          this.degrees = response.data.degrees;
          this.countries = response.data.countries;
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
    this.clean_dataService.get("data_clean/info/" + birthDate + "/" + this.emp_ssn) 
    .subscribe(
      (response: any) => {
        if (response.status) {
          this.basic = response.data.basic;
          this.address = response.data.address;
          this.qualify = response.data.qualify;

          if(!response.address){
            this.basicDisplay = true;
            this.addressDisplay = false;
            this.addressManualDisplay = true;
            // this.form.get('city_ar').setValidators(Validators.required);
            // this.form.get('city_en').setValidators(Validators.required);
            // this.form.get('street_ar').setValidators(Validators.required);
            // this.form.get('street_en').setValidators(Validators.required);
            // this.form.get('district_ar').setValidators(Validators.required);
            // this.form.get('district_en').setValidators(Validators.required);
            // this.form.get('unit_no').setValidators(Validators.required);
            // this.form.get('zip_code').setValidators(Validators.required);
            // this.form.get('building_no').setValidators(Validators.required);
            // this.form.get('additional_no').setValidators(Validators.required);

            this.qualifyDisplay = true;
          }else{
            this.basicDisplay = true;
            this.addressDisplay = true;
            this.addressManualDisplay = false;
            this.qualifyDisplay = true;
          }

          if(!response.qualify){
            this.basicDisplay = true;
            this.qualifyDisplay = false;
            this.qualifyManualDisplay = true;
            //  this.form.get('institute_name').setValidators(Validators.required);
            //  this.form.get('college_name').setValidators(Validators.required);
            //  this.form.get('major_name').setValidators(Validators.required);
            //  this.form.get('gpa').setValidators(Validators.required);
            //  this.form.get('certificate').setValidators(Validators.required);
            //  this.form.get('graduation_date').setValidators(Validators.required);
            //  this.form.get('degree').setValidators(Validators.required);
            //  this.form.get('country').setValidators(Validators.required);
          }else{
            this.basicDisplay = true;
            this.qualifyDisplay = true;
            this.qualifyManualDisplay = false;
          }

          if(!response.basic){
            this.errorDisplay = true;
            this.basicDisplay = false;
            this.addressDisplay = false;
            this.addressManualDisplay = false;
            this.qualifyDisplay = false;
            this.qualifyManualDisplay = false;
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

  manualQualify(){
    this.manual_qualify_insert = !this.manual_qualify_insert;
    this.qualifyManualDisplay = false;
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

  _handleReaderLoadedQualify(e) {
    const reader = e.target;
    this.qualifyFile = reader.result;
  }

  onSubmit(){
    let formData = this.form.value;
    this.data = {
      'EMPLOYEE_ID'     : this.emp_id,
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
      'INSTITUTE_NAME'  : (this.qualifyDisplay) ? this.qualify.InstituteName : formData.institute_name,
      'COLLEGE_NAME'    : (this.qualifyDisplay) ? this.qualify.CollegeName : formData.college_name,
      'MAJOR_NAME'      : (this.qualifyDisplay) ? this.qualify.MajorName : formData.major_name,
      'GPA'             : (this.qualifyDisplay) ? this.qualify.GPA : formData.gpa,
      'CERTIFICATE'     : (this.qualifyDisplay) ? this.qualify.Certificate : this.qualifyFile,
      'GRADUATION_DATE' : (this.qualifyDisplay) ? this.qualify.GraduationDate : this.formatDate(formData.graduation_date),
      'DEGREE'          : (this.qualifyDisplay) ? this.qualify.DegreeName : formData.degree,
      'COUNTRY'         : (this.qualifyDisplay) ? this.qualify.Country : formData.country,
      'UPLOAD_CERT'     : (this.qualifyDisplay) ? 0 : 1,
      'ADDRESS'         : (this.addressDisplay) ? 0 : 1,
      'QUALIFY'         : (this.qualifyDisplay) ? 0 : 1,
      'STATUS'          : (this.qualifyDisplay && this.addressDisplay) ? 1 : 2,
      'SSN'             : this.emp_ssn,
      'EMP_EMAIL'       : this.emp_email,
      'GENDER'          : this.basic.gender,
    };
    //console.log(this.data);
    this.sendEmail();
  }

  sendEmail(){
    this.dataForm = false;
    this.emailForm = true;
    this.smsForm = false;
    this.userService.sendEmail(this.data.PERSONAL_EMAIL).subscribe(
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
    this.userService.sendSMS(this.data.PERSONAL_EMAIL, this.email_code , this.data.MOBILE).subscribe(
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
    this.userService.sendSMS_confirm(this.data.MOBILE, this.sms_code, this.data).subscribe(
    (response: any) => {
      if (response) {
        if (response['status']) {
          this.userService.userData.DATA_CLEANED = 1;
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