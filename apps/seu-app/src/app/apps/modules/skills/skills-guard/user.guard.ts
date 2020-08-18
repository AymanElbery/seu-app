import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { SkillsUserService } from '../services/skill-user'
import { map } from 'rxjs/operators';
import { SkillsModule } from '../skills.module';

@Injectable({
  providedIn: SkillsModule
})
export class SkillsUSERGuard implements CanActivate {
  constructor(private router: Router, protected user: SkillsUserService, private translate: TranslateService) {

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