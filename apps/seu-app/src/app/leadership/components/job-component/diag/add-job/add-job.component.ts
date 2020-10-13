import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WithdrawFromUnivService } from 'src/app/academicprocs/services/withdraw-from-univ.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { LeadershipService } from '../../../../services/leadership.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as CustomEditor from '@ckeditor/ckeditor5-build-custom/build/ckeditor';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  isLoading = false;
  submitted = false;
  AddJobForm: FormGroup;
  public EditorAR = CustomEditor;
  toolbarConfig = {
    toolbar: ['heading', '|', 'bold', 'italic', 'Indent', '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify', '|', 'highlight', 'fontFamily', 'fontSize', 'horizontalLine', , '|', 'insertTable', '|', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo'],
  };

  id;
  job;
  message;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddJobComponent>,
    private fb: FormBuilder,
    private leadershipService: LeadershipService,
    private toastr: AppToasterService,
    private router: Router,
    private translate: TranslateService,
    private route: ActivatedRoute,
  ) {
    this.AddJobForm = this.fb.group({
      'JOB_TITLE': ['', [Validators.required]],
      'JOB_DESC': [],
      'JOB_CAT_CODE': ['', [Validators.required]],
      'JOB_DEPT_CODE': ['', [Validators.required]],
      'JOB_AGENCY_CODE': ['', [Validators.required]]
    });
    this.AddJobForm.controls['JOB_CAT_CODE'].valueChanges.subscribe(() => {
      this.AddJobForm.controls['JOB_DEPT_CODE'].setValue("");
      this.updatedeptslist();
    })
    if (this.data && this.data.id) {
      this.id = this.data.id
      this.getJobById();
    }
  }
  updatedeptslist(){
    this.job_depts_list = ((this.AddJobForm.controls['JOB_CAT_CODE'].value == "DEPARTMENT") ? this.depts_list : this.colleges_deans);
  }
  job_depts_list = [];
  cats = [];
  colleges_deans = [];
  depts_list = [];
  agences = [];
  ngOnInit() {
    this.leadershipService.lookups();
    this.leadershipService.colleges_deans_list().subscribe(list => {
      this.colleges_deans = list;
      this.updatedeptslist();
    });
    this.leadershipService.depts_list().subscribe(list => {
      this.depts_list = list;
      this.updatedeptslist();
    });
    this.leadershipService.jobcats_list().subscribe(list => {
      this.cats = list;
    });
    this.leadershipService.agences_list().subscribe(list => {
      this.agences = list;
    });
  }

  getJobById() {
    this.isLoading = true;
    this.leadershipService.get_job_by_id(this.id).subscribe(
      (response: any) => {
        if (response) {
          this.job = response.data;
          this.AddJobForm.reset(this.job);
          this.isLoading = false;
        }
      },
      error => {
      }
    )
  }

  onSubmit() {
    if (this.AddJobForm.invalid) {
      return;
    }
    let data = this.AddJobForm.value;
    if (this.job) {
      data.JOB_PK = this.job.JOB_PK;
      this.message = "leadership.job.success_updated";
    } else {
      data.JOB_PK = 0;
      this.message = "leadership.job.success_added";
    }
    this.submitted = true;
    this.leadershipService.add_update_job(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant(this.message)
            }]);
          } else {
            this.toastr.push([{
              'type': 'error',
              'body': this.translate.instant(this.message)
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
    this.dialogRef.close(true);
  }

}
