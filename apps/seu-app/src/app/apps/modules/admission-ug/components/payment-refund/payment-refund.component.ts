import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-refund',
  templateUrl: './payment-refund.component.html',
  styleUrls: ['./payment-refund.component.css']
})
export class PaymentRefundComponent implements OnInit {
  can_add_new_request;
  details: any = [];
  user: any;
  AddReqForm: FormGroup;
  submitted = false;
  isLoading = true;
  constructor(private toastr: AppToasterService, private admissionUgservice: AdmissionUGService, private translate: TranslateService, private router: Router, private fb: FormBuilder, public globalService: GlobalBaseService) {

    this.AddReqForm = fb.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'agreement': ['', [Validators.required]],
      'mobile': ['', [Validators.required]],
      'mobile2': [''],
      'phone': ['', [Validators.required]],
      'token': [this.admissionUgservice.LoggedInToken]
    });

  }

  ngOnInit() {
    this.paymentrefund();
  }

  paymentrefund() {
    this.admissionUgservice.paymentrefund(this.admissionUgservice.LoggedInToken).subscribe(respayref => {
      const status = respayref['status'];
      if (status == 0) {
        this.toastr.push(respayref['messages']);
        this.router.navigate(['/apps/admission-ug/']);
      }
      this.can_add_new_request = respayref['data']["can_add_new_request"];
      this.user = respayref['data']["user"];
      this.details = respayref['data']["details"];
      this.isLoading = false;
    },
      err => {
        this.toastr.tryagain();
        this.router.navigate(['/apps/admission-ug/']);
        this.isLoading = false
      }
    );
  }
  onFormSubmit() {
    if (this.AddReqForm.invalid) {
      return;
    }
    this.submitted = true;
    this.admissionUgservice.Reqpaymentrefund(this.AddReqForm.value).subscribe(resreq => {
      if (resreq['status']) {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('request_saved') }]);
        this.paymentrefund();
      } else {
        this.toastr.push(resreq['messages']);
      }
      this.submitted = false;
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
