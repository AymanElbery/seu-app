import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorMyrequestsService } from '../../../../services/resume-instructor-myrequests';
import { ResumeUserService } from '../../../../services/resume-user';
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
