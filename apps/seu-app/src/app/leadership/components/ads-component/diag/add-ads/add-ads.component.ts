import { Component, OnInit, Inject } from '@angular/core';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WithdrawFromUnivService } from 'src/app/academicprocs/services/withdraw-from-univ.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { LeadershipService } from '../../../../services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss'],
  providers: [DatePipe]
})
export class AddAdsComponent implements OnInit {

  isLoading = false;
  submitted = false;
  form: FormGroup;
  ad;
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddAdsComponent>,
    private fb: FormBuilder,
    private leadershipService: LeadershipService,
    private toastr: AppToasterService,
    private datePipe: DatePipe,
    private translate:TranslateService
  ) {
    this.datePickerConfig = {dateInputFormat: 'DD-MM-YYYY',showWeekNumbers:false};
    this.form = this.fb.group({
      'JOB_ID': ['', [Validators.required]],
      'ADS_START_DATE': ['', [Validators.required]],
      'ADS_END_DATE': ['', [Validators.required]],
      'ADS_IS_ACTIVE': [0]
    });
    this.ad = data['ad'];
    if (this.ad['ADS_PK']) {
      this.ad.ADS_START_DATE = this.datePipe.transform(this.ad.ADS_START_DATE, 'dd/MM/yyyy');
      this.ad.ADS_END_DATE = this.datePipe.transform(this.ad.ADS_END_DATE, 'dd/MM/yyyy');
      this.form.reset(this.ad);
    }
  }
  jobs = [];
  ngOnInit() {
    this.leadershipService.list_jobs().subscribe(
      (response: any) => {
        if (response['status']) {
          this.jobs = response.data;
        }
      }
    );
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    let data = this.form.value;
    if (this.ad && this.ad['ADS_PK']) {
      data['ADS_PK'] = this.ad['ADS_PK'];
    }
    this.submitted = true;
    this.leadershipService.save_ads(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response.status) {
          this.leadershipService.notifySucc(response['res_code']);
          this.closeDiag();
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

  closeDiag() {
    this.dialogRef.close(true);
  }

}
