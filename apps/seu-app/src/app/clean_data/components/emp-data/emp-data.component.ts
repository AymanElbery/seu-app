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
  errorDisplay = false;

  basicDisplay = false;
  basic;

  addressDisplay = false;
  address;

  qualifyDisplay = false;
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
      'birth_date': ['', [Validators.required]],
    });
    this.emp_ssn = this.userService.userData.ssn;
    this.emp_id = this.userService.userData.id;
    this.emp_email= this.userService.userData.email;
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

  changeBirthDate(value){
    let birthDate = this.formatDate(value);
    this.isLoading = true;
    this.clean_dataService.get("data_clean/info/" + birthDate + "/" + this.emp_ssn) 
    .subscribe(
      (response: any) => {
        if (response.status) {
          this.basic = response.data.basic;
          this.basicDisplay = true;

          this.address = response.data.address;
          this.addressDisplay = true;

          this.qualify = response.data.qualify;
          this.qualifyDisplay = true;

          this.errorDisplay = false;
        }else{
          this.basicDisplay = false;
          this.addressDisplay = false;
          this.qualifyDisplay = false;
          this.errorDisplay = true;
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