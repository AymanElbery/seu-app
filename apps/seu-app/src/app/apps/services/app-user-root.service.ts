import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { AppUserService } from './app-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppUserRootService extends AppUserService {
  userLoaded: boolean = false;
  userLoadedObservable = new Subject();

  constructor(router: Router, globalService: GlobalBaseService,
    public translate: TranslateService,
    public toaster: AppToasterService,
    private http: HttpClient
  ) {
    super(router, globalService)
  }

  pushuserLoaded(data = {}) {
    this.userLoaded = true;
    this.userLoadedObservable.next(data);
  }

  notifyError(code) {
    this.toaster.push([{ type: "error", 'body': this.translate.instant("messages." + code) }]);
  }

  notifySucc(code) {
    this.toaster.push([{ type: "success", 'body': this.translate.instant("messages." + code) }]);
  }

  tryagain() {
    this.toaster.tryagain();
  }

  downloadPDF(response, fname = 'cert') {
    if (response['status']) {
      const linkSource = `data:application/pdf;base64,${response['data']['content']}`;
      const downloadLink = document.createElement("a");
      const fileName = fname + ".pdf";

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    } else {
      this.notifyError(response['res_code']);
    }
  }

  getApiURI() {
    return environment.baselink + environment.servicesprefix + "/rest/";
  }

  getHeader() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Basic ${window.btoa(environment.ssoAuth)}`
    });
    const session_id = this.globalService.getItem(this.tokenKey);
    if (session_id) {
      headers = headers.append('sessionid', session_id);
    }
    return headers;
  }

  redirect_login() {
  }

  get(url) {
    return this.http.get(this.getApiURI() + url, {
      headers: this.getHeader()
    }).pipe(
      map((res: any) => {
        if (!res.status && (res.res_code == "invalid_user" || res.res_code == "invalid_session")) {
          this.redirect_login();
        }
        return res;
      })
    );
  }

  post(url, data) {
    return this.http.post(this.getApiURI() + url, data, { headers: this.getHeader() }).pipe(
      map((res: any) => {
        if (!res.status && (res.res_code == "invalid_user" || res.res_code == "invalid_session")) {
          this.redirect_login();
        }
        return res;
      })
    );
  }
}

