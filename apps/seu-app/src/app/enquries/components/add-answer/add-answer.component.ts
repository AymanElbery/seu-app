import { Component, OnInit, Inject } from '@angular/core';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddRequestComponent } from 'src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EnquriesService } from './../../services/enquries.service';

export interface DialogData {
    id: string;
}

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent {

    id;
    answerForm: FormGroup;
    submitted = false;
    errorMessage = false;
    
    constructor(
    private fb: FormBuilder,
    private enquriesService: EnquriesService, 
    public dialogRef: MatDialogRef<AddAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.id = data.id;
        this.answerForm = this.fb.group(
            {
                answer: ["", [Validators.required]],
                id: [data.id]
            },
        );
        this.id = data.id;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    closeDiag() {
        this.dialogRef.close();
    }

    keyPress(){
        this.errorMessage = false;
    }

    onSubmit(){
        this.submitted = true;
        if (this.answerForm.invalid) {
            if (this.answerForm.controls.answer.errors.required) {
                this.errorMessage = true;
            }
            return;
        }

        this.enquriesService.addAnswer(this.answerForm.controls.id.value, this.answerForm.controls.answer.value).subscribe(
            (response: any) => {
              if (response) {
                window.location.reload();
              }
            },
            error => {}
        );
    }

}
