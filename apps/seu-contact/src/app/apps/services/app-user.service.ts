import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';


@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  _LoggedInUser;
  _LoggedInToken;
  tokenKey = 'token';
  userKey = 'user';
  constructor(public router: Router, public globalService: GlobalBaseService) {
  }

  get fullName() {
    return '';
  }

  get isLoggedIn() {
    return false;
  }

  set LoggedInUser(data) {
    this._LoggedInUser = data;
  }
  get LoggedInUser() {
    return this._LoggedInUser;
  }
  set LoggedInToken(token) {
    this._LoggedInToken = token;
  }
  get LoggedInToken() {
    return this._LoggedInToken;
  }

  appRedirect() {
    this.router.navigate(['/apps']);
  }

  logout(redirect = true) {
    // add custom code
    this.globalService.removeItem(this.tokenKey);
    this.globalService.removeItem(this.userKey);
    this.LoggedInToken = null;
    this.LoggedInUser = null;
    if (redirect) {
      this.appRedirect();
    }
  }

}