import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { config } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalBaseService } from './global-base.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {


  constructor(private translate: TranslateService, private http: HttpClient, private configService: ConfigService, private globalService: GlobalBaseService) { }


  private createRequestHeader() {

    // const sid = localStorage.getItem('sid');
    const sid = this.globalService.getSID();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Session-ID': sid

    });

    //// console.log(headers);
    return headers;
  }

  private createAuthRequestHeader(toekn) {
    // set headers here e.g.
    const headers = new HttpHeaders({
      Authorization: `Bearer ${toekn}`,
      'Content-Type': 'application/json',
    });

    return headers;
  }

  GetRequest(path: string,addlng=true) {
    let url = this.configService.getApiURI() + '/' + path;
    if(addlng){
      let langString = (path.indexOf("?") == -1 ? "?" : "&") + 'lang=' + this.translate.currentLang;
      url += langString;
    }
    //// console.log('url:' + url);
    //  let headers= new Headers();
    // headers.append('Content-Type', 'application/json');
    const headers = this.createRequestHeader();

    // let options = new RequestOptions({ headers: headers });

    return this.http.get(url, { headers });
  }
  GetFullUrlRequest(path: string) {

    const url = path;
    //  let headers= new Headers();
    // headers.append('Content-Type', 'application/json');
    const headers = this.createRequestHeader();
    const authToken = localStorage.getItem('sid');

    // let options = new RequestOptions({ headers: headers });
    return this.http.get(url, { headers });
  }
  GetAuthRequest(path: string) {

    const url = this.configService.getApiURI() + '/' + path;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem(this.configService.getToken());
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

  postRequest(path: string, body: any) {

    const url = this.configService.getApiURI() + '/' + path;
    const headers = this.createRequestHeader();
    // headers.append('Content-Type', 'application/json');
    //  let options = new RequestOptions({ headers: headers });
    /* if (body == null)
       return this.http.post(url, { headers });
     else*/
    //// console.log(body);
    return this.http.post(url, JSON.stringify(body), { headers });
  }
  postAuthRequest(path: string, body: any) {

    const url = this.configService.getApiURI() + '/' + path;
    /// let headers= new Headers();
    //  headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem(this.configService.getToken());
    if (authToken) {
      const token = JSON.parse(authToken);
      const toeknStr = token.auth_token;
      const headers = this.createAuthRequestHeader(toeknStr);
      // headers.append('Authorization', `Bearer ${toeknStr}`);
      // let options = new RequestOptions({ headers: headers });
      return this.http.post(url, JSON.stringify(body), { headers });
    }
  }
}
