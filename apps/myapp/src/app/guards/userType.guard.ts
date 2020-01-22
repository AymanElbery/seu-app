import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagerService } from '../shared/services/user-manager.service';
import { UserService } from '../account/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(protected router: Router, protected userService: UserService) {

  }
  canActivate(): boolean | Observable<boolean> {
    return this.isLoggedIn();
  }
  canActivateChild(): boolean | Observable<boolean> {
    return this.isLoggedIn();
  }
  canLoad(): boolean | Observable<boolean> {
    return this.isLoggedIn();
  }
  getLoginAsType() {
    return ''
  }
  checkGuardRole() {
    return false;
  }
  isLoggedIn() {
    if(this.checkGuardRole()){
      return true;
    }
    if (this.userService.userData.activeRole == this.getLoginAsType() || this.userService.userData.act_as_student) {
      return true;
    }
    return false;
  }

}