import { Component, OnInit, ViewChild } from '@angular/core';
import { AdmisionUgService } from '../../../services/admision-ug.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from '../../../../../../../environments/environment';
import { RecaptchaComponent } from 'ng-recaptcha';

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

  constructor(private toastr: AppToasterService, private admissionUgservice: AdmisionUgService, private fb: FormBuilder, private translate: TranslateService, private router: Router) {

    this.AddReqForm = fb.group({
      'ssn': ['', [Validators.required, Validators.minLength(10), Validators.minLength(10)]],
      'capcha': ['', [Validators.required]]
    });

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
    this.admissionUgservice.getresstatus(this.AddReqForm.value).subscribe(resdttaus => {
      const status = resdttaus['status'];
      if (status == true) {
        if (false && !resdttaus['data']['student_data']) {
          this.toastr.push([{ type: 'error', 'body': resdttaus['data']['message'] }]);
        } else {
          this.admissionUgservice.checkResultData = (resdttaus as any).data;
          this.router.navigate(['/apps/admission-ug/display-result/']);
        }
        this.submitted = false;
      }
      else {
        var erromsg = resdttaus['data']['errmsg'];
        this.toastr.push([{ type: 'error', 'body': erromsg }]);

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
