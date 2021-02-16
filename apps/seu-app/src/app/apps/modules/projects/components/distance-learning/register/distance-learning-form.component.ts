import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { RecaptchaComponent } from 'ng-recaptcha';

@Component({
  selector: 'app-distance-learning-form',
  templateUrl: './distance-learning-form.component.html',
  styleUrls: ['./distance-learning-form.component.css']
})
export class DistanceLearningFormComponent implements OnInit {

  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  datePickerConfig: Partial<BsDatepickerConfig>;
  form: FormGroup;
  environment;
  countries = [];
  courses = [];
  titles = [];
  app_pk;
  appreq;
  constructor(
    public pservice: ProjectsService,
    private toastr: AppToasterService,
    private translate: TranslateService,
    private fb: FormBuilder,
  ) {
    this.environment = environment;
    this.form = this.fb.group({
      'COURSE_ID': ['', [Validators.required]],
      'FIRST_NAME_AR': ['', [Validators.required]],
      'FIRST_NAME_EN': ['', [Validators.required]],
      'LAST_NAME_AR': ['', [Validators.required]],
      'LAST_NAME_EN': ['', [Validators.required]],
      'EMAIL': ['', [Validators.required, Validators.email]],
      'PHONE': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      'GENDER': ['', [Validators.required]],
      'TITLE': ['', [Validators.required]],
      'COUNTRY': ['', [Validators.required]],
      'EMPLOYER': [''],
      'CITY': [''],
      'captcha': ['', [Validators.required]]
    });
  }
  isLoading = false;
  submitted = false;
  active = false;
  ngOnInit() {
    this.isLoading = true;
    this.pservice.getDistanceLearningLookups(this.translate.currentLang).subscribe(
      (response: any) => {
        if (response) {
          this.active = response.data.active;
          this.countries = response.data.countries;
          this.courses = response.data.courses;
          this.titles = response.data.titles;
          this.isLoading = false;
        }
      },
      error => { }
    );
  }

  resolved(captchaResponse: string) {
    this.form.controls['captcha'].setValue(captchaResponse);
  }

  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    let data = this.form.value;
    this.submitted = true;
    this.pservice.addDistanceLearningRequest(data).subscribe(
      (response: any) => {
        if (response.status) {
          this.toastr.push([{
            'type': 'success',
            'body': this.translate.instant("success_request")
          }]);
          this.submitted = false;
          this.app_pk = 1;
          this.appreq = { app_pk: this.app_pk };
        } else {
          const errList = response['errors'];
          Object.keys(errList).forEach(key => {
            let error = {};
            error[errList[key]] = true;
            this.form.controls[key].setErrors(error);
            this.form.controls[key].markAsDirty();
          });
        }
        this.resetCaptcha();
        this.isLoading = false;
        this.recaptchaRef.reset();
      },
      error => {
        this.toastr.tryagain();
        this.resetCaptcha();
        this.submitted = false;
        this.isLoading = false;
      }
    );
  }

  resetCaptcha() {
    this.recaptchaRef.reset();
    this.form.controls['captcha'].setValue('');
  }

  keypress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
