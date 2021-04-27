import { Injectable } from '@angular/core';
import { AppUserRootService } from '../../../services/app-user-root.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends AppUserRootService {

  constructor(router: Router, globalService: GlobalBaseService, http: HttpClient, translate: TranslateService, toaster: AppToasterService) {
    super(router, globalService, translate, toaster, http)
  }
  getApiURI() {
    return environment.baselink + environment.servicesprefix + "/support/";
  }
  getHeader() {
    let headers = new HttpHeaders({
      //'Content-Type': 'application/json',
      'Authorization': `Basic ${window.btoa('support:support@202020')}`
    });
    return headers;
  }
  checkdown() {
    return this.get('/contactus/support/checkdown');
  }
  getLookups() {
    return this.get('/contactus/support/contactus_lockups');
  }
  addLoginRequest(data) {
    return this.post('/contactus/support/add_login_request', data);
  }
  addSuggestRequest(data) {
    return this.post('/contactus/support/add_suggest_request', data);
  }
  getRequestDetails(data) {
    return this.post('/contactus/support/details', data);
  }
  download(data) {
    return this.post('/contactus/support/download', data);
  }
  addNote(data) {
    return this.post('/contactus/support/add_note', data);
  }


}


