import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../../services/translation-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { AdminUsersService } from '../../../../services/translation-admin-users';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

export interface DialogData {
  reqId: number
}

@Component({
  selector: 'app-translation-assign-review-form',
  templateUrl: './translation-assign-review-form.component.html',
  styleUrls: ['./translation-assign-review-form.component.css']
})

export class TranslationAssignReviewFormComponent implements OnInit {

  isLoading = false;
  assignReviewForm: FormGroup;
  submitted= false;
  reqId;
  empList;

  constructor(
  private fb: FormBuilder, 
  private router: Router,
  private userService: AdminUsersService,
  private requestsService: ClientAdminRequestsService,
  public dialogRef: MatDialogRef<TranslationAssignReviewFormComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.reqId = data['req']['REQ_ID'];
    this.assignReviewForm = this.fb.group({
      EMP_ID: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    this.getEmpList();
  }  

  getEmpList(){
    this.isLoading = true;
    this.userService.getUsers().subscribe((response) => {
      this.empList = response['data'];
      this.isLoading = false;
    }, err => {
      this.userService.tryagain();
      this.isLoading = false;
    });
  }

  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

  onSubmit(){
    this.submitted = true;
    if (this.assignReviewForm.invalid) {
        return;
    }
    let data = this.assignReviewForm.value;
    data.REQ_ID = this.reqId;
    this.requestsService.assignReview(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.requestsService.tryagain();
    });
  }
}
