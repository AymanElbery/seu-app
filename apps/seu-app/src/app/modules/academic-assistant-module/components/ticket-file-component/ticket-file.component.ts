import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sd-exams-form',
    templateUrl: './ticket-add.component.html',
    styleUrls: ['./ticket-add.component.css']
})
export class SDExamsFormComponent implements OnInit {

    isLoading = false;
    form: FormGroup;
    submitted = false;

    courses = [];
    constructor(@Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder,
        public dialogRef: MatDialogRef<SDExamsFormComponent>, private translate: TranslateService,
        private toastr: AppToasterService, private service: SDExamsService) { }

    ngOnInit() {
        this.form = this.fb.group({
            crse: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            description: ['', [Validators.required]]
        });
        this.service.loadlookups();
        this.service.crses_list().subscribe(list => {
            this.courses = list;
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
                    if (response['messages'].length) {
                        this.toastr.push(response['messages']);
                    } else {
                        this.toastr.push([{
                            'type': 'error',
                            'body': this.translate.instant(response['res_code'])
                        }]);

                    }
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
