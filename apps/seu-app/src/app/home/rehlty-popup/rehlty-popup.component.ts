import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../../account/services/user.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rehlty-popup',
  styleUrls: ['./rehlty-popup.component.css'],
  templateUrl: './rehlty-popup.component.html'
})
export class RehltyPopupComponent implements OnInit, OnDestroy {
    allowSelection = false;
    constructor(
        public userService: UserService, 
        public translate: TranslateService,
        private fb: FormBuilder,
        private toastr: AppToasterService,
        public dialogRef: MatDialogRef<RehltyPopupComponent>, 
        @Inject(MAT_DIALOG_DATA) public data
    ) {
      
    }

    ngOnInit() {
        //document.getElementById("side-menu").style.display = "none";
    }

    ngOnDestroy() {
        //document.getElementById("side-menu").style.display = "block";
    }
    closeDialog(){
        this.dialogRef.close();
    }


    onScroll(e) {
        // if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
        //   this.allowSelection = true;
        // }
    }
}