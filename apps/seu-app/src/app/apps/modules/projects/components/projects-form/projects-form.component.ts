import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { RecaptchaComponent } from 'ng-recaptcha';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnInit {

  @ViewChild('recaptchaRef', { read: RecaptchaComponent, static: false }) recaptchaRef: RecaptchaComponent;

  datePickerConfig: Partial<BsDatepickerConfig>;
  form: FormGroup;
  environment;
  colleges;
  app_pk;
  constructor(
    public pservice: ProjectsService,
    private toastr: AppToasterService,
    private translate: TranslateService,
    private fb: FormBuilder,
  ) {
    this.environment = environment;
    this.form = this.fb.group({
      'name': ['', [Validators.required]],
      'ssn': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'phone': ['', [Validators.required]],
      'gender': ['', [Validators.required]],
      'college': ['', [Validators.required]],
      'title': ['', [Validators.required]],
      'details': ['', [Validators.required]],
      'target': ['', [Validators.required]],
      'cost': ['', [Validators.required]],
      'duration': ['', [Validators.required]],
      'reason': ['', [Validators.required]],
      //'recurrence': ['', [Validators.required]],
      'strength': ['', [Validators.required]],
      'weaknesses': ['', [Validators.required]],
      'opportunities': ['', [Validators.required]],
      'risks': ['', [Validators.required]],
      'file': ['', [Validators.required]],
      'captcha': ['', [Validators.required]]
    });
  }
  isLoading = false;
  submitted = false;

  ngOnInit() {
    this.pservice.getLookups(this.translate.currentLang).subscribe(
      (response: any) => {
        if (response) {
          this.colleges = response.data.colleges;;
        }
      },
      error => { }
    );
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (['pdf'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) {
      this.form.controls['file'].setValue("");
      return false;
    }
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("wrong_file") }]);
      this.form.controls['file'].setValue("");
      return false;
    }
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.form.controls['file'].setValue(reader.result);
  }

  resolved(captchaResponse: string) {
    this.form.controls['captcha'].setValue(captchaResponse);
  }

  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    let data = this.form.value;
    this.isLoading = true;
    this.pservice.addRequest(data).subscribe(
      (response: any) => {
        if (response.status) {
          this.toastr.push([{
            'type': 'success',
            'body': this.translate.instant("success_request")
          }]);
          this.submitted = true;
          this.isLoading = false;
          this.app_pk = response['data']['APP_PK'];
        } else {
          const errList = response['errors'];
          Object.keys(errList).forEach(key => {
            let error = {};
            error[errList[key]] = true;
            this.form.controls[key].setErrors(error);
            this.form.controls[key].markAsDirty();
          });
        }
        this.resetCaptcha();
        this.isLoading = false;
        this.recaptchaRef.reset();
      },
      error => {
        this.toastr.tryagain();
        this.resetCaptcha();
        this.isLoading = false;
      }
    );
  }

  resetCaptcha() {
    this.recaptchaRef.reset();
    this.form.controls['captcha'].setValue('');
  }

}
