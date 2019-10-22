import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { config } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient, private  configService: ConfigService) { }


  private createRequestHeader() {
    // set headers here e.g.
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });

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

    GetRequest(path: string) {

    const url = this.configService.getApiURI() + '/' + path;
    console.log(url);
  //  let headers= new Headers();
   // headers.append('Content-Type', 'application/json');
    const headers = this.createRequestHeader();

   // let options = new RequestOptions({ headers: headers });
    return this.http.get(url, { headers});
   }
   GetFullUrlRequest(path: string) {

    const url =  path;
  //  let headers= new Headers();
   // headers.append('Content-Type', 'application/json');
    const headers = this.createRequestHeader();

   // let options = new RequestOptions({ headers: headers });
    return this.http.post(url, { headers});
   }
   GetAuthRequest(path: string) {

    const url = this.configService.getApiURI() + '/' + path;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem(this.configService.getToken());
    if (authToken) {
      const token =  JSON.parse(authToken);
      const toeknStr = token.auth_token;
      // tslint:disable-next-line: no-shadowed-variable
      const headers = this.createAuthRequestHeader(toeknStr);

   // headers.append('Authorization', `Bearer ${toeknStr}`);
   // let options = new RequestOptions({ headers: headers });
      return this.http.get(url, {headers});
    }
   }

   postRequest(path: string, body: any) {

    const url = this.configService.getApiURI() + '/' + path;
    const headers = this.createRequestHeader();
   // headers.append('Content-Type', 'application/json');
  //  let options = new RequestOptions({ headers: headers });

    return this.http.post(url, JSON.stringify(body), {headers});
   }
   postAuthRequest(path: string, body: any) {

    const url = this.configService.getApiURI() + '/' + path;
   /// let headers= new Headers();
  //  headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem(this.configService.getToken());
    if (authToken) {
      const token =  JSON.parse(authToken);
      const toeknStr = token.auth_token;
      const headers = this.createAuthRequestHeader(toeknStr);
   // headers.append('Authorization', `Bearer ${toeknStr}`);
    // let options = new RequestOptions({ headers: headers });
      return this.http.post(url, JSON.stringify(body), {headers});
    }
   }
}
