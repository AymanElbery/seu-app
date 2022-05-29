import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { RefundService } from '../../../../services/refund.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

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
  filename_handle = false; 
  filename = ''; 
  message = '';
  file ;
  constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<RefundAddComponent>,
        private toastr: AppToasterService, 
        private service: RefundService,
        private fb: FormBuilder,
        private translate: TranslateService
    ) { 
        this.get_fee_refund_cases();
        this.can_add_new_req_for_CHAR_and_AMAL = data;
    }

    ngOnInit() {
        this.add_request_form = this.fb.group({
            'CASE': ['', [Validators.required]]
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
                    this.set_message('service_pay_message');
                } else if (this.std_balance > 0) {
                    this.reset_message();
                    this.set_message('std_not_pay_message');
                }
            }else{
                this.reset_message();
                this.set_message('service_finish_message');
            }
        }else{
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
        this.addRequest(this.add_request_form);
    }

    addRequest(form: any) {
        let data = form.value;
        data.file = this.file;
        data.filename = this.filename;
        this.service.AddRequest(data).subscribe(res => {
            if (res['status']) {
                this.dialogRef.close(true);
            }
            this.requesting = false;
        },
        err => {
            this.toastr.tryagain();
            this.requesting = false;
        });
    }

    validateFile(name: String) {
        var ext = name.substring(name.lastIndexOf('.') + 1);
        if (['pdf'].includes(ext.toLowerCase())) {
            return true;
        }
        return false;
    }

    handleInputChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (!file) {
          return false;
        }
        if (!this.validateFile(file.name)) {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("refund.wrong_file") }]);
          return false;
        }
        const pattern = /image-*/;
        const reader = new FileReader();
        this.filename = file.name;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }

      _handleReaderLoaded(e) {
        const reader = e.target;
        this.filename_handle = true;
        this.file = reader.result;
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
