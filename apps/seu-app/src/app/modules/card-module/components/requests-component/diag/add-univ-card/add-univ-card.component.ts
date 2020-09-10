import { Component, OnInit, Inject } from '@angular/core';
import { universityCard } from 'src/app/shared/models/university-card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CardService } from '../../../../services/card.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/account/services/user.service';

@Component({
  selector: 'app-add-univ-card',
  templateUrl: './add-univ-card.component.html',
  styleUrls: ['./add-univ-card.component.scss']
})
export class AddUnivCardComponent implements OnInit {

  submitted = false;
  AddCardRequestForm: FormGroup;
  photo;
  message;
  isLoading;
  std_id;
  std_name_ar;
  std_name_en;
  std_ssn;
  std_branch;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddUnivCardComponent>,
    private toastr: AppToasterService, 
    private cardService: CardService,
    private fb: FormBuilder,
    private translate: TranslateService,
    public userService: UserService
  ) {
    // To Do ...
    this.std_id = this.userService.userData.student_details.id;
    this.AddCardRequestForm = this.fb.group({
      'PHOTO': ['', [Validators.required]]
    });
  }

  ngOnInit() {
    
  }

  onSubmit() {
    this.isLoading = true;
    if (this.AddCardRequestForm.invalid) {
      return;
    }
    let data = this.AddCardRequestForm.value;
    data.STD_ID = this.std_id;
    if (this.photo) {
      data.PHOTO = this.photo;
    }
    this.message = "card.messages.card_has_been_saved";
    this.submitted = true;
    this.cardService.addRequest(data).subscribe(
      (response: any) => {
        this.isLoading = true;
        if (response) {
          if (response.status) {
            this.toastr.push([{
              'type': 'success',
              'body': this.translate.instant(this.message)
            }]);
          }
          this.closeDiag();
          this.isLoading = false;
          this.submitted = false;
        }
      },
      error => {
        this.isLoading = false;
        this.submitted = false;
      }
    );
  }
  
  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.photo = reader.result;
  }

  closeDiag() {
    this.dialogRef.close(true);
  }

}
