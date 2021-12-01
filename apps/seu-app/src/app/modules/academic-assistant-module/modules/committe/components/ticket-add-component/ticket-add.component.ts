import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { CommitteService } from '../../services/committe.service';
import { TranslateService } from '@ngx-translate/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'sd-knowledge-resources-form',
    templateUrl: './ticket-add.component.html',
    styleUrls: ['./ticket-add.component.css']
})
export class RegistrationAssistantFormComponent implements OnInit {

    isLoading = false;
    form: FormGroup;
    datePickerConfig: Partial<BsDatepickerConfig>;
    submitted = false;
    
    courses = [];
    punishments = [];
    terms = [];
    constructor(@Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder,
        public dialogRef: MatDialogRef<RegistrationAssistantFormComponent>, private translate: TranslateService,
        private toastr: AppToasterService, private service: CommitteService) { }

    ngOnInit() {
        this.form = this.fb.group({
            course_code: ['', [Validators.required]],
            decision_number: ['', [Validators.required]],
            violation: ['', [Validators.required]],
            punishment: ['', [Validators.required]],
            student_know_date: ['', [Validators.required]],
            description: ['', [Validators.required]],
        });
        this.service.loadlookups();
        this.service.crses_list().subscribe(list => {
            this.courses = list;
        });
        this.service.punishments_list().subscribe(list => {
            this.punishments = list;
        });
    }
    handleFileInput(files: FileList) {
        this.form.controls['file'].setValue(files.item(0));
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
