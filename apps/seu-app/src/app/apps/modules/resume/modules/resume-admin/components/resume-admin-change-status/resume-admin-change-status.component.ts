import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminNewRequestsService } from '../../../../services/resume-admin-newrequests';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';


export interface DialogData {
  REQ_ID: number
}

@Component({
  selector: 'app-resume-admin-change-status',
  templateUrl: './resume-admin-change-status.component.html',
  styleUrls: ['./resume-admin-change-status.component.css']
})

export class ResumeAdminChangeStatusComponent implements OnInit {

  isLoading = false;
  changeStatusForm: FormGroup;
  submitted= false;
  displayReason= false;
  REQ_ID;

  constructor(
  private fb: FormBuilder, 
  private requestsService: AdminNewRequestsService,
  private router: Router,
  public dialogRef: MatDialogRef<ResumeAdminChangeStatusComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.changeStatusForm = this.fb.group({
      CONTENT_STATUS: ["", [Validators.required]],
      CONTENT_REASON: [""]
    });
    this.REQ_ID = data.REQ_ID;
  }

  ngOnInit() {
    
  }  
  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

  onOptionsSelected(value){
    if (value == "0") {
      this.displayReason = true;
      this.changeStatusForm.controls['CONTENT_REASON'].setValidators([Validators.required]);
    }else{
      this.displayReason = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    if (this.changeStatusForm.invalid) {
        return;
    }
    let data = this.changeStatusForm.value;
    data.REQ_ID = this.REQ_ID;
    this.requestsService.changeStatus(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.requestsService.tryagain();
    });
  }
}
