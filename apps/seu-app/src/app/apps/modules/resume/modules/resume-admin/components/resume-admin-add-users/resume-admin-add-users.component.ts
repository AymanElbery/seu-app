import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminAdminsService } from '../../../../services/resume-admin-admins';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';


export interface DialogData {
  
}

@Component({
  selector: 'app-resume-admin-add-users',
  templateUrl: './resume-admin-add-users.component.html',
  styleUrls: ['./resume-admin-add-users.component.css']
})

export class ResumeAdminAddUsersComponent implements OnInit {

  isLoading = false;
  addUserForm: FormGroup;
  submitted= false;

  constructor(
  private fb: FormBuilder, 
  private usersService: AdminAdminsService,
  private router: Router,
  public dialogRef: MatDialogRef<ResumeAdminAddUsersComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.addUserForm = this.fb.group({
      NAME: ["", [Validators.required]],
      USERNAME: ["", [Validators.required]],
      ACTIVE: [0],
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
    this.usersService.addAdmin(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.usersService.tryagain();
    });
  }
}
