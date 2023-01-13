import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerNewRequestsService } from '../../../../services/resume-manager-newrequests';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';


export interface DialogData {
  REQ_ID: number
}

@Component({
  selector: 'app-resume-manager-change-status',
  templateUrl: './resume-manager-change-status.component.html',
  styleUrls: ['./resume-manager-change-status.component.css']
})

export class ResumeManagerChangeStatusComponent implements OnInit {

  isLoading = false;
  changeStatusForm: FormGroup;
  submitted= false;
  displayReason= false;
  REQ_ID;

  constructor(
  private fb: FormBuilder, 
  private requestsService: ManagerNewRequestsService,
  private router: Router,
  public dialogRef: MatDialogRef<ResumeManagerChangeStatusComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.changeStatusForm = this.fb.group({
      MANAGER_STATUS: ["", [Validators.required]],
      MANAGER_REASON: [""],
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
      this.changeStatusForm.controls['MANAGER_REASON'].setValidators([Validators.required]);
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
