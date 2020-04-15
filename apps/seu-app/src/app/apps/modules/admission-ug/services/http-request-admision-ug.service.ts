import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestAdmisionUgService {

  constructor(private translate: TranslateService,
    private http: HttpClient) { }


  getApiURI() {
    return environment.servie_admission_UG;
  }


  apllyBasicParams(obj) {

    obj["lang"] = this.translate.currentLang == 'ar' ? 1 : 2;
    return obj;
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }


  postRequest_obj(path: string, body: any = {}) {
    let url = this.getApiURI() + path;
    body = this.apllyBasicParams(body);
    const headers = this.getHeaders();
    //console.log("Parameter",body)
    return this.http.post(url, JSON.stringify(body), { headers });
  }

}
