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

  categories = [];
  items = [];
  _lookups = [];
  groups = [];
  std_invalid = false;
  constructor(
    private toastr: AppToasterService,
    private translate: TranslateService,
    private fb: FormBuilder,
    private contact: ContactService,
  ) {
    this.environment = environment;
  }

  ngOnInit() {
    this.form = this.fb.group({
      'name': ['', [Validators.required]],
      'phone': ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10)]],
      'ssn': ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      'email': ['', [Validators.required, Validators.email]],
      'category': ['', [Validators.required]],
      'item': ['', [Validators.required]],
      'type': ['', [Validators.required]],
      'subject': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'captcha': ['', [Validators.required]],
      'file': []
    });
    this.form.valueChanges.subscribe(() => {
      this.ticket_id = '';
    });

    this.getLookups();

    this.form.controls['category'].valueChanges.subscribe(() => {
      this.form.controls['item'].setValue("");
      if (this.form.controls['category'].value) {
          let category = this.form.controls['category'].value;
          this.contact.items_list(category, this._lookups, localStorage.getItem('seu-lang')).subscribe(list => {
              this.items = list;
          });
      } else {
          this.items = [];
      }
    });
    this.form.controls['category'].valueChanges.subscribe(() => {
      if (this.form.controls['category'].value == 'خدمات طلابية') {
        this.contact.get_std_data(this.form.controls['ssn'].value).subscribe(resposne => {
          this.std_invalid = !resposne['data'];
          if(this.std_invalid){
            this.form.controls['category'].setValue("");
          }
        })
      }
    });
    this.form.controls['ssn'].valueChanges.subscribe(() => {
      this.form.controls['category'].setValue("");
      this.std_invalid = false;
    });
  }
  getLookups() {
    this.contact.getLookups().subscribe(resposne => {
      if(localStorage.getItem('seu-lang') == 'ar'){
        this.categories = resposne['data']['categories'];
      }else{
        this.categories = resposne['data']['categories_en'];
      }
      this._lookups = resposne['data'];
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