import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../../account/services/user.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fees-ud-confirmation',
  styleUrls: ['./fees-UD-confirmation.component.css'],
  templateUrl: './fees-UD-confirmation.component.html'
})
export class FeesUDConfirmation implements OnInit, OnDestroy {
    allowSelection = false;

    constructor(
        public userService: UserService, 
        public translate: TranslateService,
        private fb: FormBuilder,
        private toastr: AppToasterService,
        public dialogRef: MatDialogRef<FeesUDConfirmation>, 
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
        this.userService.updateFeesUdPopup(this.userService.userData.id).subscribe(
            (response: any) => {
              if (response) {
                if (response['status']) {
                    this.userService.userData['FEES_UD'] = 1;
                    this.dialogRef.close();
                    this.toastr.push([{ type: 'success', 'body': response['message'] }]);
                } else {
                  this.toastr.tryagain();
                }
              }
            },
            error => {
              this.toastr.tryagain();
            }
        );
    }

    onScroll(e) {
        //scrollTop + clientHeight = scrollHeight
        if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
          this.allowSelection = true;
        }
    }
}