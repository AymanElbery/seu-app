import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../../services/translation-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { TranslationUserService } from '../../../../services/translation-user';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

export interface DialogData {
  reqId: number
}

@Component({
  selector: 'app-translation-change-req-status',
  templateUrl: './translation-change-req-status.component.html',
  styleUrls: ['./translation-change-req-status.component.css']
})

export class TranslationChangeReqStatusComponent implements OnInit {

  isLoading = false;
  changeStatusForm: FormGroup;
  submitted= false;
  reqId;
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(
  private fb: FormBuilder, 
  private router: Router,
  private userService: TranslationUserService,
  private requestsService: ClientAdminRequestsService,
  public dialogRef: MatDialogRef<TranslationChangeReqStatusComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.reqId = data;
    this.changeStatusForm = this.fb.group({
      ESTIMATED_DATE: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    
  }  

  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

  onSubmit(){
    this.submitted = true;
    if (this.changeStatusForm.invalid) {
        return;
    }
    let data = this.changeStatusForm.value;
    data.REQ_ID = this.reqId;
    data.STATUS = 'processing';
    this.requestsService.changeStatus(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.requestsService.tryagain();
    });
  }
}
