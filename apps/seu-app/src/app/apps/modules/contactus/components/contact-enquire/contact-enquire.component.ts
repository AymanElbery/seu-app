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
  @ViewChild('recaptchaNoteRef', { read: RecaptchaComponent, static: false }) recaptchaNoteRef: RecaptchaComponent;

  environment;
  form: FormGroup;
  noteform: FormGroup;

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
    this.getDetails();

    this.noteform = this.fb.group({
      'description': ['', [Validators.required]],
      'captcha': ['', [Validators.required]]
    });
  }

  resolved(captchaResponse: string) {
    this.form.controls['captcha'].setValue(captchaResponse);
  }
  details_fields = ['name', 'user_name', 'ssn', 'email', 'phone', 'subject', 'description', 'status'];
  requesting = false;
  err_code = '';
  formInput;
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
    this.ticketDetails = null;
    this.err_code = '';
    this.requesting = true;
    this.contact.getRequestDetails(formData).subscribe(response => {
      if (response['status']) {
        this.recaptchaRef.reset();
        this.form.reset();
        this.ticketDetails = response['data'];
      } else {
        this.err_code = response['res_code'];
        this.toastr.push([{ type: 'error', 'body': this.translate.instant('messages.' + response['res_code']) }]);
        this.recaptchaRef.reset();
      }
      this.requesting = false;
    }, error => {
      this.requesting = false;
    })
  }

  downloading = {};
  download(file) {
    this.downloading = true;
    const formData = new FormData();
    formData.append('url', file['url']);
    this.contact.download(formData).subscribe(response => {
      if (response['status']) {
        const linkSource = `data:application/octet-stream;base64,${response['data']['content']}`;
        const downloadLink = document.createElement("a");
        const fileName = file['name'];

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      }
      this.downloading = false;
    }, error => {
      this.downloading = false;
    })
    return false;
  }

  resolvednote(captchaResponse: string) {
    this.noteform.controls['captcha'].setValue(captchaResponse);
  }
  submitting = false;
  onSubmit() {
    if (this.noteform.invalid) {
      return false;
    }
    const formData = new FormData();
    const data = this.noteform.value;
    data['ticket_id'] = this.ticketDetails['id'];
    Object.keys(data).forEach(key => {
      if (data[key])
        formData.set(key, data[key]);
    });

    this.submitting = true;
    this.contact.addNote(formData).subscribe(response => {
      if (response['status']) {
        this.recaptchaNoteRef.reset();
        this.noteform.reset();
        this.ticketDetails['conversations'].unshift(response['data']);
        this.ticketDetails = JSON.parse(JSON.stringify(this.ticketDetails));
        document.getElementById("contactDetails").scrollIntoView();
      } else {
        this.recaptchaNoteRef.reset();
        this.toastr.push([{ type: 'error', 'body': this.translate.instant('messages.' + response['res_code']) }]);
      }
      this.submitting = false;
    }, error => {
      this.submitting = false;
    })
  }
}

