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
            this.service.courses_list(this.form.controls['college'].value).subscribe(list => {
                this.courses = list;
            });
            this.form.controls['crse'].setValue("");
        });
        this.form.controls['crse'].valueChanges.subscribe(() => {
            if (this.form.controls['crse'].value) {
                this.service.crns_list(this.form.controls['crse'].value).subscribe(list => {
                    this.crns = list;
                });
            } else {
                this.crns = [];
                this.form.controls['crn'].setValue("");
            }

        });

        this.service.messages_list().subscribe(list => {
            this.messages = list;
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
                if (response) {
                    if (response.status) {
                        this.toastr.push([{
                            'type': 'success',
                            'body': this.translate.instant('messages.request_added')
                        }]);
                        this.dialogRef.close({ refresh: true });
                        this.closeDiag();
                    } else {
                        this.toastr.push([{
                            'type': 'error',
                            'body': this.translate.instant("messages.request_added")
                        }]);
                    }
                    this.isLoading = false;
                    this.submitted = false;
                }
            },
            error => {
                this.toastr.tryagain();
                this.isLoading = false;
                this.submitted = false;
            }
        );
    }

    closeDiag() {
        this.dialogRef.close();
    }

}
