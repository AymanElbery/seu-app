import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ReqAssistantService } from '../../services/req-assistant.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-reg-assistant-form-crn',
    templateUrl: './crn-add.component.html',
    styleUrls: ['./crn-add.component.css']
})
export class RegistrationAssistantFormCrnComponent implements OnInit {

    isLoading = false;
    formCrn: FormGroup;
    submittedCrn = false;

    courses = [];
    crns = [];
    days = [];
    times = [];

    constructor(
    @Inject(MAT_DIALOG_DATA) public data, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistrationAssistantFormCrnComponent>, 
    private translate: TranslateService,
    private toastr: AppToasterService, 
    private service: ReqAssistantService) {
        this.formCrn = this.fb.group({
            crse: ['', [Validators.required]],
            day: [''],
            time: [''],
            comments: ['']
        });
    }

    ngOnInit() {
        this.service.loadlookups();
        this.service.courses_list().subscribe(list => {
            this.courses = list;
        });
        this.service.days_list().subscribe(list => {
            this.days = list;
        });
        this.service.times_list().subscribe(list => {
            this.times = list;
        });
    }
    
    onSubmitCrn() {
        if (this.formCrn.invalid) {
            return;
        }
        let data = this.formCrn.value;
        this.submittedCrn = true;
        this.isLoading = true;
        this.service.AddRequestCrn(data).subscribe(
            (response: any) => {
                if (response.status) {
                    this.toastr.push([{
                        'type': 'success',
                        'body': this.translate.instant('messages.request_added')
                    }]);
                    this.closeDiag(true);
                } else {
                    this.toastr.push(response['messages']);
                }
                this.isLoading = false;
                this.submittedCrn = false;
            },
            error => {
                this.toastr.tryagain();
                this.isLoading = false;
                this.submittedCrn = false;
            }
        );
    }

    closeDiag(refresh = false) {
        this.dialogRef.close({ refresh });
    }

}
