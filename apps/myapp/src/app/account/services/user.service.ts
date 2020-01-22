import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserRegistration } from '../../shared/models/user.registration.interface';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { BaseService } from '../../shared/services/base.service';
import { UserManagerService } from '../../shared/services/user-manager.service';
import { UserData } from 'src/app/shared/models/user-data';
import { BehaviorSubject } from 'rxjs';

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
  userDataLoaded: boolean;
  userDataSubject = new BehaviorSubject(null);
  newsData;
  eventsData;
  adsData;
  constructor(
    private configService: ConfigService,
    private httRequest: HttpRequestService
  ) {
    super();
    this.configService.baseUrl = 'stdservicesapi';
    // tslint:disable-next-line: max-line-length
    this.userData = {
      act_as_student: false,
      activeRole: '',
      camp: '',
      coll: '',
      id: '',
      level: '',
      major: '',
      name_ar: '',
      name_en: '',
      role: '',
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
    return this.httRequest.postRequest('accounts', body).pipe(
      map((res: any) => res),
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  relogin() {
    console.log('RELOGIN');
    localStorage.removeItem('sid');
    window.location.href = 'https://seuapps.seu.edu.sa/sso/login-ss.php';
  }
  login(userName, password) {
    // console.log('ser');
    return this.httRequest
      .postRequest('auth/login', { userName, password })
      .pipe(
        map((res: any) => res),
        catchError(err => {
          console.error(err);
          return err;
        })
      );
  }

  loadUserData() {
    this.configService.baseUrl = 'stdservicesapi';

    // console.log('log ueer data-----------------------------------------------------------------------------------');
    if (this.userDataLoaded !== true) {
      return this.httRequest
        .GetRequest('user')
        .toPromise()
        .then(res => {
          this.userData = (res as any).data;
          console.log('userdata:' + this.userData);
          this.userData.activeRole = this.userData.role;
          this.userDataLoaded = true;
          this.pushUserDataChanges();
          return this.userData;
        });
    }
  }
  loadUserDetailsData() {
    // console.log('user details  data');
    return this.httRequest.GetRequest('user').toPromise();
  }
  pushUserDataChanges() {
    this.userDataSubject.next(this.userData);
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
}