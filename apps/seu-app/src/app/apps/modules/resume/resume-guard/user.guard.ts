import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ResumeUserService } from '../services/resume-user'
import { map } from 'rxjs/operators';
import { ResumeServicesModule } from '../services/resume-service.module';

@Injectable({
  providedIn: ResumeServicesModule
})
export class ResumeUSERGuard implements CanActivate {
  constructor(
    private router: Router, 
    protected user: ResumeUserService, 
    private translate: TranslateService
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isLoggedIn();
  }
  hasTheRole() {
    return true;
  }
  isLoggedIn() {
    if (this.user.userLoaded) {
      return this.hasTheRole();
    }
    this.user.getUser();
    return this.user.userHasLoaded.pipe(
      map(() => {
        return this.hasTheRole();
      }
      )
    );
  }
}