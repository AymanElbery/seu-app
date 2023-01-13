import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { InquiriesService } from '../../services/inquiries.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'sd-issues-form',
    templateUrl: './ticket-add.component.html',
    styleUrls: ['./ticket-add.component.css']
})
export class RegistrationAssistantFormComponent implements OnInit {
    @ViewChild('no_check', {static: false}) no_check: ElementRef; 

    isLoading = false;
    form: FormGroup;
    submitted = false;
    suggest = false;
    ticket = false;
    categories = [];
    category;
    items = [];
    constructor(@Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder,
        public dialogRef: MatDialogRef<RegistrationAssistantFormComponent>, private translate: TranslateService,
        private toastr: AppToasterService, private service: InquiriesService) { }

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
        this.form.controls['category'].valueChanges.subscribe(() => {
            this.ticket = false;
            if(this.no_check){
                this.no_check.nativeElement.checked = false;
            }
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
            this.ticket = false;
            if(this.no_check){
                this.no_check.nativeElement.checked = false;
            }
            if (this.form.controls['item'].value) {
                let itemId = this.form.controls['item'].value;
                this.category = this.form.controls['category'].value;
                this.service.suggest_list(itemId).subscribe(suggest => {
                    this.suggest = suggest[0];
                });
            }
        });
    }
    handleFileInput(files: FileList) {
        this.form.controls['file'].setValue(files.item(0));
    }

    yes(e){
        if(e){
            this.toastr.push([{
                'type': 'success',
                'body': this.translate.instant('messages.thanks')
            }]);
            this.closeDiag(true);
        }
    }

    no(e){
        if(e){
            this.ticket = true;
        }else{
            this.ticket = false;
        }
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
