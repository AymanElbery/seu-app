import { Component, OnInit, ViewChild } from '@angular/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { environment } from 'src/environments/environment';
import { TranslationAuthService } from '../../../../services/translation-auth';

@Component({
  selector: 'app-translation-register',
  templateUrl: './translation-register.component.html',
  styleUrls: ['./translation-register.component.css']
})
export class TranslationRegisterComponent implements OnInit {
  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  form: FormGroup;
  submitted = false;
  studentData;
  environment;
  constructor(public transervice: TranslationAuthService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private globalService: GlobalBaseService) {
    this.form = fb.group({
      'NAME': ['', [Validators.required, Validators.minLength(10)]],
      'PHONE': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'WORK_EMAIL': ['', [Validators.required]],
      'CLIENT_WORK': ['', [Validators.required]],
      'PASS': ['', [Validators.required, Validators.minLength(8)]],
      'captcha': ['', [Validators.required]]
    });
    this.environment = environment;

  }
  ngOnInit() {

  }

  resolved(captchaResponse: string) {
    this.form.controls['captcha'].setValue(captchaResponse);
  }

  onFormSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    this.transervice.register(this.form.value).subscribe(response => {
      if (response['status']) {
        this.transervice.notifySucc(response['res_code']);
        this.router.navigate(['../login'], { relativeTo: this.route });
      } else {
        this.transervice.notifyError(response['res_code']);
        const errList = response['errors'];
        Object.keys(errList).forEach(key => {
          let error = {};
          error[errList[key]] = true;
          this.form.controls[key].setErrors(error);
          this.form.controls[key].markAsDirty();
        });
        this.recaptchaRef.reset();
        this.submitted = false;
        return false;
      }
    }, error => {
      this.transervice.tryagain();
      this.submitted = false;
      this.recaptchaRef.reset();
    });
  }


  onlyNumbers(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
