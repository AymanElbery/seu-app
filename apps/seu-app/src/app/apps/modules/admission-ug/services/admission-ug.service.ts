import { Injectable } from '@angular/core';
import { AppUserService } from '../../../services/app-user.service';
import { HttpRequestAdmisionUgService } from './http-request-admision-ug.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';


@Injectable({
  providedIn: 'root'
})
export class AdmissionUGService extends AppUserService {
  checkResultData;
  tokenKey = 'ug-token';
  userKey = 'ug-student';

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
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service', data);
  }

  getloginstatus(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service/check', data);
  }

  getverification(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service/verification', data);
  }


  matchdocs(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Post_result_service', { token });
  }

  uploaddocs(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Upload_files_service', { token });
  }

  savedocs(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Upload_files_service/Insert', { data });
  }
  paymentrefund(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/cancel_admission_service', { token });
  }
  Reqpaymentrefund(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/cancel_admission_service/insert', {data});
  }

  logout_ug(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service/Logout', { token });
  }

  logout() {
    this.logout_ug(this.LoggedInToken).subscribe();
    this.checkResultData = null;
    super.logout();
  }

}


