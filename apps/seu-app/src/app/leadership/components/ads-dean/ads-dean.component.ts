import {Component, OnInit} from '@angular/core';
import {LeadershipService} from 'src/app/leadership/services/leadership.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {AppToasterService} from '../../../shared/services/app-toaster';

@Component({
  selector: 'app-ads-dean',
  templateUrl: './ads-dean.component.html',
  styleUrls: ['./ads-dean.component.css']
})
export class AdsDeanComponent implements OnInit {

  isLoading = false;
  currentAd: number;

  form: FormGroup;
  noEmp = false;
  submitted = false;
  showResult = false;
  showMessage = false;
  recommendedInstructor;

  datePickerConfig: Partial<BsDatepickerConfig>;

  employee: any = null;

  constructor(
    private fb: FormBuilder,
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: AppToasterService,
  ) {
    if (!this.leadershipService.currentAddApps) {
      this.back();
    }
    this.currentAd = this.leadershipService.currentAddApps;

    this.datePickerConfig = {dateInputFormat: 'DD/MM/YYYY'};
    this.form = this.fb.group({
      START_DATE: [null, [Validators.required]],
      END_DATE: [null, [Validators.required]],
      EMPLOYEE_ID: [''],
      EMAIL: [''],
      dean: [{}, [Validators.required]]
    });
  }

  ngOnInit() {
    this.loadDean();
  }

  save(key) {
    const data = this.form.value;
    const post = {};
    post[key] = data[key];

    if (!post[key]) {
      return;
    }

    this.submitted = true;
    this.leadershipService.get_instructor(post).subscribe((response => {
      if (!response.status) {
        this.showMessage = false;
        this.noEmp = true;
      } else {
        this.recommendedInstructor = response.data.instructor;
        this.employee = {
          'EMPLOYEE_ID': response.data.instructor.EMPLOYEE_ID,
          'EMPLOYEE_NAME': response.data.instructor.FULL_NAME_AR,
          'EMPLOYEE_EMAIL': response.data.instructor.WORK_EMAIL,
        };
        this.form.controls.dean.setValue(this.employee);
        this.showResult = true;
        this.noEmp = false;
      }
      this.isLoading = false;
      this.submitted = false;
    }));
  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  changeVal() {
    this.showMessage = false;
    this.showResult = false;
    this.noEmp = false;
  }


  back() {
    this.router.navigate(['../ads'], {relativeTo: this.route});
  }


  loadDean() {
    this.isLoading = true;
    this.leadershipService.get_dean(this.currentAd['ADS_PK']).subscribe((response => {
      this.form.controls.START_DATE.setValue(response.data.ad.DEAN_START_DATE);
      this.form.controls.END_DATE.setValue(response.data.ad.DEAN_END_DATE);
      this.employee = response.data.employee;
      this.form.controls.dean.setValue(this.employee);
      this.isLoading = false;
    }));
  }

  saveDean() {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    if (this.currentAd && this.currentAd['ADS_PK']) {
      data['AD_ID'] = this.currentAd['ADS_PK'];
    }

    this.submitted = true;
    this.leadershipService.save_dean(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response.status) {
          this.leadershipService.notifySucc(response['res_code']);
        } else {
          this.leadershipService.notifyError(response['res_code']);
        }
        this.isLoading = false;
        this.submitted = false;
      },
      error => {
        this.isLoading = false;
        this.submitted = false;
        this.toastr.tryagain();
      }
    );
  }
}
