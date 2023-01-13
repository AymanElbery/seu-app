import { Injectable } from '@angular/core';
import { AppUserService } from '../../../services/app-user.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { HttpRequestAdmisionService } from 'src/app/apps/services/http-request-admision.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdmissionUGService extends AppUserService {
  checkResultData;
  tokenKey = 'ug-token';
  userKey = 'ug-student';

  settings;
  settingsLoaded: boolean = false;
  settingsObservable = new Subject();

  constructor(router: Router, globalService: GlobalBaseService, private admissionUgHttpRequest: HttpRequestAdmisionService) {
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

  loadSettings() {
    this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service/settings', {}).subscribe((res) => {
      if (res['status']) {
        this.settings = res['data'];
        this.settingsLoaded = true;
        this.settingsObservable.next(true);
      }
    });
  }
  checknotloggedinresult(res) {
    if (res['result'] == 'notloggedin') {
      super.logout(false);
      this.router.navigate(['/apps/admission-ug/ug-login/']);
      return false;
    }
    return true;
  }

  getloginstatus(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service/check', data);
  }

  getverification(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service/verification', data);
  }

  getresstatus(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service', data).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      })
    );
  }

  matchdocs(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Post_result_service', { token }).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      })
    );
  }

  uploaddocs(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Upload_files_service', { token }).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      })
    );
  }

  savedocs(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Upload_files_service/Insert', data).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      })
    );
  }
  paymentrefund(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/cancel_admission_service', { token }).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      }));
  }
  Reqpaymentrefund(data) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/cancel_admission_service/insert', data).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      }));
  }

  logout_ug(token) {
    return this.admissionUgHttpRequest.postRequest_obj('/ug/Admission_result_service/Logout', { token });
  }

  appRedirect() {
    this.router.navigate(['/apps/admission-ug']);
  }

  logout() {
    this.logout_ug(this.LoggedInToken).subscribe();
    this.checkResultData = null;
    super.logout();
  }

}


