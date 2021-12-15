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
    item_1 = false;
    item_5 = false;
    item_7 = false;
    item_16 = false;
    categories = [];
    items = [];
    constructor(
    @Inject(MAT_DIALOG_DATA) public data, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistrationAssistantFormComponent>, 
    private translate: TranslateService,
    private toastr: AppToasterService, 
    private service: ReqAssistantService) {}

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
                let itemId = this.form.controls['item'].value;
                if(itemId == 1){
                    this.item_1 = true;
                    this.item_5 = this.item_7 = this.item_16 = false;
                } else if(itemId == 5){
                    this.item_5 = true;
                    this.item_1 = this.item_7 = this.item_16 = false;
                } else if(itemId == 7){
                    this.item_7 = true;
                    this.item_1 = this.item_5 = this.item_16 = false;
                } else if(itemId == 16){
                    this.item_16 = true;
                    this.item_1 = this.item_5 = this.item_7 = false;
                } else{
                    this.item_1 = this.item_5 = this.item_7 = this.item_16 = false;
                }
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


