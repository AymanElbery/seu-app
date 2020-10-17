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
  photo_name;
  message;
  isLoading;
  std_id;

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
    this.std_id = this.userService.getActiveRoleDetails()['id'];
    this.AddCardRequestForm = this.fb.group({
      'PHOTO': ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    if (!this.photo) {
      return;
    }
    this.isLoading = true;
    let data = {
      STD_ID: this.std_id,
      PHOTO: this.photo,
      PHOTO_NAME: this.photo_name,
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
          } else {
            this.toastr.tryagain();
          }
          this.closeDiag();
          this.isLoading = false;
          this.submitted = false;
        }
      },
      error => {
        this.toastr.tryagain();
        this.isLoading = false;
        this.submitted = false;
      }
    );
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) {
      return false;
    }
    if (!this.validateFile(file.name)) {
      return false;
    }
    if (!this.validateFileSize(file.size)) {
      return false;
    }
    this.photo_name = file.name;

    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.photo = reader.result;
  }
  validateFileSize(size) {
    return (size < 5000000) ? true : false;
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (['png', 'jpg', 'jpeg'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  closeDiag() {
    this.dialogRef.close(true);
  }

}
