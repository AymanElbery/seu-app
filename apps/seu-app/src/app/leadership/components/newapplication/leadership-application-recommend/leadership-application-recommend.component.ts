import { Component, OnInit } from '@angular/core';
import { LeadershipService } from 'src/app/leadership/services/leadership.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-leadership-application-recommend',
  templateUrl: './leadership-application-recommend.component.html',
  styleUrls: ['./leadership-application-recommend.component.css']
})
export class LeadershipApplicationRecommendComponent implements OnInit {
  submitted = false;
  rec_submitted = false;
  form: FormGroup;
  recommendForm: FormGroup;
  instructor;
  recommendedInstructor;
  ad;
  isLoading = false;
  showResult = false;
  showMessage = false;

  constructor(
    private fb: FormBuilder,
    private leadershipService: LeadershipService,
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private toastr: AppToasterService

  ) {
    if (!this.leadershipService.currentAdd) {
      this.back();
    }
    this.ad = this.leadershipService.currentAdd;
    this.instructor = this.leadershipService.instructor;
  }

  ngOnInit() {
    this.form = this.fb.group({
      'EMPLOYEE_ID': [''],
      'EMAIL': ['']
    });
    this.recommendForm = this.fb.group({
      'NOTES': ['']
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    let data = this.form.value;
    
    this.leadershipService.get_instructor(data).subscribe((response => {
      this.recommendedInstructor = response.data.instructor;
      this.isLoading = false;
      this.submitted = false;
      console.log(this.recommendedInstructor);
      if (this.recommendedInstructor != null) {
        this.showResult = true;
      }else{
        this.showMessage = true;
      }
      
    }));
  }

  back() {
    this.router.navigate(['../ads'], { relativeTo: this.route });
  }

  myapps() {
    this.router.navigate(['../../myapplications'], { relativeTo: this.route });
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  changeVal() {
    this.showMessage = false;
    this.showResult = false;
  }
}
