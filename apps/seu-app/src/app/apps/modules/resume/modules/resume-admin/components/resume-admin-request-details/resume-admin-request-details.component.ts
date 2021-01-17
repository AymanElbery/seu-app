import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminNewRequestsService } from '../../../../services/resume-admin-newrequests';
import { ResumeUserService } from '../../../../services/resume-user';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { ResumeAdminChangeStatusComponent } from './../resume-admin-change-status/resume-admin-change-status.component';

@Component({
  selector: 'app-resume-admin-request-details',
  templateUrl: './resume-admin-request-details.component.html',
  styleUrls: ['./resume-admin-request-details.component.css']
})
export class ResumeAdminRequestDetailsComponent implements OnInit {

  isLoading = false;
  submitted = false;
  request;
  lang;

  constructor(
    private router: Router,
    private toastr: AppToasterService,
    private route: ActivatedRoute,
    private userService: ResumeUserService,
    private adminNewRequests: AdminNewRequestsService,
    private translate: TranslateService,
    public dialog: MatDialog
  ) {
    let req_id = this.route.snapshot.params['id'];
    this.getRequest(req_id);
  }

  ngOnInit() {
    
  }

  openAddAdminDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = req;

    let dialogref = this.dialog.open(ResumeAdminChangeStatusComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.getRequest(this.route.snapshot.params['id']);
      }
    });
  }

  backToRequests(){
    this.router.navigate(['../../new-requests'], { relativeTo: this.route })
  }

  getRequest(req_id){
    this.isLoading = true;
    this.adminNewRequests.getRequest(req_id).subscribe((response) => {
      this.request = response['data'];
      this.lang = this.request.LANG;
      this.isLoading = false;
    }, err => {
      this.adminNewRequests.tryagain();
      this.isLoading = false;
    });
  }

}
