import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ObjectExamService } from 'src/app/academicprocs/services/object-exam.service';
import { ObjectExam } from 'src/app/shared/models/object-exam';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-add-object-exam',
  templateUrl: './add-object-exam.component.html',
  styleUrls: ['./add-object-exam.component.css']
})
export class AddObjectExamComponent implements OnInit {

    reqData: any;
    exam: ObjectExam;
    msgs: any;
    requesting = false;
    courses;
    add_request_form: FormGroup;
    fees_display = false;
    CRN;
    CRSE_TITLE;
    conditions = false;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<AddObjectExamComponent>,
        private toastr: AppToasterService, 
        private acadmicProc: ObjectExamService,
        private fb: FormBuilder
    ) {
        this.courses = data;
    }

    ngOnInit() {
        this.add_request_form = this.fb.group({
            'CRSE_CODE': ['', [Validators.required]]
        });
    }

    change_courses(e){
        this.fees_display = true;
        this.CRN = e.CRN;
        this.CRSE_TITLE = e.CRSE_TITLE;
    }
    
    addRequest(data: any) {
        data.CRN = this.CRN;
        data.CRSE_TITLE = this.CRSE_TITLE;
        console.log(data);
        this.acadmicProc.AddRequest(data).then(res => {
        this.toastr.push((res as any).messages);
        if (res['status']) {
            this.acadmicProc.newreqs = true;
            this.dialogRef.close();
        }
        this.requesting = false;
        },
        err => {
            this.toastr.tryagain();
            this.requesting = false;
        });
    }

    onSubmit() {
        if (this.requesting) {
            return false;
        }
        this.requesting = true;
        this.addRequest(this.add_request_form.value);
    }

    agree_conditions(){
        this.conditions = !this.conditions;
    }
   

    closeDiag() {
        this.dialogRef.close();
    }
}