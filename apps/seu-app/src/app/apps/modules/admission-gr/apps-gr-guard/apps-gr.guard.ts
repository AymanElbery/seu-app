import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdmissionGRService } from '../services/admission-gr.service';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AppsGrGuard implements CanActivate {

  constructor(private router: Router, private appToasterService: AppToasterService, private translate: TranslateService, private admissiongrService: AdmissionGRService, private http: HttpClient) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isLoggedIn(state);
  }
  isActiveService(state) {
    const curr_url = state['url'].replace('/apps/admission-gr/', '');
    let service_status = true;
    switch (curr_url) {
      case 'admission-result': {
        service_status = this.admissiongrService.settings['ADMISSION_RESULT_SERVICE'] == 1;
        break;
      }
      case 'pay-fee': {
        service_status = this.admissiongrService.settings['CHECK_DATA_SERVICE'] == 1;
        break;
      }
      case 'upload-documents': {
        service_status = this.admissiongrService.settings['UPLOAD_FILES_SERVICE'] == 1;
        break;
      }
    }
    if (!service_status) {
      this.appToasterService.push([{ type: 'error', body: this.translate.instant('service_closed') }]);
    }
    return service_status;
  }
  isLoggedIn(state) {
    let checkLogin = true;
    const curr_url = state['url'].replace('/apps/admission-gr/', '');
    if (curr_url == 'admission-result') {
      checkLogin = false;
    }
    if (checkLogin && !this.admissiongrService.isLoggedIn) {
      this.router.navigate(['/apps/admission-gr/gr-login/']);
      return false;
    }
    if (this.admissiongrService.settingsLoaded) {
      return this.isActiveService(state);
    }
    return this.admissiongrService.settingsObservable.pipe(
      map(
        (res) => {
          return this.isActiveService(state);
        }
      )
    );
  }
}