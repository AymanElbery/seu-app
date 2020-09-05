import { Component, OnInit, ViewEncapsulation, OnDestroy, ɵConsole } from '@angular/core';
import { UserService } from '../../../account/services/user.service';
import { LeadershipService } from '../../services/leadership.service';

import { HttpRequestService } from '../../../shared/services/http-request.service';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from "@angular/material/core";
import { AddJobComponent } from "./diag/add-job/add-job.component";
import { JobDetailsComponent } from "./diag/job-details/job-details.component";

@Component({
  selector: 'app-job',
  styleUrls: ['./job.component.css'],
  templateUrl: './job.component.html'
})
export class JobComponent{
  
  jobs;
  isLoading = false;
  constructor(
    public userService: UserService, 
    private leadershipService: LeadershipService, 
    private http: HttpClient, 
    private reqservice: HttpRequestService, 
    private router: Router, 
    private route: ActivatedRoute,
    private toastr: AppToasterService,
    public translate: TranslateService,
    public dialog: MatDialog
  ) {
    this.getAllJobs();
  }  

  getAllJobs() {
    this.isLoading = true;
    this.leadershipService.list_jobs().subscribe(
      (response: any) => {
        if (response) {
          this.jobs = response.data;
          this.isLoading = false;
        }
      },
      error => {
      }
    )
  }

  delete(id) {
    if (confirm(this.translate.instant('general.delete_confirm'))) {
      this.isLoading = true;
      this.leadershipService.delete_job(id).subscribe(
        (response: any) => {
          if (response) {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant("leadership.job.success_deleted")
            }]);
            this.getAllJobs();
          }
        },
        error => {
        }
      )
    }
  }

  openDialoge(id = 0) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    if (id != 0) {
      dialogConfig.data = {
        id : id
      };
    }

    let dialogref = this.dialog.open(AddJobComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
        this.getAllJobs();
    });
  }

  update(id){
    this.openDialoge(id)
  }

  showDetails(details) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '50%';
    dialogConfig.data = {
      details : details
    };

    let dialogref = this.dialog.open(JobDetailsComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      
    });
  }
}