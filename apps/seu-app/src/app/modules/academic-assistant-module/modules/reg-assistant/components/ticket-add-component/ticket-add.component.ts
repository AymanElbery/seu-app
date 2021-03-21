import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CancelCousre } from 'src/app/shared/models/cancel-cousre';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ReqAssistantService } from '../../services/req-assistant.service';

@Component({
    selector: 'app-reg-assistant-form',
    templateUrl: './ticket-add.component.html',
    styleUrls: ['./ticket-add.component.css']
})
export class RegistrationAssistantFormComponent implements OnInit {

    cancelCousre: CancelCousre;
    reqData: any;
    msgs: any;
    private imageSrc = '';

    constructor(@Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<RegistrationAssistantFormComponent>,
        private toastr: AppToasterService, private service: ReqAssistantService) { }

    ngOnInit() {
    }


    requesting = false;
    addRequest(data: any) {
        this.service.AddRequest(data).subscribe(res => {
            this.toastr.push((res as any).messages);
            if (res['status']) {
                this.dialogRef.close({ refresh: true });
            }
            this.requesting = false;
        },
            err => {
                this.toastr.tryagain();
                this.requesting = false;
            });
    }
    onSubmit(form: NgForm) {
        if (this.requesting) {
            return false;
        }
        this.requesting = true;
        this.addRequest(this.cancelCousre);
    }

    closeDiag() {
        this.dialogRef.close();
    }

}
