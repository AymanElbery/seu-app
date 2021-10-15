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

  errorDisplay = false;

  basicDisplay = false;
  basic;

  addressDisplay = false;
  addressManualDisplay = false;
  address;

  qualifyDisplay = false;
  qualifyManualDisplay = false;
  qualify;
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
      'personal_email': ['', [Validators.required]],
      'mobile'        : ['', [Validators.required]],
      'birth_city'    : ['', [Validators.required]],
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
      'GPA'    : [''],
      'certificate'    : [''],
      'graduation_date'    : [''],
      'degree_name'    : [''],
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
        }
        this.isLoading = false;
      },
      error => {
      }
    )
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
            //
            this.form.get('city_ar').setValidators(Validators.required);
            this.form.get('city_en').setValidators(Validators.required);
            this.form.get('street_ar').setValidators(Validators.required);
            this.form.get('street_en').setValidators(Validators.required);
            this.form.get('district_ar').setValidators(Validators.required);
            this.form.get('district_en').setValidators(Validators.required);
            this.form.get('unit_no').setValidators(Validators.required);
            this.form.get('zip_code').setValidators(Validators.required);
            this.form.get('building_no').setValidators(Validators.required);
            this.form.get('additional_no').setValidators(Validators.required);
            //
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
             //
             this.form.get('institute_name').setValidators(Validators.required);
             this.form.get('college_name').setValidators(Validators.required);
             this.form.get('major_name').setValidators(Validators.required);
             this.form.get('GPA').setValidators(Validators.required);
             this.form.get('certificate').setValidators(Validators.required);
             this.form.get('graduation_date').setValidators(Validators.required);
             this.form.get('degree_name').setValidators(Validators.required);
             this.form.get('country').setValidators(Validators.required);
             //
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
}