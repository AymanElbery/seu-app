import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminNewRequestsService } from '../../../../services/resume-admin-newrequests';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface DialogData {
  REQ_ID: number,
  CONTENT_REASON: string,
  MANAGER_REASON: string,
}

@Component({
  selector: 'app-resume-instructor-reasons',
  templateUrl: './resume-instructor-reasons.component.html',
  styleUrls: ['./resume-instructor-reasons.component.css']
})

export class ResumeInstructorReasonsComponent implements OnInit {

  isLoading = false;
  url;
  constructor(
  private fb: FormBuilder, 
  private requestsService: AdminNewRequestsService,
  private router: Router,
  private route: ActivatedRoute,
  public dialogRef: MatDialogRef<ResumeInstructorReasonsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.url = this.router.url;
    console.log(this.url);
  }

  ngOnInit() {
    
  }  

  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

}
