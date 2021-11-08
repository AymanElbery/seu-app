import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { config } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalBaseService } from './global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { HttpRequestServiceBase } from './http-request.service_base';
import { UserService } from '../../account/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService extends HttpRequestServiceBase {


  constructor(translate: TranslateService,
    http: HttpClient,
    configService: ConfigService,
    globalService: GlobalBaseService,
    private userService: UserService) {
    super(translate, http, configService, globalService);
  }

  setStudentIdHeader(url, headers) {
    if (
      url.includes('stdservicesapi') || 
      url.includes('stdsUnivapi') ||
      url.includes('std_api_diplome') ||
      url.includes('ud_api') ||
      url.includes('gr_api') 
    ) {
      headers = headers.append('Student-ID', this.userService.userData.username);
    }
    return headers;
  }

  GetRequest(path: string, addlng = true) {
    let url = this.configService.getApiURI() + '/' + path;
    if (addlng) {
      const langString = (path.indexOf('?') == -1 ? '?' : '&') + 'lang=' + this.translate.currentLang;
      url += langString;
    }
    let headers = this.createRequestHeader();
    headers = this.setStudentIdHeader(url, headers);
  
    return this.http.get(url, { headers });
  }

  postRequest(path: string, body: any, addlng = true) {
    let url = this.configService.getApiURI() + '/' + path;
    if (addlng) {
      const langString = (path.indexOf('?') == -1 ? '?' : '&') + 'lang=' + this.translate.currentLang;
      url += langString;
    }
    let headers = this.createRequestHeader();
    headers = this.setStudentIdHeader(url, headers);
    return this.http.post(url, JSON.stringify(body), { headers });
  }
}
