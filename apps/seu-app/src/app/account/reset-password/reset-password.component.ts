import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { reduce } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {


  constructor(
    public userService: UserService,
    private toastr: AppToasterService,
    private translate: TranslateService,
    public dialogRef: MatDialogRef<ResetPasswordComponent>
  ) {
    this.reset = {
      opassword: '',
      npassword: '',
      cpassword: ''
    };

  }
  reset: any;
  requesting = false;
  ngOnInit() {

  }
  addRequest(data: any) {
    this.userService.resetPassword(this.reset.opassword, this.reset.npassword, this.reset.cpassword).then(res => {
      if ((res as any).status) {
        this.toastr.push([{ type: 'scuccess', body: this.translate.instant('general.restsuccess') }]);

        this.dialogRef.close();
      } else {
        this.toastr.push([{ type: 'error', body: (res as any).error }]);
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
  onSubmit(form) {
    if (this.requesting) {
      return false;
    }

    this.requesting = true;
    this.addRequest(this.reset);
  }
  closeDiag() {
    this.dialogRef.close();
  }
}
