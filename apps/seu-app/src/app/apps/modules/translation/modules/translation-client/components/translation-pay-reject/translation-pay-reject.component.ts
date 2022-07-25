import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ClientMyrequestsService } from './../../../../services/translation-client-myrequests';

@Component({
  selector: 'app-translation-pay-reject',
  templateUrl: './translation-pay-reject.component.html',
  styleUrls: ['./translation-pay-reject.component.css']
})
export class TranslationPayRejectComponent implements OnInit {
    tid = '';
    addRejectPayForm: FormGroup;
    submitted = false;
    reason_input = false;

    constructor(
        private route: ActivatedRoute, 
        private fb: FormBuilder,
        private service: ClientMyrequestsService,
        @Inject(MAT_DIALOG_DATA) public data,
        private toastr: AppToasterService,
        private translate: TranslateService,
        private router: Router,
        public dialogRef: MatDialogRef<TranslationPayRejectComponent>,
    ) {
      this.addRejectPayForm = this.fb.group({
        REJECT_PAY_REASON: ["", [Validators.required]]
      });
    }

    ngOnInit() {
        
    }

    change_reason(e){
      if(e.target.value == 'other'){
        this.reason_input = true;
        this.addRejectPayForm.addControl('REJECT_PAY_REASON_OTHER', new FormControl('', [Validators.required]));
      }
    }

    onSubmit() {
      this.submitted = true;
      if (this.addRejectPayForm.invalid) {
        return;
      }
      let data = this.addRejectPayForm.value;
      data.REQ_ID = this.data.REQ_ID;
      this.service.add_reject_pay_reason(data).subscribe((response) => {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('new_request_page.request_saved') }]);
        this.submitted = false;
        this.closeDiag(true);
      }, err => {
        this.service.tryagain();
        this.submitted = false;
      });
    }

    closeDiag(refresh = false) {
      this.dialogRef.close(refresh);
    }
}
