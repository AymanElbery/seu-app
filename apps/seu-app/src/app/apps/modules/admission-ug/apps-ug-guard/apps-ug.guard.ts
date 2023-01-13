import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppUserService } from 'src/app/apps/services/app-user.service';
import { environment } from 'src/environments/environment';
import { AdmissionUGService } from '../services/admission-ug.service';
import { map } from 'rxjs/operators';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppsUgGuard implements CanActivate {
  constructor(private router: Router, private appToasterService: AppToasterService, private translate: TranslateService, private admissionugService: AdmissionUGService, private http: HttpClient) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isLoggedIn(state);
  }
  isActiveService(state) {
    const curr_url = state['url'].replace('/apps/admission-ug/', '');
    let service_status = true;
    switch (curr_url) {
      case 'admission-result': {
        service_status = this.admissionugService.settings['ADMISSION_RESULT_SERVICE'] == 1;
        break;
      }
      case 'pay-fee': {
        service_status = this.admissionugService.settings['CHECK_DATA_SERVICE'] == 1;
        break;
      }
      case 'match-documents': {
        service_status = this.admissionugService.settings['CHECK_DATA_SERVICE'] == 1;
        break;
      }
      case 'upload-documents': {
        service_status = this.admissionugService.settings['UPLOAD_FILES_SERVICE'] == 1;
        break;
      }
      case 'payment-refund': {
        service_status = this.admissionugService.settings['UPLOAD_FILES_SERVICE'] == 1;
        break;
      }
    }
    if (!service_status) {
      this.appToasterService.push([{ type: 'error', body: this.translate.instant('service_closed') }]);
    }
    if (curr_url != 'payment-refund' && this.admissionugService.isLoggedIn && this.admissionugService.LoggedInUser['APDC_CODE1'] == '04') {
      service_status = false;
    }

    return service_status;
  }
  isLoggedIn(state) {
    let checkLogin = true;
    if (this.admissionugService.settingsLoaded) {
      if (!this.isActiveService(state)) {
        return false;
      }
    }
    const curr_url = state['url'].replace('/apps/admission-ug/', '');
    if (curr_url == 'admission-result') {
      checkLogin = false;
    }
    if (checkLogin && !this.admissionugService.isLoggedIn) {
      this.router.navigate(['/apps/admission-ug/ug-login/']);
      return false;
    }
    if (this.admissionugService.settingsLoaded) {
      return this.isActiveService(state);
    }

    return this.admissionugService.settingsObservable.pipe(
      map(
        (res) => {
          return this.isActiveService(state);
        }
      )
    );
  }
}