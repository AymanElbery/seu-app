import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { RefundService } from '../../../../services/refund.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-refund-add',
  templateUrl: './refund-add.component.html',
  styleUrls: ['./refund-add.component.css']
})
export class RefundAddComponent implements OnInit {

  printAR;
  reqData;
  msgs;
  cases;
  std_balance = 0;
  balance = 0;
  can_add_new_req_for_CHAR_and_AMAL;
  conditions = false;
  requesting = false;
  isLoading = false;
  add_request_form: FormGroup;
  service_finish_message = false; 
  std_not_pay_message = false; 
  std_have_no_balance_message = false; 
  std_have_balance = false; 
  message = '';
  constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<RefundAddComponent>,
        private toastr: AppToasterService, 
        private service: RefundService,
        private fb: FormBuilder,
    ) { 
        this.get_fee_refund_cases();
        this.can_add_new_req_for_CHAR_and_AMAL = data;
    }

    ngOnInit() {
        this.add_request_form = this.fb.group({
            'CASE': ['', [Validators.required]],
            'STD_BALANCE': ['', [Validators.required]],
        });
    }

    get_fee_refund_cases(){
        this.isLoading = true;
        this.service.get_fee_refund_cases().subscribe(response => {
            this.cases = response['data']['cases'];
            this.std_balance = response['data']['std_balance'];
            this.isLoading = false;
        }, error => {
            this.service.tryagain();
            this.isLoading = false;
        });
    }
  
    change_cases(choice){
        if(choice.CODE == 'CHAR' || choice.CODE == 'AMAL'){
            if(choice.IS_OPEN == 1){
                this.reset_message();
                if (this.std_balance == 0) {
                    this.reset_message();
                    
                } else if (this.std_balance > 0) {
                    this.reset_message();
                    this.set_message('std_not_pay_message');
                }
            }else{
                this.reset_message();
                this.set_message('service_finish_message');
            }
        }else{
            this.std_balance = -500;
            if (this.std_balance < 0) {
                this.reset_message();
                this.set_message('std_have_balance');
                this.balance = -1 * this.std_balance;
            } else {
                this.reset_message();
                this.set_message('std_have_no_balance_message');
            }
        }
    }

    onSubmit(form: NgForm) {
        if (this.requesting) {
            return false;
        }
        this.requesting = true;
        if (this.reEnroll.has_proof.toString() == "true") {
        this.reEnroll.has_proof = "1"
        }
        else {
        this.reEnroll.has_proof = "0"
        }
        this.addRequest(this.reEnroll);
    }

    set_message(key){
        this.message = key;
    }

    reset_message(){
        this.message = '';
    }

    closeDiag() {
        this.dialogRef.close(false);
    }

    agree_conditions(){
        this.conditions = !this.conditions;
    }
}
