import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { config } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http:HttpClient,private  configService:ConfigService) { }


  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
        "Content-Type": "application/json"
     });

    return headers;
}

private createAuthRequestHeader(toekn) {
  // set headers here e.g.
  let headers = new HttpHeaders({
    "Authorization":`Bearer ${toekn}`,
    "Content-Type": "application/json",
 });

  return headers;
}

    GetRequest(path:string)
   {

    let url=this.configService.getApiURI()+'/'+path;
  //  let headers= new Headers();
   // headers.append('Content-Type', 'application/json');
    let headers = this.createRequestHeader();

   // let options = new RequestOptions({ headers: headers });
    return this.http.post(url,{ headers: headers});
   }
   GetAuthRequest(path:string)
   {

    let url=this.configService.getApiURI()+'/'+path;
    let headers= new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem(this.configService.getToken());
    if(authToken)
    {
      let token=  JSON.parse(authToken);
      let toeknStr=token.auth_token;
      let headers = this.createAuthRequestHeader(toeknStr);

   // headers.append('Authorization', `Bearer ${toeknStr}`);
   // let options = new RequestOptions({ headers: headers });
    return this.http.get(url,{headers:headers});
    }
   }

   postRequest(path:string,body:any)
   {

    let url=this.configService.getApiURI()+'/'+path;
    let headers= this.createRequestHeader();
   // headers.append('Content-Type', 'application/json');
  //  let options = new RequestOptions({ headers: headers });
  
    return this.http.post(url,JSON.stringify(body),{headers:headers});
   }
   postAuthRequest(path:string,body:any)
   {

    let url=this.configService.getApiURI()+'/'+path;
   /// let headers= new Headers();
  //  headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem(this.configService.getToken());
    if(authToken)
    {
      let token=  JSON.parse(authToken);
      let toeknStr=token.auth_token;
     let headers=this.createAuthRequestHeader(toeknStr);
   // headers.append('Authorization', `Bearer ${toeknStr}`);
    //let options = new RequestOptions({ headers: headers });
    return this.http.post(url,JSON.stringify(body),{headers:headers});
    }
   }
}
