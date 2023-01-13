import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../../account/services/user.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-confirmation',
  styleUrls: ['./otp-confirmation.component.css'],
  templateUrl: './otp-confirmation.component.html'
})
export class OtpConfirmation implements OnInit, OnDestroy {
    allowSelection = false;

    constructor(
        public userService: UserService, 
        public translate: TranslateService,
        private fb: FormBuilder,
        private toastr: AppToasterService,
        public dialogRef: MatDialogRef<OtpConfirmation>, 
        @Inject(MAT_DIALOG_DATA) public data
    ) {
      
    }

    ngOnInit() {
        document.getElementById("side-menu").style.display = "none";
    }

    ngOnDestroy() {
        document.getElementById("side-menu").style.display = "block";
    }

    do_logic(){
      window.open('https://iam.seu.edu.sa/seuotp/otpactivated.html');
      localStorage.removeItem('access_token');
      window.location.href = "https://iam.seu.edu.sa/oam/server/logout?end_url=https://iam.seu.edu.sa/SEUSSO/pages/Logout.jsp";
    }

    onScroll(e) {
        //scrollTop + clientHeight = scrollHeight
        if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
          this.allowSelection = true;
        }
    }
}