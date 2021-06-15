import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminNewRequestsService } from '../../../../services/resume-admin-newrequests';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface DialogData {
  REQ_ID: number
}

@Component({
  selector: 'app-resume-instructor-reasons',
  templateUrl: './resume-instructor-reasons.component.html',
  styleUrls: ['./resume-instructor-reasons.component.css']
})

export class ResumeInstructorReasonsComponent implements OnInit {

  isLoading = false;

  constructor(
  private fb: FormBuilder, 
  private requestsService: AdminNewRequestsService,
  private router: Router,
  public dialogRef: MatDialogRef<ResumeInstructorReasonsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    
  }

  ngOnInit() {
    
  }  

  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

}
