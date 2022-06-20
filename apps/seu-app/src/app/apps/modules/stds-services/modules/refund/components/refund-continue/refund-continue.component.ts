import { Component, OnInit, Inject, Directive, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { RefundService } from '../../../../services/refund.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ValidateIBAN } from '../../../shared/iban.validator';
import { ValidateIBANBank } from '../../../shared/iban_with_bank.validator';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-refund-continue',
  templateUrl: './refund-continue.component.html',
  styleUrls: ['./refund-continue.component.css']
})

@Directive({
  selector: '[appBlockCopyPaste]'
})
export class RefundContinueComponent implements OnInit {

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }

  datePickerConfig: Partial<BsDatepickerConfig>;
  reqData;
  msgs;
  banks;
  requesting = false;
  isLoading = false;
  continous_request_form: FormGroup;
  message = '';
  submitted = false;
  is_yours_bank = 2;
  filename_handle = false; 
  filename = ''; 
  file ;
  FEE_REFUND_REQ_ID;
  constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<RefundContinueComponent>,
        private toastr: AppToasterService, 
        private service: RefundService,
        private fb: FormBuilder,
        private translate: TranslateService
    ) { 
      this.FEE_REFUND_REQ_ID = this.data;
      this.get_banks_data();
    }

    ngOnInit() {
      this.continous_request_form = this.fb.group({
        'BANK_IS_YOURS': ['', [Validators.required]],
        'DOB': ['', [Validators.required]],
        'HOLDER_NAME': ['', [Validators.required]],
        'BANK': ['', [Validators.required]],
        'IBAN': ['', [Validators.required, ValidateIBAN]],
      },
      {
        validator: ValidateIBANBank('BANK', 'IBAN'),
      }
      );
    }

    get_banks_data(){
      this.isLoading = true;
      this.service.get_banks_data().subscribe(response => {
          this.banks = response['data']['banks'];
          this.isLoading = false;
      }, error => {
          this.service.tryagain();
          this.isLoading = false;
      });
    }

    change_radio(e){
      this.is_yours_bank = e.target.value;
      if(this.is_yours_bank == 0){
        this.continous_request_form.addControl('FULL_NAME', new FormControl('', [Validators.required]));
        this.continous_request_form.addControl('SNN', new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]));
        this.continous_request_form.addControl('PHONE', new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]));
      }
    }

    restrict_iban_length(e){
      if(e.target.value.length == 24){
        return false;
      }
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

  onSubmit() {
    this.submitted = true;
    if (this.continous_request_form.invalid) {
      return;
    }
    this.requesting = true;
    this.addRequest(this.continous_request_form);
  }

  addRequest(form: any) {
    let data = form.value;
    data.FEE_REFUND_REQ_ID = this.FEE_REFUND_REQ_ID;
    data.file = this.file;
    data.filename = this.filename;
    this.service.AddCountinousRequest(data).subscribe(res => {
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

  closeDiag() {
      this.dialogRef.close(false);
  }
}
