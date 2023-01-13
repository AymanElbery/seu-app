import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../../services/admission-ug.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';


@Component({
  selector: 'app-ug-veryfication',
  templateUrl: './ug-veryfication.component.html',
  styleUrls: ['./ug-veryfication.component.css']
})
export class UgVeryficationComponent implements OnInit {
  getresult;
  AddReqForm: FormGroup;
  submitted = false;
  constructor(private toastr: AppToasterService, private admissionUgservice: AdmissionUGService, private fb: FormBuilder, private translate: TranslateService, private router: Router, private globaService: GlobalBaseService) {

    const ugtoken = globaService.getItem(admissionUgservice.tokenKey);
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
    this.router.navigate(['/apps/admission-ug/ug-login/']);
  }

  onFormSubmit() {
    if (this.AddReqForm.invalid) {
      return;
    }

    this.admissionUgservice.getverification(this.AddReqForm.value).subscribe(resverify => {
      if (resverify["status"]) {
        this.admissionUgservice.LoggedInToken = this.globaService.getItem(this.admissionUgservice.tokenKey);
        this.admissionUgservice.LoggedInUser = resverify["data"]["student_data"];
        this.admissionUgservice.checkResultData = resverify["data"];
        this.globaService.setItem(this.admissionUgservice.userKey, JSON.stringify(resverify["data"]["student_data"]));
        this.submitted = false;
        this.router.navigate(['/apps/admission-ug/display-result']);
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
