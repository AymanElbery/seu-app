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
  can_add_new_req_for_CHAR_and_AMAL;
  conditions = false;
  requesting = false;
  add_request_form: FormGroup;
  constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<RefundAddComponent>,
        private toastr: AppToasterService, 
        private service: RefundService,
        private fb: FormBuilder,
    ) { 
        this.cases = [
            {
                'title' : 'جمعيات البر (إعفاء فصلي)',
                'value' : 'CHAR'
            },
            {
                'title' : 'المشاركين في عمليات إعادة الأمل (إعفاء فصلي)',
                'value' : 'AMAL'
            },
            {
                'title' : 'من تم حذف جدوله او بعض المقررات المسجلة بسبب تغير التخصص او الفرع',
                'value' : 'CHBR'
            },
            {
                'title' : 'استرداد الرسوم بسبب قرار اللجنة',
                'value' : 'COMM'
            },
            {
                'title' : 'من تم حذف جدولة بسبب إغلاق الشعبة',
                'value' : 'CLOS'
            },
            {
                'title' : 'تكرار السداد بسب خلل تقني',
                'value' : 'REPE'
            },
            {
                'title' : 'الطالب المنسحب من الجامعة ولديه رصيد اضافي في سجلة المالي',
                'value' : 'WSBA'
            },
            {
                'title' : 'من تم إلغاء قبوله بعد ان تم سداد الرسوم',
                'value' : 'WABA'
            },
            {
                'title' : 'عندما يتم طي قيد الطالب من الجامعة ولديه رصيد اضافي في سجلة المالي',
                'value' : 'ADBA'
            },
            {
                'title' : 'الطالب المتخرج من الجامعة ولديه رصيد اضافي في سجلة المالي',
                'value' : 'IGBA'
            },
            {
                'title' : 'أبناء شهداء الواجب',
                'value' : 'WAJB'
            },
            {
                'title' : 'الضمان الاجتماعي',
                'value' : 'SIWV'
            },
        ];
        this.can_add_new_req_for_CHAR_and_AMAL = data;
    }

    ngOnInit() {
        this.add_request_form = this.fb.group({
            'CASE': ['', [Validators.required]]
        });
    }
  
    change_cases(value){
        console.log(value);
    }

    closeDiag() {
        this.dialogRef.close(false);
    }

    agree_conditions(){
        this.conditions = !this.conditions;
    }
}
