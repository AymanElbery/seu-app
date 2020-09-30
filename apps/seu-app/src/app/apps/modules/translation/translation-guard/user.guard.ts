import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslationUserService } from '../services/translation-user'
import { map } from 'rxjs/operators';
import { TranslationServicesModule } from '../services/translation-service.module';

@Injectable({
  providedIn: TranslationServicesModule
})
export class TranslationUSERGuard implements CanActivate {
  constructor(
    private router: Router, 
    protected user: TranslationUserService, 
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