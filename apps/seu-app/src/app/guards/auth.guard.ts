import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagerService } from '../shared/services/user-manager.service';
import { UserService } from '../account/services/user.service';
import { HttpClient } from '@angular/common/http';

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
      //console.log("isLoggedIn  true");
      return true;
    }
    this.http.jsonp('https://seuapps.seu.edu.sa/sso/sess.php', "callback").subscribe(
      res => {
        localStorage.setItem('sid', res['sid']);
        this.userService.loadUserData();
        //console.log("isLoggedIn  true 222222");
        return true;
      },
      error => {
        this.userService.relogin();
        //console.log("isLoggedIn  false");
        return false;
      });
  }

}
