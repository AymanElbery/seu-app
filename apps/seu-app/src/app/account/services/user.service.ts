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

  SignIn(userName, pass) {
    this.baseUrl = '';
    this.configService.baseUrl = '';
    return this.httRequest.postAuthRequest('rest/ssosession/login', { user: userName, password: pass, full: 1 }).toPromise();
  }
  resetPassword(opassword, npassword, cpassword) {
    this.baseUrl = '';
    this.configService.baseUrl = '';
    const user = this.userData.username;
    //console.log(user);
    const lang = this.translate.currentLang;
    return this.httRequest.postAuthRequest('rest/ssosession/resetpassword', { user, opassword, npassword, cpassword, lang }).toPromise();
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
      this.router.navigate(['/error']);
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
            this.errorRedirect();
          }
        },
          err => {
            this.errorRedirect();
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
    const notsURL = environment.baselink + environment.servicesprefix + '/rest/admisperm/index';
    const auth = this.httRequest.getNotinficationsAuth();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      username,
      Authorization: auth
    });
    return this.http.get(notsURL, { headers });
  }

  getEmpData(emp_id) {
    var url = environment.baselink + environment.servicesprefix + "/rest/erp/";
    var auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "info_confirmations/info/" + emp_id, {
      headers: headers
    });
  }

  getStdData(std_id) {
    var url = environment.baselink + environment.servicesprefix + "/rest/public/";
    var auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "stds/get_stds_info/" + std_id, {
      headers: headers
    });
  }

  getResumeAdminUsers() {
    var url = environment.baselink + environment.servicesprefix + "/rest/resume/";
    var auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "api/get_admin_users", {
      headers: headers
    });
  }

  getTraficUsers() {
    var url = environment.baselink + environment.servicesprefix + "/rest/trafic/";
    var auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "trafic/get_users", {
      headers: headers
    });
  }

  getDistrictsByCityId(cityId) {
    var url = environment.baselink + environment.servicesprefix + "/rest/erp/";
    var auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "info_confirmations/districts/" + cityId, {
      headers: headers
    });
  }

  getCities() {
    var url = environment.baselink + environment.servicesprefix + "/rest/erp/";
    var auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.get(url + "info_confirmations/cities", {
      headers: headers
    });
  }

  updateEmpInfo(data) {
    var url = environment.baselink + environment.servicesprefix + "/rest/erp/";
    var auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "info_confirmations/update", {
      id: data.id,
      FIRST_NAME: data.FIRST_NAME,
      FATHER_NAME: data.FATHER_NAME,
      MID_NAME: data.MID_NAME,
      LAST_NAME: data.LAST_NAME,
      FIRST_NAME_S: data.FIRST_NAME_S,
      FATHER_NAME_S: data.FATHER_NAME_S,
      MID_NAME_S: data.MID_NAME_S,
      LAST_NAME_S: data.LAST_NAME_S,
      NATIONAL_ID: data.NATIONAL_ID,
      ACTUAL_DEPT_DESC: data.ACTUAL_DEPT_DESC,
      MOBILE_NO: data.MOBILE_NO,
      WORK_EMAIL: data.WORK_EMAIL,
      EMAIL: data.EMAIL,
      TWITTER_ID: data.TWITTER_ID,
      BUILDING_NO: data.BUILDING_NO,
      STREET_NAME: data.STREET_NAME,
      DISTRICT: data.DISTRICT,
      CITY: data.CITY,
      POSTAL_CODE: data.POSTAL_CODE,
      ADDITIONAL_NUMBER: data.ADDITIONAL_NUMBER,
      idPhoto: data.idPhoto,
      workPhoto: data.workPhoto,
      idFileName: data.idFileName,
      idFileNameWork: data.idFileNameWork,
      nameCheck: data.nameCheck,
      ssnCheck: data.ssnCheck,
      workCheck: data.workCheck,
      emailWorkCheck: data.emailWorkCheck,
    }, { headers: headers });
  }

  updateStudentVaccineStatus(data) {
    var url = environment.baselink + environment.servicesprefix + "/rest/vaccine/";
    var auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    return this.http.post(url + "status/update", data, { headers: headers });
  }
}
