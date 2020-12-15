import { Component, OnInit, ViewChild } from '@angular/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { environment } from 'src/environments/environment';
import { TranslationAuthService } from '../../services/translation-auth';
import { TranslationUserService } from '../../services/translation-user';

@Component({
  selector: 'app-translation-password',
  templateUrl: './translation-password.component.html',
  styleUrls: ['./translation-password.component.css']
})
export class TranslationPasswordComponent implements OnInit {
  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  form: FormGroup;
  submitted = false;
  studentData;
  environment;
  constructor(public transervice: TranslationAuthService, private tuser: TranslationUserService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private globalService: GlobalBaseService) {
    this.form = fb.group({
      'username': ['', [Validators.required, Validators.minLength(6)]],
      'password': ['', [Validators.required, Validators.minLength(8)]],
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
    this.transervice.login(this.form.value).subscribe(response => {
      if (!response['status']) {
        this.transervice.notifyError(response['res_code']);
        this.recaptchaRef.reset();
        this.submitted = false;
        return false;
      }
      localStorage.setItem('sid', encodeURI(response['data']['token']));

      this.tuser.setUser(response['data']['user']);
      this.router.navigate(["/apps/translation/client/my-requests"]);
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
