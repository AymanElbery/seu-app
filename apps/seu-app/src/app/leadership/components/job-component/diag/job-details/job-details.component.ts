import { Component, OnInit, Inject } from '@angular/core';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { LeadershipService } from '../../../../services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  details;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<JobDetailsComponent>,
    private fb: FormBuilder,
    private leadershipService: LeadershipService,
    private toastr: AppToasterService,
    private router: Router,
    private translate: TranslateService,
    private route: ActivatedRoute,
  ) {
    this.details = this.data.details;
  }

  ngOnInit() {
    
  }

  closeDiag() {
    this.dialogRef.close();
  }

}
