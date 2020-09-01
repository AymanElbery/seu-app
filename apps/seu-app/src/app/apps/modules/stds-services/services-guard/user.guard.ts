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
  constructor(private router: Router, private translate: TranslateService, private stdsService: StudentService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isLoggedIn(state);
  }
  canLoad(): boolean | Observable<boolean> {
    return this.isLoggedIn('');
  }
  isActiveService(state) {
    return true;
  }

  isLoggedIn(state) {

    if (this.stdsService.userLoaded) {
      return this.stdsService.isLoggedIn;
    }

    return this.stdsService.userLoadedObservable.pipe(
      map((response) => {
        return this.stdsService.isLoggedIn;
      }));
  }
}