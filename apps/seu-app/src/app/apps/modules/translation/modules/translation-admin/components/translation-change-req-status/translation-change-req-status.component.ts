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
  req: any
}

@Component({
  selector: 'app-translation-change-req-status',
  templateUrl: './translation-change-req-status.component.html',
  styleUrls: ['./translation-change-req-status.component.css']
})

export class TranslationChangeReqStatusComponent implements OnInit {

  isLoading = false;
  changeStatusForm: FormGroup;
  submitted = false;
  req;
  reqId;
  empList;
  paymentDetails = false;
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: AdminUsersService,
    private requestsService: ClientAdminRequestsService,
    public dialogRef: MatDialogRef<TranslationChangeReqStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.req = data;
    this.reqId = data['REQ_ID'];
    this.paymentDetails = (this.req.CLIENT_WORK_PLACE_TYPE == "internal") ? false : true;
    this.changeStatusForm = this.fb.group({
      ESTIMATED_DATE: ["", [Validators.required]],
      PAYMENT_DATE: [""],
      EMP_ID: ["", [Validators.required]],
      PAYMENT: [this.paymentDetails ? "payment" : "not_payment"],
      FILE_WORDS_COUNT: ["", [Validators.required]],
      AMOUNT: [""],
    });
    this.checkValidation();
    this.datePickerConfig = { dateInputFormat: 'DD-MM-YYYY', showWeekNumbers: false };
  }

  ngOnInit() {
    this.getEmpList();
  }

  checkValidation() {
    if (this.changeStatusForm['controls']['PAYMENT'].value == 'payment') {
      this.changeStatusForm['controls']['PAYMENT_DATE'].setValidators([Validators.required]);
      this.changeStatusForm['controls']['AMOUNT'].setValidators([Validators.required]);
    } else {
      this.changeStatusForm['controls']['PAYMENT_DATE'].setValidators(null);
      this.changeStatusForm['controls']['AMOUNT'].setValidators(null);
    }
  }

  getEmpList() {
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

  paymentTypeChange(val) {
    if (val == 'payment') {
      this.paymentDetails = true;
    } else {
      this.paymentDetails = false;
    }
    this.checkValidation();
  }

  onSubmit() {
    this.submitted = true;
    if (this.changeStatusForm.invalid) {
      return;
    }
    let data = this.changeStatusForm.value;

    data.REQ_ID = this.reqId;
    data.CLIENT_ID = this.req['CLIENT_ID'];
    if (data.PAYMENT == 'payment') {
      data.STATUS = 'payment';
    } else {
      data.STATUS = 'processing';
      delete data.AMOUNT;
      delete data.PAYMENT_DATE;
    }
    delete data.PAYMENT;
    this.requestsService.changeStatus(data).subscribe((response) => {
      console.log(response);
      this.closeDiag(true);
    }, err => {
      console.log(err);
      this.requestsService.tryagain();
    });
  }
}
