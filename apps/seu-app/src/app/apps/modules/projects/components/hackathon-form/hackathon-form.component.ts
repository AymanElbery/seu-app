import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { RecaptchaComponent } from 'ng-recaptcha';

@Component({
  selector: 'app-hackathon-form',
  templateUrl: './hackathon-form.component.html',
  styleUrls: ['./hackathon-form.component.css']
})
export class HackathonFormComponent implements OnInit {

  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  datePickerConfig: Partial<BsDatepickerConfig>;
  form: FormGroup;
  environment;
  colleges;
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
      'IS_STUDENT': ['', [Validators.required]],
      'UNIVERSITY': [''],
      'FULL_NAME': ['', [Validators.required]],
      'AGE': ['', [Validators.required, Validators.min(1), Validators.max(150)],],
      'SSN': ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      'EMAIL': ['', [Validators.required, Validators.email]],
      'PHONE': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
      'CITY': ['', [Validators.required]],
      'EDU_LEVEL': ['', [Validators.required]],
      'JOB_TITLE': ['', []],
      'HAS_PREV': ['', [Validators.required]],
      'TRACK': ['', [Validators.required]],
      'captcha': ['', [Validators.required]]
    });
    this.form.controls['IS_STUDENT'].valueChanges.subscribe(() => {
      if (this.form.controls['IS_STUDENT'].value == '1') {
        this.form.controls['UNIVERSITY'].setValidators([Validators.required]);
      } else {
        this.form.controls['UNIVERSITY'].setValidators(null);
      }
    });
  }
  isLoading = false;
  submitted = false;
  active = false;
  ngOnInit() {
    this.isLoading = true;
    this.pservice.gethackathonLookups(this.translate.currentLang).subscribe(
      (response: any) => {
        if (response) {
          this.active = response.data.active;
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
    this.pservice.addhackathonRequest(data).subscribe(
      (response: any) => {
        if (response.status) {
          this.toastr.push([{
            'type': 'success',
            'body': this.translate.instant("success_request")
          }]);
          this.submitted = false;
          this.app_pk = response['data']['APP_PK'];
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
