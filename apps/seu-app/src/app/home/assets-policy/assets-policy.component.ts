import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../../account/services/user.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assets-policy',
  styleUrls: ['./assets-policy.component.css'],
  templateUrl: './assets-policy.component.html'
})
export class AssetsPolicyComponent implements OnInit, OnDestroy {
    allowSelection = false;
    agree: boolean = false;
    saving: boolean = false;
    constructor(
        public userService: UserService, 
        public translate: TranslateService,
        private fb: FormBuilder,
        private toastr: AppToasterService,
        public dialogRef: MatDialogRef<AssetsPolicyComponent>, 
        @Inject(MAT_DIALOG_DATA) public data
    ) {
      
    }

    ngOnInit() {
        document.getElementById("side-menu").style.display = "none";
    }

    agreeFunc(){
        this.agree = !this.agree;
    }

    ngOnDestroy() {
        document.getElementById("side-menu").style.display = "block";
    }

    do_logic(){
        this.saving = true;
        this.userService.updateAssetsPolicyPopup(this.userService.userData.username).subscribe(
            (response: any) => {
              if (response) {
                if (response['status']) {
                    this.saving = false;
                    this.userService.userData['SHOW_POLICY'] = 0;
                    this.dialogRef.close();
                    this.toastr.push([{ type: 'success', 'body': response['message'] }]);
                } else {
                    this.saving = false;
                    this.toastr.tryagain();
                }
              }
            },
            error => {
                this.saving = false;
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