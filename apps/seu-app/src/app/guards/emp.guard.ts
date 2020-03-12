import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagerService } from '../shared/services/user-manager.service';
import { UserService } from '../account/services/user.service';
import { UserTypeGuard } from './userType.guard';

@Injectable({
  providedIn: 'root'
})
export class EmpGuard extends UserTypeGuard {

  constructor(router: Router, userService: UserService) {
    super(router, userService);
  }
  checkGuardRole() {
    if (this.userService.userData.role == 'Employee') {
      return true;
    }
    if (this.userService.userData.role == 'Instructor') {
      return true;
    }
    return false;
  }
  getLoginAsType() {
    return 'Employee';
  }
}
