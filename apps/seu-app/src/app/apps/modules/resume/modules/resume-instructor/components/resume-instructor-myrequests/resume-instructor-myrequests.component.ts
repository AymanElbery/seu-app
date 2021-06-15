import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorMyrequestsService } from '../../../../services/resume-instructor-myrequests';
import { ResumeUserService } from '../../../../services/resume-user';
import { ResumeInstructorReasonsComponent } from '../resume-instructor-reasons/resume-instructor-reasons.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-resume-instructor-myrequests',
  templateUrl: './resume-instructor-myrequests.component.html',
  styleUrls: ['./resume-instructor-myrequests.component.css']
})
export class ResumeInstructorMyrequestsComponent implements OnInit {

  requestsList = [];
  isLoading = false;
  userId;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: ResumeUserService,
    private myrequestsService: InstructorMyrequestsService,
    public dialog: MatDialog
  ) {
    this.userId = this.userService.user.ID;
  }

  ngOnInit() {
    this.getMyRequests();
  }

  openReasonDialog(req) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40%';
    dialogConfig.data = req;

    let dialogref = this.dialog.open(ResumeInstructorReasonsComponent, dialogConfig);
    dialogref.afterClosed().subscribe(result => {
      if(result){
        
      }
    });
  }

  getMyRequests() {
    this.isLoading = true;
    this.myrequestsService.getMyRequests(this.userId).subscribe((response) => {
      this.requestsList = response['data'];
      this.isLoading = false;
    }, err => {
      this.myrequestsService.tryagain();
      this.isLoading = false;
    });
  }

}
