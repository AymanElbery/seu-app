import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../../account/services/user.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-major-confirmation',
  styleUrls: ['./change-major-confirmation.component.css'],
  templateUrl: './change-major-confirmation.component.html'
})
export class ChangeMajorConfirmation implements OnInit, OnDestroy {
    allowSelection = false;

    constructor(
        public userService: UserService, 
        public translate: TranslateService,
        private fb: FormBuilder,
        private toastr: AppToasterService,
        public dialogRef: MatDialogRef<ChangeMajorConfirmation>, 
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
        this.userService.updateChangeMajorPopup(this.userService.userData.id).subscribe(
            (response: any) => {
              if (response) {
                if (response['status']) {
                    this.userService.userData['CHANGE_MAJOR_SURVEY'] = 1;
                    this.dialogRef.close();
                    window.open(this.data.survey_link);
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