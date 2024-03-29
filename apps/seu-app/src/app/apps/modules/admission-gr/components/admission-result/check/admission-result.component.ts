import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from '../../../../../../../environments/environment';
import { RecaptchaComponent } from 'ng-recaptcha';
import { AdmissionGRService } from '../../../services/admission-gr.service';

@Component({
  selector: 'app-admission-result',
  templateUrl: './admission-result.component.html',
  styleUrls: ['./admission-result.component.css']
})
export class AdmissionResultComponent {
  environment;
  AddReqForm: FormGroup;
  submitted = false;
  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  constructor(private toastr: AppToasterService, private admissionGrservice: AdmissionGRService, private fb: FormBuilder, private translate: TranslateService, private router: Router) {

    if (this.admissionGrservice.checkResultData) {
      this.router.navigate(['/apps/admission-gr/display-result']);
    }

    this.AddReqForm = fb.group({
      'ssn': ['', [Validators.required, Validators.minLength(10), Validators.minLength(10)]],
      'capcha': ['', [Validators.required]]
    });


    if (this.admissionGrservice.isLoggedIn) {
      this.AddReqForm.controls['ssn'].setValue(this.admissionGrservice.LoggedInUser['SSN']);
      this.AddReqForm.controls['capcha'].setValue(this.admissionGrservice.LoggedInToken);

      this.onFormSubmit();
    }

    this.environment = environment;
  }

  resolved(captchaResponse: string) {
    this.AddReqForm.controls['capcha'].setValue(captchaResponse);
  }


  onFormSubmit() {
    if (this.AddReqForm.invalid) {
      return;
    }
    this.submitted = true;
    this.admissionGrservice.getresstatus(this.AddReqForm.value).subscribe(resdttaus => {
      if (resdttaus['status']) {
        this.admissionGrservice.checkResultData = resdttaus['data']['info'];
        this.router.navigate(['/apps/admission-gr/display-result/']);
      } else {
        this.toastr.push(resdttaus['messages']);
        this.recaptchaRef.reset();
        this.submitted = false;
      }
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
