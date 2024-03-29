import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from 'src/environments/environment';
import { RecaptchaComponent } from 'ng-recaptcha';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { AdmissionGRService } from '../../services/admission-gr.service';

@Component({
  selector: 'app-gr-login',
  templateUrl: './gr-login.component.html',
  styleUrls: ['./gr-login.component.css']
})
export class GrLoginComponent implements OnInit {
  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  AddReqForm: FormGroup;
  submitted = false;
  studentData;
  environment;
  constructor(private toastr: AppToasterService, public admissionGRservice: AdmissionGRService, private fb: FormBuilder, private translate: TranslateService, private router: Router, private globalService: GlobalBaseService) {

    this.AddReqForm = fb.group({
      'ssn': ['', [Validators.required, Validators.minLength(10), Validators.minLength(10)]],
      'capcha': ['', [Validators.required]]
    });
    this.environment = environment;

  }
  ngOnInit() {
    //this.admissionGRservice.LoggedInUser["exa"];
  }

  resolved(captchaResponse: string) {
    this.AddReqForm.controls['capcha'].setValue(captchaResponse);
  }


  onFormSubmit() {
    if (this.AddReqForm.invalid) {
      return;
    }
    this.submitted = true;
    this.admissionGRservice.getloginstatus(this.AddReqForm.value).subscribe(reslogin => {
      if (reslogin['data']['token']) {
        this.globalService.setItem(this.admissionGRservice.tokenKey, reslogin['data']["token"]);
        this.admissionGRservice.messages = reslogin['messages'];
        this.router.navigate(['/apps/admission-gr/gr-verification/'])
      } else if (!reslogin['status']) {
        this.toastr.push(reslogin['messages']);
        this.recaptchaRef.reset();
      } else {
        this.toastr.push([{ type: 'error', 'body': reslogin['data']['message'] }]);
        this.recaptchaRef.reset();
      }
      this.submitted = false;
    }, error => {
      this.toastr.tryagain();
      this.submitted = false;
      this.recaptchaRef.reset();
    }
    );

  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


}
