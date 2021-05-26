import { Component, OnInit, ViewChild } from '@angular/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { environment } from 'src/environments/environment';
import { TranslationAuthService } from '../../../../services/translation-auth';
import { TranslationUserService } from '../../../../services/translation-user';

@Component({
  selector: 'app-translation-forgot',
  templateUrl: './translation-forgot.component.html',
  styleUrls: ['./translation-forgot.component.css']
})
export class TranslationForgotComponent implements OnInit {


  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  form: FormGroup;
  submitted = false;
  studentData;
  environment;
  constructor(public transervice: TranslationAuthService, private tuser: TranslationUserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private globalService: GlobalBaseService) {

    this.form = fb.group({
      'username': ['', [Validators.required, Validators.minLength(6)]],
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
    this.transervice.reset(this.form.value).subscribe(response => {
      if (!response['status']) {
        this.transervice.notifyError(response['res_code']);
        this.recaptchaRef.reset();
        this.submitted = false;
        return false;
      }
      this.transervice.notifySucc(response['res_code']);
      this.router.navigate(["/apps/translation/auth/login"]);
    }, error => {
      this.transervice.tryagain();
      this.submitted = false;
      this.recaptchaRef.reset();
    });
  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
