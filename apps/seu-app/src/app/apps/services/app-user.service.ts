import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';


@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  LoggedInUser;
  LoggedInToken;
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

  appRedirect() {
    this.router.navigate(['/apps']);
  }

  logout() {
    // add custom code
    this.globalService.removeItem(this.tokenKey);
    this.globalService.removeItem(this.userKey);
    this.LoggedInToken = null;
    this.LoggedInUser = null;
    this.appRedirect();
  }

}

