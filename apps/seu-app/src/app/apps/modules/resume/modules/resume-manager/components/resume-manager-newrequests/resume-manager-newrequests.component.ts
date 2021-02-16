import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerNewRequestsService } from '../../../../services/resume-manager-newrequests';
import { ResumeUserService } from '../../../../services/resume-user';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ResumeManagerChangeStatusComponent } from './../resume-manager-change-status/resume-manager-change-status.component';

@Component({
  selector: 'app-resume-manager-newrequests',
  templateUrl: './resume-manager-newrequests.component.html',
  styleUrls: ['./resume-manager-newrequests.component.css']
})
export class ResumeManagerNewRequestsComponent implements OnInit {

  requestsList = [];
  isLoading = false;
  userId;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: ResumeUserService,
    private newrequestsService: ManagerNewRequestsService,
    public dialog: MatDialog
  ) {
    this.userId = this.userService.user.ID;
  }

  ngOnInit() {
    this.getNewRequests();
  }

  gotToDetails(req){
    this.router.navigate(['../request-details/'+ req.REQ_ID], { relativeTo: this.route })
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
        this.getNewRequests();
      }
    });
  }

  getNewRequests() {
    this.isLoading = true;
    this.newrequestsService.getNewRequests().subscribe((response) => {
      this.requestsList = response['data'];
      this.isLoading = false;
    }, err => {
      this.newrequestsService.tryagain();
      this.isLoading = false;
    });
  }

}
