import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from 'src/environments/environment';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

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
  }

  ngOnInit() {
    this.form = this.fb.group({
      'user_name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'ssn': ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      'birth_date': [, [Validators.required]],
      'title': ['', [Validators.required]],
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
      }
      this.submitting = false;
    }, error => {
      this.submitting = false;
    })
  }
}
