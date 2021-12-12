import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { AcademicRequestsService } from '../../services/academic-requests.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'sd-academic-requests-form',
    templateUrl: './ticket-add.component.html',
    styleUrls: ['./ticket-add.component.css']
})
export class RegistrationAssistantFormComponent implements OnInit {

    isLoading = false;
    form: FormGroup;
    submitted = false;
    categories = [];
    courses = [];
    crns = [];
    course_check = false;
    crn_check = false;
    items = [];
    suggest = false;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data, 
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<RegistrationAssistantFormComponent>, 
        private translate: TranslateService,
        private toastr: AppToasterService, 
        private service: AcademicRequestsService
    ) {

    }

    ngOnInit() {
        this.form = this.fb.group({
            category: ['', [Validators.required]],
            item: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            description: ['', [Validators.required]],
            file: ['']
        });
        this.service.loadlookups();
        this.service.categories_list().subscribe(list => {
            this.categories = list;
        });
        this.service.courses_list().subscribe(list => {
            this.courses = list;
        });
        this.service.crns_list().subscribe(list => {
            this.crns = list;
        });
        this.form.controls['category'].valueChanges.subscribe(() => {
            this.form.controls['item'].setValue("");
            if (this.form.controls['category'].value) {
                let category = this.form.controls['category'].value;
                this.service.items_list(category).subscribe(list => {
                    this.items = list;
                });
            } else {
                this.items = [];
            }
        });
        this.form.controls['item'].valueChanges.subscribe(() => {
            if (this.form.controls['item'].value) {
                let item = this.form.controls['item'].value;
                this.service.suggest_list(item).subscribe(suggest => {
                    this.suggest = suggest[0];
                });

                let extra = this.service.extra_fields(item)[0];
                this.crn_check = extra.crn;
                this.course_check = extra.course;
                if(this.crn_check){
                    this.form.addControl('crn', new FormControl('', Validators.required));
                }
                if(this.course_check){
                    this.form.addControl('course', new FormControl('', Validators.required));
                }
            } else {
                this.suggest = false;
            }
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
