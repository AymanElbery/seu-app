import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
    subcategories = [];
    items = [];
    desc = false;
    constructor(@Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder,
        public dialogRef: MatDialogRef<RegistrationAssistantFormComponent>, private translate: TranslateService,
        private toastr: AppToasterService, private service: AcademicRequestsService) { }

    ngOnInit() {
        this.form = this.fb.group({
            subcategory: ['', [Validators.required]],
            item: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            description: ['', [Validators.required]],
            file: ['']
        });
        this.service.loadlookups();
        this.service.subcategories_list().subscribe(list => {
            this.subcategories = list;
        });
        this.form.controls['subcategory'].valueChanges.subscribe(() => {
            this.form.controls['item'].setValue("");
            if (this.form.controls['subcategory'].value) {
                let subcategory_code = this.form.controls['subcategory'].value;
                this.service.items_list(subcategory_code).subscribe(list => {
                    this.items = list;
                });
            } else {
                this.items = [];
            }
        });
        this.form.controls['item'].valueChanges.subscribe(() => {
            this.desc = false;
            if (this.form.controls['item'].value) {
                let item_code = this.form.controls['item'].value;
                this.service.desc_list(item_code).subscribe(desc => {
                    this.desc = desc;
                });
            } else {
                this.desc = false;
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
