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

    courses = [];
    messages = [];
    crns = [];
    lectures = [];
    tickets;
    can_add_new = true;
    

    constructor(
    @Inject(MAT_DIALOG_DATA) public data, 
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistrationAssistantFormComponent>, 
    private translate: TranslateService,
    private toastr: AppToasterService, 
    private service: ReqAssistantService) {
        this.tickets = data;
        this.form = this.fb.group({
            crse: ['', [Validators.required]],
            message: ['', [Validators.required]],
            comments: ['', [Validators.required]]
        });
    }

    ngOnInit() {
        
        this.service.loadlookups();
        this.service.courses_list().subscribe(list => {
            this.courses = list;
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

    crseCange(e){
        this.can_add_new = true;
        let course_code = e.value.split("|")[0].trim();
        this.tickets.forEach(ticket => {
            if(course_code.trim() == ticket.subject.split("|")[1].trim()){
                this.can_add_new = false;
            }
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
