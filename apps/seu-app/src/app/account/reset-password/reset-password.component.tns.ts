import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { reduce } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    public userService: UserService,
    private toastr: AppToasterService,
    private translate: TranslateService  ) {
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
    console.log(data);
    this.userService.resetPassword(this.reset.opassword, this.reset.npassword, this.reset.cpassword).then(res => {
      if ((res as any).status) {
        this.toastr.push([{ type: 'scuccess', body: this.translate.instant('general.restsuccess') }]);

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
  onSubmit() {
 
    this.addRequest(this.reset);
  }
  closeDiag() {
  }
}
