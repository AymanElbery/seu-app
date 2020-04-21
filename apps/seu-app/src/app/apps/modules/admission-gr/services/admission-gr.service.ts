import { Injectable } from '@angular/core';
import { AppUserService } from '../../../services/app-user.service';

import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { HttpRequestAdmisionUgService } from '../../admission-ug/services/http-request-admision-ug.service';

@Injectable({
  providedIn: 'root'
})
export class AdmissionGRService extends AppUserService {
  checkResultData;
  tokenKey = 'gr-token';
  userKey = 'gr-student';

  constructor(router: Router, globalService: GlobalBaseService, private admissionUgHttpRequest: HttpRequestAdmisionUgService) {
    super(router, globalService);
  }

  get fullName() {
    if (this.isLoggedIn)
      return this.LoggedInUser['S_NAME'];
    return '';
  }

  get isLoggedIn() {
    if (this.LoggedInUser) {
      return true;
    }
    return false
  }

  getresstatus(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/gr/Admission_result_service', data);
  }

  getloginstatus(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/gr/Admission_result_service/check', data);
  }

  getverification(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/gr/Admission_result_service/verification', data);
  }


  logout_ug(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/gr/Admission_result_service/Logout', { token });
  }

  logout() {
    this.logout_ug(this.LoggedInToken).subscribe();
    this.checkResultData = null;
    super.logout();
  }

}


