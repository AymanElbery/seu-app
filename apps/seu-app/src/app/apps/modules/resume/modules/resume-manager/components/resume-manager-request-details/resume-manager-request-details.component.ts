import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerNewRequestsService } from '../../../../services/resume-manager-newrequests';
import { ResumeUserService } from '../../../../services/resume-user';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { ResumeManagerChangeStatusComponent } from './../resume-manager-change-status/resume-manager-change-status.component';


@Component({
  selector: 'app-resume-manager-request-details',
  templateUrl: './resume-manager-request-details.component.html',
  styleUrls: ['./resume-manager-request-details.component.css']
})
export class ResumeManagerRequestDetailsComponent implements OnInit {

  isLoading = false;
  submitted = false;
  request;
  lang;
  exist = false;

  constructor(
    private router: Router,
    private toastr: AppToasterService,
    private route: ActivatedRoute,
    private userService: ResumeUserService,
    private managerNewRequests: ManagerNewRequestsService,
    private translate: TranslateService,
    public dialog: MatDialog
  ) {
    let req_id = this.route.snapshot.params['id'];
    this.getRequest(req_id);
  }

  ngOnInit() {
    
  }

  backToRequests(){
    this.router.navigate(['../../new-requests'], { relativeTo: this.route })
  }

  openAddAdminDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = req;

    let dialogref = this.dialog.open(ResumeManagerChangeStatusComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        this.getRequest(this.route.snapshot.params['id']);
      }
    });
  }

  getRequest(req_id){
    this.isLoading = true;
    this.managerNewRequests.getRequest(req_id).subscribe((response) => {
      this.request = response['data'];
      this.lang = this.request.LANG;
      this.isLoading = false;
    }, err => {
      this.managerNewRequests.tryagain();
      this.isLoading = false;
    });
  }

}
