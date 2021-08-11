import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../../account/services/user.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-vaccine-status',
  styleUrls: ['./vaccine-status.component.css'],
  templateUrl: './vaccine-status.component.html'
})
export class VaccineStatusComponent implements OnInit, OnDestroy {
    std_id;
    status;
    saving = false;
    choiceChange = false;
    allowSelection = false;
    constructor(
        public userService: UserService, 
        private http: HttpClient, 
        private reqservice: HttpRequestService, 
        private router: Router, 
        private toastr: AppToasterService, 
        public translate: TranslateService,
        public dialogRef: MatDialogRef<VaccineStatusComponent>, 
        @Inject(MAT_DIALOG_DATA) public confirmdata
    ) {
        this.std_id = confirmdata.username.substring(1);
    }

    ngOnInit() {
        document.getElementById("side-menu").style.display = "none";
    }

    ngOnDestroy() {
        document.getElementById("side-menu").style.display = "block";
    }

    choice(){
        this.choiceChange = true;
    }

    onScroll(e) {
        //scrollTop + clientHeight = scrollHeight
        if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
          this.allowSelection = true;
        }
    }

    submit(){
        let data = {
            STD_ID : this.std_id,
            STATUS : this.status
        };
        this.saving = true;
        this.userService.updateStudentVaccineStatus(data).subscribe(
            (response: any) => {
              if (response) {
                if (response['status']) {
                  this.userService.userData['VACCINE_STATUS'] = 0;
                  this.dialogRef.close();
                } else {
                  this.saving = false;
                  this.toastr.tryagain();
                }
              }
            },
            error => {
              this.toastr.tryagain();
              this.saving = false;
            }
          );
    }
}