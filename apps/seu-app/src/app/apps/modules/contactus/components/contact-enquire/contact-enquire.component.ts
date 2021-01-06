import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from 'src/environments/environment';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-enquire',
  templateUrl: './contact-enquire.component.html',
  styleUrls: ['./contact-enquire.component.css']
})
export class ContactEnquireComponent implements OnInit {


  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  environment;
  form: FormGroup;

  ticketDetails

  groups = [];
  constructor(
    private toastr: AppToasterService,
    private translate: TranslateService,
    private fb: FormBuilder,
    private contact: ContactService
  ) {
    this.environment = environment;
  }

  ngOnInit() {
    this.form = this.fb.group({
      'ticket_id': ['', [Validators.required]],
      'ssn': ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      'captcha': ['', [Validators.required]],
    });
  }

  resolved(captchaResponse: string) {
    this.form.controls['captcha'].setValue(captchaResponse);
  }

  requesting = false;
  err_code = '';
  getDetails() {
    if (this.form.invalid) {
      return false;
    }
    const formData = new FormData();
    const data = this.form.value;
    Object.keys(data).forEach(key => {
      if (data[key])
        formData.set(key, data[key]);
    });
    this.err_code = '';
    this.requesting = true;
    this.contact.getRequestDetails(formData).subscribe(response => {
      if (response['status']) {
        this.recaptchaRef.reset();
        this.form.reset();
        this.ticketDetails(response['data']);
      } else {
        this.err_code = response['res_code'];
        this.recaptchaRef.reset();
      }
      this.requesting = false;
    }, error => {
      this.requesting = false;
    })
  }

  submitting = false;
  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    const formData = new FormData();
    const data = this.form.value;
    Object.keys(data).forEach(key => {
      if (data[key])
        formData.set(key, data[key]);
    });

    this.submitting = true;
    this.contact.addLoginRequest(formData).subscribe(response => {
      if (response['status']) {
        this.recaptchaRef.reset();
        this.form.reset();
      } else {
        this.recaptchaRef.reset();
      }
      this.submitting = false;
    }, error => {
      this.submitting = false;
    })
  }
}

