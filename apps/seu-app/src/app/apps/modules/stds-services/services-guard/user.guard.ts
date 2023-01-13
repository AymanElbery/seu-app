import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router'; import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { StudentServicesModule } from '../services/student-services.module';
import { StudentService } from '../services/student.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: StudentServicesModule
})
export class STDServicesUSERGuard implements CanActivate, CanLoad {
  from_component;
  constructor(protected router: Router, protected translate: TranslateService, protected stdsService: StudentService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    this.from_component = route.data["from_component"] as string;
    return this.isLoggedIn(state);
  }
  canLoad(): boolean | Observable<boolean> {
    return this.isLoggedIn('');
  }
  isActiveService(state) {
    if (!this.stdsService.isLoggedIn) {
      this.stdsService.redirect_login();
      return false;
    }
    return true;
  }

  isLoggedIn(state) {
    if (this.stdsService.userLoaded) {
      return this.isActiveService(state);
    }

    return this.stdsService.userLoadedObservable.pipe(
      map((response) => {
        return this.isActiveService(state);
      }));
  }
}