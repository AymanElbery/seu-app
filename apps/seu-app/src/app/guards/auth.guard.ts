import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../account/services/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private userService: UserService, private http: HttpClient) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isLoggedIn();
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    //console.log("canActivateChild");
    return this.isLoggedIn();
  }
  canLoad(): Observable<boolean> {
    return this.isLoggedIn();
  }

  isLoggedIn() {
    if (this.userService.userDataLoaded) {
      return of(true);
    }
    return this.http.jsonp(environment.ssolink + '/sess.php', "callback").pipe(
      map(res => {
        localStorage.setItem('sid', encodeURI(res['csid']));
        this.userService.loadUserData();
        return true;
      }),
      catchError((err, caugth) => {
        this.userService.relogin();
        return of(false);
      })
    );
  }

}
