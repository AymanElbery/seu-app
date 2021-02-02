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
  styleUrls: ['./contact-suggest.component.css', '../styles/contact.css']
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
      'phone': ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10)]],
      'ssn': ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      'email': ['', [Validators.required, Validators.email]],
      'group': ['', [Validators.required]],
      'type': ['', [Validators.required]],
      'subject': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'captcha': ['', [Validators.required]],
      'file': []
    });
    this.form.valueChanges.subscribe(() => {
      this.ticket_id = '';
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
  submitting = false;
  submit = false;
  ticket_id = '';
  onSubmit() {
    if (this.form.invalid) {
      this.submit = true;
      return false;
    }
    const formData = new FormData();
    const data = this.form.value;
    Object.keys(data).forEach(key => {
      if (data[key])
        formData.set(key, data[key]);
    });

    this.submitting = true;
    this.contact.addSuggestRequest(formData).subscribe(response => {
      if (response['status']) {
        this.recaptchaRef.reset();
        this.form.reset();
        if (document.getElementById("customFileLangLabel")) {
          document.getElementById("customFileLangLabel").innerText = '';
          document.getElementById("customFileLangLabel").innerHTML = '';
        }
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