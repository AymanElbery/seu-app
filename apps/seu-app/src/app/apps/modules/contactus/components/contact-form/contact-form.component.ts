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
      'email': ['', [Validators.required]],
      'ssn': ['', [Validators.required]],
      'birth_date': ['', [Validators.required]],
      'title': ['', [Validators.required]],
      'description': [''],
      'captcha': ['', [Validators.required]],
      'file': []
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
  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    const formData = new FormData();
    const data = this.form.value;
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    this.submitting = true;
    this.contact.addLoginRequest(formData).subscribe(response => {
      if (response['status']) {
        this.form.reset();
        console.log(response);
      }
      this.recaptchaRef.reset();
      this.submitting = false;
    })
  }
}
