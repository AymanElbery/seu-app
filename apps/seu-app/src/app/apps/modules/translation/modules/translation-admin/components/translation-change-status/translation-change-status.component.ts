import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminUsersService } from '../../../../services/translation-admin-users';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

export interface DialogData {
  req: any
}

@Component({
  selector: 'app-translation-change-status',
  templateUrl: './translation-change-status.component.html',
  styleUrls: ['./translation-change-status.component.css']
})

export class TranslationChangeStatusComponent implements OnInit {

  isLoading = false;
  changeStatusForm: FormGroup;
  submitted= false;
  req;
  reqId;
  empList;
  paymentDetails = false;
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(
  private fb: FormBuilder, 
  private userService: AdminUsersService,
  private requestsService: ClientAdminRequestsService,
  public dialogRef: MatDialogRef<TranslationChangeStatusComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.req = data;
    this.reqId = data['REQ_ID'];
    this.changeStatusForm = this.fb.group({
      ESTIMATED_DATE: [""],
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
    if (this.changeStatusForm.invalid) {
        return;
    }
    let data = this.changeStatusForm.value;

    data.REQ_ID = this.reqId;
    this.requestsService.changeStatus(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.requestsService.tryagain();
    });
  }
}
