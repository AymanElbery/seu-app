import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalBaseService } from '../../shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { UserService } from '../../account/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class WafiHttpRequestService {

  constructor(private translate: TranslateService,
    private http: HttpClient,
    private user: UserService,
    private globalService: GlobalBaseService) { }


  getApiURI() {
    return environment.wafi_apilink;
  }
  GetRequest(path: string) {
    const url = this.getApiURI() + '/' + path;
    return this.http.get(url);
  }
  getempIdLoggedin() {
    return this.user.userData.id;
  }
  apllyBasicParams(obj) {
    obj.empId = this.user.userData.id;
    obj.lang = this.translate.currentLang == 'ar' ? 1 : 2;

    // tslint:disable-next-line: max-line-length
    obj.authorizationKey = 'RSUyZlJMR0tMc1QlMmJjRFAjdHQ1cms4Y3pPOWRmNk50K0BlR2ElMmJjYlZhY0ZhVklGUE5hazdlOU0lM2Q6JFlpOEVQR0VXRWI0YXE3JVZFd0xORClsVW9oMTUlMj1Pd2olMmZrUCUyZnlYTjUhVFM4SjN6cWs2RDRUbEdP';
    obj.sessionId = this.globalService.getSID();

    obj["empId"] = this.user.userData.id;

    return obj;
  }
  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  postRequest(path: string, body: any = {}) {
    const url = this.getApiURI() + path;
    body = this.apllyBasicParams(body);
    const headers = this.getHeaders();
    return this.http.post(url, JSON.stringify(body), { headers });
  }

  postRequest_obj(path: string, body: any = {}) {
    const url = this.getApiURI() + path;
    body = this.apllyBasicParams(body);
    const headers = this.getHeaders();
    //body.lang = this.translate.currentLang == 'ar' ? 1 : 2;

    try {
      return this.http.post(url, JSON.stringify(body), { headers });
    } catch (e) {  }
  }

}
