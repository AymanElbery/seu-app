import { Injectable } from '@angular/core';
import { AppUserService } from '../../../services/app-user.service';
import { HttpRequestAdmisionUgService } from './http-request-admision-ug.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';


@Injectable({
  providedIn: 'root'
})
export class AdmisionUgService extends AppUserService {
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
    return this.admissionUgHttpRequest.postRequest_obj('/Admission_result_service', data);
  }

  getloginstatus(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/Admission_result_service/check', data);
  }

  getverification(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/Admission_result_service/verification', data);
  }


  matchdocs(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/Post_result_service', { token });
  }
  
  uploaddocs(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/Upload_files_service', { token });
  }

  savedocs(data) {
    console.log("data saves",data);
    return this.admissionUgHttpRequest.postRequest_obj('/Upload_files_service/Insert', { data });
  }


  logout_ug(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/Admission_result_service/Logout', { token });
  }

  logout() {
    this.logout_ug(this.LoggedInToken).subscribe();
    super.logout();
  }

}


