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
  brances;
  cities;
  countries;
  majors;
  submajors;
  selectedSubMajors = [];
  quals;
  cv;
  disabled = false;

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
      'phone': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'gender': ['', [Validators.required]],
      'college': ['', [Validators.required]],

      'title': ['', [Validators.required]],
      'desc': ['', [Validators.required]],
      'target': ['', [Validators.required]],
      'cost': ['', [Validators.required]],
      'duration': ['', [Validators.required]],
      'reason': ['', [Validators.required]],
      'recurrence': ['', [Validators.required]],
      'strength': ['', [Validators.required]],
      'weaknesses': ['', [Validators.required]],
      'opportunities': ['', [Validators.required]],
      'risks': ['', [Validators.required]],
      'file_name': ['', [Validators.required]],
      'capcha': ['', [Validators.required]]
    });
  }

  isLoading = false;
  submitted = false;
  ngOnInit() {
    this.pservice.getLookups(this.translate.currentLang).subscribe(
      (response: any) => {
        if (response) {
          this.brances = response.data.campus;
          this.cities = response.data.cities;
          this.countries = response.data.countries;
          this.quals = response.data.quals;
          this.majors = response.data.majors;
          this.submajors = response.data.submajors;
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
      return false;
    }
    if (!this.validateFile(file.name)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("wrong_file") }]);
      return false;
    }
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.cv = reader.result;
    //this.form.controls['resume'] = reader.result;
  }

  onMajorsChange(value) {
    let data = [];
    this.submajors.forEach(element => {
      if (element.MAJOR_ID == value) {
        data.push(element);
      }
    });
    this.selectedSubMajors = data;
  }
  resolved(captchaResponse: string) {
    this.form.controls['capcha'].setValue(captchaResponse);
  }
  onSubmit() {
    return;
    if (this.form.invalid) {
      return;
    }
    let data = this.form.value;
    data['resume'] = this.cv;
    this.submitted = true;
    this.pservice.addRequest(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("success_request")
            }]);
            this.isLoading = false;
            this.disabled = true;
            this.submitted = false;
          } else {
            this.toastr.push([{
              'type': 'error',
              'body': response.error
            }]);
            this.isLoading = false;
            this.disabled = false;
            this.submitted = false;
          }
        }
        this.recaptchaRef.reset();
      },
      error => {
        this.recaptchaRef.reset();
        this.isLoading = false;
        this.disabled = false;
        this.submitted = false;
      }
    );
  }

}
