import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../account/services/user.service';
import { UserTypeGuard } from './userType.guard';

@Injectable({
  providedIn: 'root'
})
export class UDGuard extends UserTypeGuard {

  constructor(router: Router, userService: UserService) {
    super(router, userService);
  }
  checkGuardRole() {
    if (this.userService.userData.act_as_student) {
      return true;
    }
    if (this.userService.userData.role != this.getLoginAsType()) {
      return false;
    }
    if (this.userService.userData.level != 'UD') {
      return false;
    }
    return true;
  }
  getLoginAsType() {
    return 'Student';
  }
}
