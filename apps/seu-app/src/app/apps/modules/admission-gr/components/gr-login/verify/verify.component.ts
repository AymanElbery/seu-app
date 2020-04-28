import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { AdmissionGRService } from '../../../services/admission-gr.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  getresult;
  AddReqForm: FormGroup;
  submitted = false;
  constructor(private toastr: AppToasterService, private admissionGRservice: AdmissionGRService, private fb: FormBuilder, private translate: TranslateService, private router: Router, private globaService: GlobalBaseService) {

    const ugtoken = globaService.getItem(admissionGRservice.tokenKey);
    if (!ugtoken) {
      this.redirectToLogin();
    }
    this.AddReqForm = fb.group({
      'token': [ugtoken, [Validators.required]],
      'code': ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  redirectToLogin() {
    this.router.navigate(['/apps/admission-gr/gr-login/']);
  }

  onFormSubmit() {
    if (this.AddReqForm.invalid) {
      return;
    }

    this.admissionGRservice.getverification(this.AddReqForm.value).subscribe(resverify => {
      if (resverify["status"]) {
        this.admissionGRservice.LoggedInToken = this.globaService.getItem(this.admissionGRservice.tokenKey);
        this.admissionGRservice.LoggedInUser = resverify["data"];
        this.admissionGRservice.checkResultData = resverify["data"];
        this.globaService.setItem(this.admissionGRservice.userKey, JSON.stringify(resverify["data"]));
        this.submitted = false;
        //this.router.navigate(['/apps/admission-gr/display-result']);
        this.router.navigate(['/apps/admission-gr/']);
      } else {
        this.toastr.push(resverify['messages']);
        this.submitted = false;
      }
    }, error => {
      this.toastr.tryagain();
      this.submitted = false;
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
