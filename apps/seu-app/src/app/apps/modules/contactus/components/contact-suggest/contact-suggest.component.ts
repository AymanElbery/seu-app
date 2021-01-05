import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from 'src/environments/environment';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-suggest',
  templateUrl: './contact-suggest.component.html',
  styleUrls: ['./contact-suggest.component.css']
})
export class ContactSuggestComponent implements OnInit {

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
      'name': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'ssn': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'group': ['', [Validators.required]],
      'title': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'captcha': ['', [Validators.required]],
      'file': []
    });
    this.getGroups();
  }
  getGroups() {
    this.contact.getLookups().subscribe(resposne => {
      this.groups = resposne['data']['groups'];
    })
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
  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    const formData = new FormData();
    const data = this.form.value;
    Object.keys(data).forEach(key => {
      formData.append(key, data['key']);
    })

  }

}
