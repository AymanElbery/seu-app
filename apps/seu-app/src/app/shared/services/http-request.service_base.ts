import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { config } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalBaseService } from './global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestServiceBase {


  constructor(
    protected translate: TranslateService,
    protected http: HttpClient,
    protected configService: ConfigService,
    protected globalService: GlobalBaseService) { }


  protected createRequestHeader() {
    // const sid = localStorage.getItem('sid');
    const sid = this.globalService.getSID();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Session-ID': sid
    });
    //// console.log(headers);
    return headers;
  }

  protected createAuthRequestHeader(toekn) {
    // set headers here e.g.
    const headers = new HttpHeaders({
      Authorization: `Bearer ${toekn}`,
      'Content-Type': 'application/json',
    });
    return headers;
  }

  GetFullUrlRequest(path: string) {
    const url = path;
    //  let headers= new Headers();
    // headers.append('Content-Type', 'application/json');
    const headers = this.createRequestHeader();
    const authToken = this.globalService.getSID();

    // let options = new RequestOptions({ headers: headers });
    return this.http.get(url, { headers });
  }
  GetAuthRequest(path: string) {

    const url = this.configService.getApiURI() + '/' + path;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = this.globalService.getItem(this.configService.getToken());
    if (authToken) {
      const token = JSON.parse(authToken);
      const toeknStr = token.auth_token;
      // tslint:disable-next-line: no-shadowed-variable
      const headers = this.createAuthRequestHeader(toeknStr);

      // headers.append('Authorization', `Bearer ${toeknStr}`);
      // let options = new RequestOptions({ headers: headers });
      return this.http.get(url, { headers });
    }
  }
  relogin() {
    this.globalService.relogin();
  }
  requestUser() {
    const url = environment.whoami_service;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'sid': this.globalService.getSID()
    });
    return this.http.get(url, { headers });
  }

  creatAuthHeader() {
    // alert('hi');
    const auth = `Basic ${window.btoa(environment.basicAuth)}`;
    // alert(auth);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: auth
    });
    return headers;
  }

  postAuthRequest(path: string, body: any) {

    const url = this.configService.getApiURI() + path;
    // alert(url);

    const headers = this.creatAuthHeader();
    return this.http.post(url, JSON.stringify(body), { headers });
  }

  getNotinficationsAuth() {
    return `Basic ${window.btoa(environment.basicAuth)}`;
  }
  getSSOAuth() {
    // alert('10');
    return `Basic ${window.btoa(environment.basicAuth)}`;
  }

}
