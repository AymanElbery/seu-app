import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../../services/job-application.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-job-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class JobHomeComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;
  AddForm: FormGroup;
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
    public jobApplicationService: JobApplicationService, 
    private toastr: AppToasterService, 
    private translate: TranslateService,
    private fb: FormBuilder,
    ) {
      this.environment = environment;
      this.AddForm = this.fb.group({
        'name': ['', [Validators.required]],
        'nationality': ['', [Validators.required]],
        'gender': ['', [Validators.required]],
        'birth_date': ['', [Validators.required]],
        'city': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'phone': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        'qualification': ['', [Validators.required]],
        'general_major': ['', [Validators.required]],
        'private_major': ['', [Validators.required]],
        'job_type': ['', [Validators.required]],
        'resume': ['', [Validators.required]],
        'branch': ['', [Validators.required]],
      });
    }

  isLoading = false;
  submitted = false;
  ngOnInit() {
    this.jobApplicationService.getLookups(this.translate.currentLang).subscribe(
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
      error => {}
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
  }

  onMajorsChange(value){
    let data = [];
    this.submajors.forEach(element => {
      if (element.MAJOR_ID == value) {
        data.push(element);
      }
    });
    this.selectedSubMajors = data;
  }

  onSubmit(){
    if (this.AddForm.invalid) {
      return;
    }
    this.submitted = true;

    let data = {
      name          : this.AddForm.value.name,
      email         : this.AddForm.value.email,
      birth_date     : this.AddForm.value.birth_date,
      phone         : this.AddForm.value.phone,
      nationality   : this.AddForm.value.nationality,
      city          : this.AddForm.value.city,
      gender        : this.AddForm.value.gender,
      qualification : this.AddForm.value.qualification,
      general_major : this.AddForm.value.general_major,
      private_major : this.AddForm.value.private_major,
      branch        : this.AddForm.value.branch,
      job_type      : this.AddForm.value.job_type,
      resume        : this.cv,
    };

    this.jobApplicationService.addRequest(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.toastr.push([{
              'type' : 'success',
              'body' : this.translate.instant("success_request")
            }]);
            this.isLoading = false;
            this.disabled = true;
          }else{
            this.toastr.push([{
              'type' : 'error',
              'body' : response.error
            }]);
          }
        }
      },
      error => {}
    ); 
  }

}
