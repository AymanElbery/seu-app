import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { BBReportService } from '../services/bb.report.service';
import { BBServicesModule } from '../bb-services.module';

@Injectable({
  providedIn: BBServicesModule
})
export class BBUSERGuard implements CanActivate {
  constructor(
    private router: Router,
    protected user: BBReportService,
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