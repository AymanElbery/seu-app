import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from 'src/environments/environment';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css', '../styles/contact.css'],
  providers: [DatePipe]

})
export class ContactFormComponent implements OnInit {

  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  datePickerConfig: Partial<BsDatepickerConfig>;


  environment;
  form: FormGroup;

  groups = [];
  constructor(
    private toastr: AppToasterService,
    private translate: TranslateService,
    private fb: FormBuilder,
    private contact: ContactService
  ) {
    this.environment = environment;
    this.datePickerConfig = {dateInputFormat: 'DD-MM-YYYY', showWeekNumbers: false};
  }

  ngOnInit() {
    this.form = this.fb.group({
      'user_name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'ssn': ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      'birth_date': [, [Validators.required]],
      'subject': ['', [Validators.required]],
      'description': [''],
      'captcha': ['', [Validators.required]],
      'file': []
    });
    this.form.valueChanges.subscribe(() => {
      this.ticket_id = '';
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }
  resolved(captchaResponse: string) {
    this.form.controls['captcha'].setValue(captchaResponse);
  }
  submitting = false;
  ticket_id = '';

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
        document.getElementById("customFileLangLabel").innerText = '';
        document.getElementById("customFileLangLabel").innerHTML = '';
        this.ticket_id = response['data']['ticket_id'];
        document.getElementById("contactForm").scrollIntoView();
      } else {
        this.recaptchaRef.reset();
        this.toastr.push([{ type: 'error', 'body': this.translate.instant('messages.' + response['res_code']) }]);
      }
      this.submitting = false;
    }, error => {
      this.submitting = false;
    })
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
