import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { HttpRequestServiceBase } from 'src/app/shared/services/http-request.service_base';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  constructor(private http: HttpClient) {
  }

  getSSOAuth() {
    // alert('10');
    return 'Basic bm90czpOMHQhZmljQHRpMG4k';
  }
  request(service_url, addheaders) {
    const url = environment.baselink + environment.servicesprefix + service_url;
    addheaders['Content-Type'] = 'application/json';
    addheaders['Authorization'] = this.getSSOAuth();
    let headers = new HttpHeaders(addheaders);
    return this.http.get(url, { headers });
  }

  status(std_id, app) {
    return this.request(environment.common + '/pay/' + app + '/status', { student_id: std_id });
  }
  checkout(std_id, app) {
    return this.request(environment.common + '/pay/' + app + '/checkout', { student_id: std_id });
  }
  
  inquery(tid, app) {
    return this.request(environment.common + '/pay/' + app + '/inquery', { tid: tid });
  }
  

}

