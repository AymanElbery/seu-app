import {Component, OnInit} from '@angular/core';
import {LeadershipService} from 'src/app/leadership/services/leadership.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-ads-dean-recommendations-edit',
  templateUrl: './ads-dean-recommendations-edit.component.html',
  styleUrls: ['./ads-dean-recommendations-edit.component.css']
})
export class AdsDeanRecommendationsEditComponent implements OnInit {

  isLoading = false;
  isDeleting = false;
  currentAd: number;

  form: FormGroup;
  noEmp = false;
  submitted = false;
  showResult = false;
  showMessage = false;

  empList = [];

  constructor(
    private fb: FormBuilder,
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (!this.leadershipService.currentAddApps) {
      this.back();
    }
    this.currentAd = this.leadershipService.currentAddApps;

    this.form = this.fb.group({
      EMPLOYEE_ID: [''],
      EMAIL: ['']
    });
  }

  ngOnInit() {
    this.loadRecommendations();
  }

  back() {
    this.router.navigate(['../../ads-recommendations'], {relativeTo: this.route});
  }

  save(key) {
    const data = this.form.value;
    const post = {};
    post[key] = data[key];

    if (!post[key]) {
      return;
    }

    post['AD_ID'] = this.currentAd['ADS_PK'];

    this.submitted = true;
    this.leadershipService.save_dean_recommendation(post).subscribe((response => {
      if (!response.status) {
        this.showMessage = false;
        this.noEmp = true;
      } else {
        this.empList.push({
          EMPLOYEE_ID: response.data.recommendation.EMPLOYEE_ID,
          FULL_NAME: response.data.recommendation.FULL_NAME,
          SEU_EMAIL: response.data.recommendation.SEU_EMAIL,
        });
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


  delete(empId) {
    this.isDeleting = true;
    this.leadershipService.delete_dean_recommendation(this.currentAd['ADS_PK'], empId).subscribe((response => {
      this.isDeleting = false;
      this.loadRecommendations();
    }));
  }

  loadRecommendations() {
    this.isLoading = true;
    this.leadershipService.get_dean_recommendations(this.currentAd['ADS_PK']).subscribe((response => {
      this.empList = response.data.employees;
      this.isLoading = false;
    }));
  }

}
