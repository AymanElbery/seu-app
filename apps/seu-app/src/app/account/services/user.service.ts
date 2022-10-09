import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from '../../shared/services/base.service';
import { UserData } from 'src/app/shared/models/user-data';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { HttpRequestServiceBase } from '../../shared/services/http-request.service_base';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  baseUrl = '';
  logedIn = false;
  data;
  name;
  menuType = 1;
  acStd = false;
  showServices = false;
  userData: UserData;
  userDataLoaded: boolean = false;
  userDataSubject = new BehaviorSubject(null);
  userDataObservable = new Subject();
  newsData;
  eventsData;
  adsData;
  userErroCode = ''
  constructor(
    private configService: ConfigService,
    private httRequest: HttpRequestServiceBase,
    private http: HttpClient,
    private translate: TranslateService,
    private router: Router
  ) {
    super();
    this.configService.baseUrl = '';
    // tslint:disable-next-line: max-line-length
    this.userData = {
      act_as_student: false,
      activeRole: '',
      camp: '',
      coll: '',
      id: '',
      PIDM: '',
      STD_RIGHTS: 0,
      DATA_CLEANED: 0,
      SEU_STRUCTURE_EMP: 0,
      DATA_CLEANED_STD: 0,
      COMMITTE_CONFIRM: 0,
      COMMITTE_CONFIRM_DATA: [],
      level: '',
      major: '',
      name_ar: '',
      name_en: '',
      role: '',
      email: '',
      sex: '',
      ssn: '',
      stdName: '',
      student_details: {
        name_en: '',
        ssn: '',
        sex: '',
        name_ar: '',
        major: '',
        camp: '',
        coll: '',
        id: '',
        level: ''
      },
      username: '',
      student_details_gr: {
        name_en: '',
        ssn: '',
        sex: '',
        name_ar: '',
        major: '',
        camp: '',
        coll: '',
        id: '',
        level: ''
      }
    };
    this.newsData = [];
    this.eventsData = [];
    this.adsData = [];
  }

  addUser(
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    location: string
  ) {
    const body = { username, email, password, firstName, lastName, location };
    return this.httRequest.postAuthRequest('accounts', body).pipe(
      map((res: any) => res),
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  relogin() {
    this.httRequest.relogin();
  }
  login(userName, password) {
    // console.log('ser');
    return this.httRequest
      .postAuthRequest('auth/login', { userName, password })
      .pipe(
        map((res: any) => res),
        catchError(err => {
          return err;
        })
      );
  }

  requestUser() {
    return this.httRequest.requestUser().toPromise();
  }
  requestٍSession(){
    return this.httRequest.requestٍSession().toPromise();
  }

  SignIn(userName, pass) {
    this.baseUrl = '';
    this.configService.baseUrl = '';
    return this.httRequest.postAuthRequest(environment.common+'/ssosession/login', { user: userName, password: pass, full: 1 }).toPromise();
  }
  resetPassword(opassword, npassword, cpassword) {
    this.baseUrl = '';
    this.configService.baseUrl = '';
    const user = this.userData.username;
    //console.log(user);
    const lang = this.translate.currentLang;
    return this.httRequest.postAuthRequest(environment.common+'/ssosession/resetpassword', { user, opassword, npassword, cpassword, lang }).toPromise();
  }

  errorRedirect() {
    let reqseq = 0;
    if (localStorage.getItem("userreloaded")) {
      reqseq = parseInt(localStorage.getItem("userreloaded"));
    }
    console.log(reqseq, localStorage.getItem("userreloaded"));
    if (reqseq >= 3) {
      localStorage.removeItem("userreloaded");
      console.log("REDIRECT TO ERROR");
      //this.router.navigate(['/error']);
    } else {
      localStorage.setItem("userreloaded", "" + (reqseq + 1));
      console.log("UPDATE 1");
      this.loadUserData();
    }
  }
  loadUserData() {
    if (this.userDataLoaded !== true) {
      return this.requestUser()
        .then(res => {
          if (res['status']) {
            this.userData = (res as any).data;
            // console.log('userdata:'+this.userData);
            //this.userData.role = "Instructor";
            this.userData.activeRole = this.userData.role;
            this.userDataLoaded = true;
            this.pushUserDataChanges();
            return this.userData;
          } else {
            this.userErroCode = res['errCode'];
            //this.errorRedirect();
          }
        },
          err => {
            //this.errorRedirect();
            // if (localStorage.getItem("userreloaded")) {
            //   localStorage.removeItem("userreloaded");
            //   window.location.href = "https://seu.edu.sa";
            // } else {
            //   localStorage.setItem("userreloaded", "1");
            // }
          });
    }
  }
  loadUserDetailsData() {
    return this.requestUser();
  }
  pushUserDataChanges() {
    this.userDataSubject.next(this.userData);
    this.userDataObservable.next(this.userData);
  }

  getActiveRoleDetails() {
    let data;
    // tslint:disable-next-line: triple-equals
    if (this.userData.activeRole == 'Student' && this.userData.act_as_student && this.userData.level === 'UG') {
      data = JSON.parse(JSON.stringify(this.userData.student_details));
      data.username = data.id;
      // tslint:disable-next-line: triple-equals
    } else if (this.userData.activeRole == 'Student' && this.userData.act_as_student && this.userData.level === 'GR') {
      data = JSON.parse(JSON.stringify(this.userData.student_details_gr));
      data.username = data.id;
    } else {
      data = JSON.parse(JSON.stringify(this.userData));
    }
    return data;
  }

  getAdmisPerm() {
    const udata = this.getActiveRoleDetails();
    const username = udata.username;
    const notsURL = environment.baselink + environment.servicesprefix + environment.common+'/admisperm/index';
    const auth = this.httRequest.getNotinficationsAuth();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      username,
      Authorization: auth
    });
    return this.http.get(notsURL, { headers });
  }

  getEmpData(emp_id) {
    var url = environment.baselink + environment.servicesprefix + environment.common+"/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "info_confirmations/info/" + emp_id, {
      headers: headers
    });
  }

  getStdData(std_id) {
    var url = environment.baselink + environment.servicesprefix + environment.common +"/public/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "stds/get_stds_info/" + std_id, {
      headers: headers
    });
  }

  getResumeAdminUsers() {
    var url = environment.baselink + environment.servicesprefix + environment.common +"/resume/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "api/get_admin_users", {
      headers: headers
    });
  }

  getTraficUsers() {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/trafic/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "trafic/get_users", {
      headers: headers
    });
  }

  getDistrictsByCityId(cityId) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "info_confirmations/districts/" + cityId, {
      headers: headers
    });
  }

  getUniversities() {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "info_confirmations/univs", {
      headers: headers
    });
  }

  getrels() {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "info_confirmations/rels", {
      headers: headers
    });
  }

  getCities() {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "info_confirmations/cities", {
      headers: headers
    });
  }

  updateEmpInfo(data) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "info_confirmations/update", data, { headers: headers });
  }

  sendEmail(email) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "data_clean/send_email", {email: email}, { headers: headers });
  }

  sendEmailStd(email) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "data_clean_std/send_email", {email: email}, { headers: headers });
  }

  sendSMS(email, code, mobile) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "data_clean/confirm_email", {email: email, code: code, mobile: mobile}, { headers: headers });
  }

  sendSMSStd(email, code, mobile) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "data_clean_std/confirm_email", {email: email, code: code, mobile: mobile}, { headers: headers });
  }
  
  sendSMS_confirm(mobile, code, data) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "data_clean/confirm_sms", {mobile: mobile, code: code, data: data}, { headers: headers });
  }

  sendSMS_confirm_std(mobile, code, data) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "data_clean_std/confirm_sms", {mobile: mobile, code: code, data: data}, { headers: headers });
  }

  updateStudentVaccineStatus(data) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/vaccine/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "status/update", data, { headers: headers });
  }

  updateEmpSeuStructureData(data) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/seu_structure/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "emp/insert", data, { headers: headers });
  }

  updateStudentRights(data) {
    var url = environment.baselink + environment.servicesprefix + environment.common + "/std_rights/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "std_rights/update", data, { headers: headers });
  }

  get_seu_structure(){
    var url = environment.baselink + environment.servicesprefix + environment.common + "/seu_structure/";
    var auth =`Basic ${window.btoa(environment.basicAuth)}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "emp/lookups", {
      headers: headers
    });
  }
}
