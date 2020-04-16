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
  selector: 'app-policy-home',
  styleUrls: ['./policy.component.scss'],
  templateUrl: './policy.component.html'
})
export class PolicyComponent implements OnInit, OnDestroy {
  selection;
  requesting = false;
  constructor(public userService: UserService, private http: HttpClient, private reqservice: HttpRequestService, private router: Router, private toastr: AppToasterService, public translate: TranslateService,
    public dialogRef: MatDialogRef<PolicyComponent>,
  ) {

  }
  ngOnInit() {
    document.getElementById("side-menu").style.display = "none";

  }
  ngOnDestroy() {
    document.getElementById("side-menu").style.display = "block";

  }
  allowSelection = false;
  onScroll(e) {
    //scrollTop + clientHeight = scrollHeight
    if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
      this.allowSelection = true;
    }
  }
  saveChoose() {
    const headers = new HttpHeaders({
      Authorization: this.reqservice.getSSOAuth(),
      'Content-Type': 'application/json',
    });
    this.http.post(environment.baselink + environment.servicesprefix + "/rest/policy_acceptance/change_status", { username: this.userService.userData.username, status: this.selection, emp_id: this.userService.userData.id }, { headers }).subscribe(res => {
      if (res['status']) {
        this.dialogRef.close();
      } else {
        this.toastr.tryagain();
      }
      this.requesting = false;
    },
      err => {
        this.toastr.tryagain();
        this.requesting = false;
      });
  }
}
