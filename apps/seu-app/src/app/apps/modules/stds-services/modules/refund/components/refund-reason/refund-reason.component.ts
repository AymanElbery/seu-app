import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { RefundService } from '../../../../services/refund.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-refund-reason',
  templateUrl: './refund-reason.component.html',
  styleUrls: ['./refund-reason.component.css']
})
export class RefundReasonComponent implements OnInit {

  reqData;
  msgs;
  reason;
  requesting = false;
  isLoading = false;
  message = '';
  constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<RefundReasonComponent>,
        private toastr: AppToasterService, 
        private service: RefundService,
    ) { 
      this.reason = data;
    }

    ngOnInit() {
        
    }

    closeDiag() {
        this.dialogRef.close(false);
    }
}
