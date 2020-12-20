import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router'; import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { StudentServicesModule } from '../services/student-services.module';
import { StudentService } from '../services/student.service';
import { map } from 'rxjs/operators';
import { STDServicesUSERGuard } from './user.guard';

@Injectable({
  providedIn: StudentServicesModule
})
export class STDServicesUSERVerifiedGuard extends STDServicesUSERGuard implements CanActivate, CanLoad {
  constructor( router: Router, translate: TranslateService, stdsService: StudentService) {
    super(router,translate,stdsService);
  }
  isActiveService(state) {
    let isLoggedId = super.isActiveService(state);
    if(isLoggedId && this.stdsService.LoggedInUser['TOKEN_VERIFIED'] == 2){
      return true;
    }
    if(isLoggedId){
      this.router.navigate(['/apps/stds-services/sms-verification']);
      return false;
    }
    return false
  }
}