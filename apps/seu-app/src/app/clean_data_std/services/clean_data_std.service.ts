import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Injectable({
  providedIn: 'root'
})
export class Clean_data_stdService {
  _settings;
  URL = environment.baselink + environment.servicesprefix + environment.common + "/erp/";
  auth = `Basic ${window.btoa('emp:Emp@201620')}`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.auth
  });

  constructor(
    private http: HttpClient,
    private globalService: GlobalBaseService,
    private translate: TranslateService,
    private toaster: AppToasterService
  ) {

  }

  notifyError(code) {
    this.toaster.push([{ type: 'error', 'body': this.translate.instant('teaching_load.messages.' + code) }]);
  }

  notifySucc(code) {
    this.toaster.push([{ type: 'success', 'body': this.translate.instant('teaching_load.messages.' + code) }]);
  }

  tryagain() {
    this.toaster.tryagain();
  }

  getHeader() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth
    });
    if (this.globalService.getSID()) {
      headers = headers.append('sessionid', this.globalService.getSID());
    }
    return headers;
  }

  get(url) {
    return this.http.get(this.URL + url, {
      headers: this.getHeader()
    }).pipe(
      map((res: any) => {
        if (!res.status && (res.res_code == 'invalid_user' || res.res_code == 'invalid_session')) {
          this.globalService.relogin();
        }
        return res;
      })
    );
  }

  post(url, data) {
    return this.http.post(this.URL + url, data,
      {
        headers: this.getHeader(),
      }).pipe(
        map((res: any) => {
          if (!res.status && (res.res_code == 'invalid_user' || res.res_code == 'invalid_session')) {
            this.globalService.relogin();
          }
          return res;
        })
      );
  }

  settings() {
    if (this._settings) {
      return of(this._settings);
    }
    return this.get('teaching_load/user').pipe(map(response => {
      if (response['status']) {
        let setting = {
          show_menu: false,
          menu_hod: false,
          menu_dean: false,
          menu_hr: false,
        };

        if (response['data']['hod']) {
          setting.show_menu = true;
          setting.menu_hod = true;
        }

        if (response['data']['dean']) {
          setting.show_menu = true;
          setting.menu_dean = true;
        }

        if (response['data']['hr']) {
          setting.show_menu = true;
          setting.menu_hr= true;
        }

        this._settings = setting;
        return setting;
      } else {
        return {};
      }
    }));
  }
}
