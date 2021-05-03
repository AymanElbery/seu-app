import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ReqAssistantService } from '../../services/req-assistant.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-reg-assistant-form',
    templateUrl: './ticket-add.component.html',
    styleUrls: ['./ticket-add.component.css']
})
export class RegistrationAssistantFormComponent implements OnInit {

    isLoading = false;
    form: FormGroup;
    submitted = false;

    colleges = [];
    courses = [];
    messages = [];
    crns = [];
    lectures= [];
    constructor(@Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder,
        public dialogRef: MatDialogRef<RegistrationAssistantFormComponent>, private translate: TranslateService,
        private toastr: AppToasterService, private service: ReqAssistantService) { }

    ngOnInit() {
        this.form = this.fb.group({
            college: ['', [Validators.required]],
            crse: ['', [Validators.required]],
            crn: [''],
            message: ['', [Validators.required]],
            comments: ['', [Validators.required]]
        });
        this.service.loadlookups();
        this.service.colleges_list().subscribe(list => {
            this.colleges = list;
        });
        this.form.controls['college'].valueChanges.subscribe(() => {
            this.form.controls['crse'].setValue("");
            if (this.form.controls['college'].value) {
                let coll_code = this.form.controls['college'].value.split("-")[0].trim();
                this.service.courses_list(coll_code).subscribe(list => {
                    this.courses = list;
                });
            } else {
                this.courses = [];
            }
        });
        this.form.controls['crse'].valueChanges.subscribe(() => {
            this.form.controls['crn'].setValue("");
            if (this.form.controls['crse'].value) {
                let crsecode = this.form.controls['crse'].value.split(" ");
                this.service.crns_list(crsecode[0] + crsecode[1]).subscribe(list => {
                    this.crns = list;
                });
            } else {
                this.crns = [];
            }

        });

        this.service.messages_list().subscribe(list => {
            this.messages = list;
        });
        this.service.lectures_list().subscribe(list => {
            this.lectures = list;
        });

    }


    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        let data = this.form.value;
        this.submitted = true;
        this.isLoading = true;
        this.service.AddRequest(data).subscribe(
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
                this.submitted = false;
            },
            error => {
                this.toastr.tryagain();
                this.isLoading = false;
                this.submitted = false;
            }
        );
    }

    closeDiag(refresh = false) {
        this.dialogRef.close({ refresh });
    }

}
