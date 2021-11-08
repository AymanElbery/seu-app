import { Component, OnInit, ViewChild } from '@angular/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { StudentService } from '../../services/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services-autologin',
  templateUrl: './services-autologin.component.html',
  styleUrls: ['./services-autologin.component.css']
})
export class ServicesAutoLoginComponent implements OnInit {

  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  form: FormGroup;
  submitted = false;
  studentData;
  environment;
  constructor(public stdservice: StudentService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private globalService: GlobalBaseService) {

    this.form = fb.group({
      'std_id': ['', [Validators.required, Validators.minLength(9), Validators.minLength(9)]],
      'ssn': ['', [Validators.required, Validators.minLength(10), Validators.minLength(10)]],
      //'captcha': ['', [Validators.required]]
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
    this.stdservice.autologin(this.form.value).subscribe(response => {
      if (!response['status']) {
        this.stdservice.notifyError(response['res_code']);
        this.recaptchaRef.reset();
        this.submitted = false;
        return false;
      }
      this.globalService.setItem(this.stdservice.tokenKey, response['data']["token"]);
      this.stdservice.LoggedInToken = response['data']["token"]
      this.stdservice.LoggedInUser = response["data"]["student"];
      this.stdservice.pushuserLoaded();
      this.router.navigate(['../'], { relativeTo: this.route });
    }, error => {
      this.stdservice.tryagain();
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
