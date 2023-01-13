import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { LeadershipService } from '../../../services/leadership.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-leadership-user-form',
  templateUrl: './leadership-user-form.component.html',
  styleUrls: ['./leadership-user-form.component.css']
})
export class LeadershipUserFormComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  loading = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<LeadershipUserFormComponent>, private fb: FormBuilder,
    private toastr: AppToasterService, private leadershipService: LeadershipService) {


    this.form = this.fb.group({
      'USER_NAME': ['', [Validators.required]],
      'USER_SSO': ['', [Validators.required]],
      'IS_ADMIN': [0, []],
      'ACTIVE': [0, [Validators.required]],
    });
  }
  user;
  ngOnInit() {
    this.user = this.data.user;
    if (this.user) {
      this.form.reset(this.user);
    }
  }
  save() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    let data = this.form.value;
    if (this.user) {
      data['id'] = this.user['USER_PK'];
    }
    this.leadershipService.user_save(data).subscribe(
      (response: any) => {
        if (response.status) {
          this.leadershipService.notifySucc(response['res_code']);
          this.closeDiag();
        } else {
          this.leadershipService.notifyError(response['res_code']);
        }
        this.submitted = false;
      },
      error => {
        this.submitted = false;
      }
    );
    return false;
  }

  closeDiag() {
    this.dialogRef.close(true);
  }
}
