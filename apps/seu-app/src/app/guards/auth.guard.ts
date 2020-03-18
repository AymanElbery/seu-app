import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagerService } from '../shared/services/user-manager.service';
import { UserService } from '../account/services/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private userService: UserService, private http: HttpClient) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isLoggedIn();
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    //console.log("canActivateChild");
    return this.isLoggedIn();
  }
  canLoad(): boolean | Observable<boolean> {
    return this.isLoggedIn();
  }

  isLoggedIn() {
    if (this.userService.userDataLoaded) {
      return true;
    }
    this.http.jsonp(environment.ssolink + '/sess.php', "callback").subscribe(
      res => {
        localStorage.setItem('sid', encodeURI(res['csid']));
        this.userService.loadUserData();
        return true;
      },
      error => {
        this.userService.relogin();
        return false;
      });
  }

}
