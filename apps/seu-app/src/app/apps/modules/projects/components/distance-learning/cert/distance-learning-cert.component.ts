import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-distance-learning-cert',
  templateUrl: './distance-learning-cert.component.html',
  styleUrls: ['./distance-learning-cert.component.css']
})
export class DistanceLearningCertComponent{

  form: FormGroup;
  colleges;
  isLoading = false;
  submitted = false;
  showCerts = false;
  certs;
  loadings = {};
  isdownloaing = false;

  constructor(
    public pservice: ProjectsService,
    private toastr: AppToasterService,
    private translate: TranslateService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      'EMAIL': ['', [Validators.required, Validators.email]],
    });
  }
  

  onSubmit() {
    this.showCerts = false;
    if (this.form.invalid) {
      return false;
    }
    let data = this.form.value;
    this.submitted = true;
    this.pservice.getCertsByEmail(data).subscribe(
      (response: any) => {
        if (response.status) {
          if (response.data.length == 0) {
            this.toastr.push([{
              'type': 'error',
              'body': this.translate.instant("distancelearning.wrong_cert")
            }]);
          } else {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("distancelearning.success_cert")
            }]);
            this.showCerts = true;
            this.certs = response.data;
          }
          this.submitted = false;
        } else {
          const errList = response['errors'];
          Object.keys(errList).forEach(key => {
            let error = {};
            error[errList[key]] = true;
            this.form.controls[key].setErrors(error);
            this.form.controls[key].markAsDirty();
          });
        }
        this.isLoading = false;
      },
      error => {
        this.toastr.tryagain();
        this.submitted = false;
        this.isLoading = false;
      }
    );
  }

  keypress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  print_attend(course_id, r_id) {
    if (this.isdownloaing) {
      return false;
    }
    this.isdownloaing = true;
    if (!this.loadings[course_id]) {
      this.loadings[course_id] = [];
    }
    this.loadings[course_id][r_id] = true;
    this.pservice.printCert(course_id, r_id).subscribe(response => {
      this.pservice.downloadPDF(response);
      this.loadings[course_id][r_id] = false;
      this.isdownloaing = false;
    }, err => {
      this.pservice.tryagain();
      this.loadings[course_id][r_id] = false;
      this.isdownloaing = false;
    });
    return false;
  }

}
