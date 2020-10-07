import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminUsersService } from '../../../../services/translation-admin-users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';


export interface DialogData {
  
}

@Component({
  selector: 'app-translation-admin-add-users',
  templateUrl: './translation-admin-add-users.component.html',
  styleUrls: ['./translation-admin-add-users.component.css']
})

export class TranslationAdminAddUsersComponent implements OnInit {

  isLoading = false;
  addUserForm: FormGroup;
  submitted= false;

  constructor(
  private fb: FormBuilder, 
  private usersService: AdminUsersService,
  private router: Router,
  public dialogRef: MatDialogRef<TranslationAdminAddUsersComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.addUserForm = this.fb.group({
      NAME: ["", [Validators.required]],
      USERNAME: ["", [Validators.required]],
      ROLE: ["", [Validators.required]],
      ACTIVE: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    
  }  
  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

  onSubmit(){
    this.submitted = true;
    if (this.addUserForm.invalid) {
        return;
    }
    let data = this.addUserForm.value;
    this.usersService.addUser(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.usersService.tryagain();
    });
  }
}
