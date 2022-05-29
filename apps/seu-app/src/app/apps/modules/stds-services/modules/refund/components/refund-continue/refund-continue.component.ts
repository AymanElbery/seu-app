import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { RefundService } from '../../../../services/refund.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-refund-continue',
  templateUrl: './refund-continue.component.html',
  styleUrls: ['./refund-continue.component.css']
})
export class RefundContinueComponent implements OnInit {

  reqData;
  msgs;
  requesting = false;
  isLoading = false;
  continue_request_form: FormGroup;
  message = '';
  constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<RefundContinueComponent>,
        private toastr: AppToasterService, 
        private service: RefundService,
        private fb: FormBuilder,
    ) { 
    }

    ngOnInit() {
        
    }

    closeDiag() {
        this.dialogRef.close(false);
    }
}
