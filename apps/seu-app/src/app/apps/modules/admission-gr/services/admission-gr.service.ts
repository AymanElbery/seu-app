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
export class AdmissionGRService extends AppUserService {
  checkResultData;
  messages;
  tokenKey = 'gr-token';
  userKey = 'gr-student';

  settings = {};
  settingsLoaded: boolean = false;
  settingsObservable = new Subject();

  constructor(router: Router, globalService: GlobalBaseService, private admissionHttpRequest: HttpRequestAdmisionService) {
    super(router, globalService);
  }

  get fullName() {
    if (this.isLoggedIn)
      return this.LoggedInUser['FIRST_NAME'] + ' ' + this.LoggedInUser["LAST_NAME"];
    return '';
  }

  get isLoggedIn() {
    if (this.LoggedInUser) {
      return true;
    }
    return false
  }

  loadSettings() {
    this.admissionHttpRequest.postRequest_obj('/gr/Admission_result_service/settings', {}).subscribe((res) => {
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
      this.router.navigate(['/apps/admission-gr/gr-login/']);
      return false;
    }
    return true;
  }

  getloginstatus(data) {
    return this.admissionHttpRequest.postRequest_obj('/gr/Admission_result_service/check', data);
  }

  getverification(data) {
    return this.admissionHttpRequest.postRequest_obj('/gr/Admission_result_service/verification', data);
  }

  getresstatus(data) {
    return this.admissionHttpRequest.postRequest_obj('/gr/Admission_result_service', data).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      })
    );
  }



  getuplaodfile(token) {
    return this.admissionHttpRequest.postRequest_obj('/gr/Upload_files_service', { token }).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      })
    );
  }

  postfileupload(data) {
    return this.admissionHttpRequest.postRequest_obj('/gr/Upload_files_service/Insert', data).pipe(
      map(res => {
        this.checknotloggedinresult(res)
        return res;
      })
    );
  }

  logout_ug(token) {
    return this.admissionHttpRequest.postRequest_obj('/gr/Admission_result_service/Logout', { token });
  }

  logout() {
    this.logout_ug(this.LoggedInToken).subscribe();
    this.checkResultData = null;
    super.logout();
  }

}


