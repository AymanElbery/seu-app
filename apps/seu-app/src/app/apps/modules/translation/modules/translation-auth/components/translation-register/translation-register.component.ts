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
  constructor(public eservice: TranslationAuthService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private globalService: GlobalBaseService) {

    this.form = fb.group({
      'std_id': ['', [Validators.required, Validators.minLength(9), Validators.minLength(9)]],
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
    this.eservice.login(this.form.value).subscribe(response => {
      if (!response['status']) {
        this.eservice.notifyError(response['res_code']);
        this.recaptchaRef.reset();
        this.submitted = false;
        return false;
      }
      this.router.navigate(['../verify'], { relativeTo: this.route });
    }, error => {
      this.eservice.tryagain();
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