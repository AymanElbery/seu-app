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

@Component({
  selector: 'app-add-ads',
  templateUrl: './add-ads.component.html',
  styleUrls: ['./add-ads.component.scss']
})
export class AddAdsComponent implements OnInit {

  isLoading = false;
  submitted = false;
  AddAdsForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddAdsComponent>,
    private fb: FormBuilder,
    private leadershipService: LeadershipService,
    private toastr: AppToasterService,
    private router: Router,
    private translate: TranslateService,
    private route: ActivatedRoute,
  ) { 
    this.AddAdsForm = this.fb.group({
      'JOB_TITLE': ['', [Validators.required]],
      'JOB_DESC': ['', [Validators.required]]
    });
  }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.AddAdsForm.invalid) {
      return;
    }
    let data = this.AddAdsForm.value;
    this.submitted = true;
    this.leadershipService.add_ads(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.router.navigate(['/ads'], { relativeTo: this.route });
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("leadership.ad.success_added")
            }]);
          } else {
            this.toastr.push([{
              'type': 'error',
              'body': this.translate.instant("leadership.ad.error_added")
            }]);
          }
          this.closeDiag();
          this.isLoading = false;
          this.submitted = false;
        }
      },
      error => {
        this.isLoading = false;
        this.submitted = false;
      }
    );
  }

  closeDiag() {
    this.dialogRef.close();
  }

}
