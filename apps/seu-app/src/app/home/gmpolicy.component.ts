import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../account/services/user.service';

import { HttpRequestService } from '../shared/services/http-request.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gmpolicy-home',
  styleUrls: ['./gmpolicy.component.scss'],
  templateUrl: './gmpolicy.component.html'
})
export class GMPolicyComponent implements OnInit, OnDestroy {
  selection;
  requesting = false;
  studentName;
  constructor(public userService: UserService, private http: HttpClient, private reqservice: HttpRequestService, private router: Router, private toastr: AppToasterService, public translate: TranslateService,
    public dialogRef: MatDialogRef<GMPolicyComponent>,
  ) {

  }
  ngOnInit() {
    this.studentName = this.userService.userData.name_ar;
    document.getElementById("side-menu").style.display = "none";

  }
  ngOnDestroy() {
    document.getElementById("side-menu").style.display = "block";

  }
  allowSelection = true;
  onScroll(e) {
    //scrollTop + clientHeight = scrollHeight
    if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
      this.allowSelection = true;
    }
  }
  saveChoose() {
    if (this.requesting) {
      return false;
    }
    this.requesting = true;
    const headers = new HttpHeaders({
      Authorization: this.reqservice.getSSOAuth(),
      'Content-Type': 'application/json',
    });
    this.http.post(environment.baselink + environment.servicesprefix + "/rest/policy_acceptance/students_gm", { STATUS: 1, STD_ID: this.userService.userData.id }, { headers }).subscribe(res => {
      if (res['status']) {
        this.userService.userData['gmpolicy'] = "Done";
        this.dialogRef.close();
      } else {
        this.requesting = false;
        this.toastr.tryagain();
      }
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
}
