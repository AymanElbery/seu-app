import { Component, OnInit, Inject } from '@angular/core';
import { UnivWithdraw } from 'src/app/shared/models/univ-withdraw';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddRequestComponent } from 'src/app/academicprocs/withdraw-from-univ/diag/add-request/add-request.component';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EnquriesService } from './../../services/enquries.service';
import { UserService } from '../../../account/services/user.service';


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
    email;
    autoAnswer;
    
    constructor(
    private fb: FormBuilder,
    private enquriesService: EnquriesService, 
    public userService: UserService,
    public dialogRef: MatDialogRef<AddAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.email = this.userService.userData.email;
        this.id = data.id;
        this.answerForm = this.fb.group(
            {
                answer: ["", [Validators.required]],
                id: [data.id],
                email: [this.email],
                autoAnswer: [this.autoAnswer],
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
        this.autoAnswer = this.answerForm.controls.autoAnswer.value ? 1 : 0;
        this.enquriesService.addAnswer(
            this.answerForm.controls.id.value, 
            this.answerForm.controls.email.value, 
            this.answerForm.controls.answer.value,
            this.autoAnswer
            ).subscribe(
            (response: any) => {
              if (response) {
                window.location.reload();
              }
            },
            error => {}
        );
    }

}
