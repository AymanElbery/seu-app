import { Injectable } from '@angular/core';
import { AppUserRootService } from '../../../services/app-user-root.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { environment } from 'src/environments/environment';
import { of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ContactService extends AppUserRootService {

  _lookups_observ = new Subject<any>();
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
    return this.get('/contactus/contactus_sd/checkdown');
  }
  getLookups() {
    return this.get('/contactus/contactus_sd/contactus_lockups');
  }
  get_std_data(ssn) {
    return this.get('/contactus/contactus_sd/get_student_data/' + ssn);
  }
  addLoginRequest(data) {
    return this.post('/contactus/contactus_sd/add_login_request', data);
  }
  addSuggestRequest(data) {
    return this.post('/contactus/contactus_sd/add_suggest_request', data);
  }
  getRequestDetails(data) {
    return this.post('/contactus/contactus_sd/details', data);
  }
  download(data) {
    return this.post('/contactus/contactus_sd/download', data);
  }
  addNote(data) {
    return this.post('/contactus/contactus_sd/add_note', data);
  }

  items(category, _lookups, lang) {
    return _lookups['items'].filter(item => {
        return (lang == 'ar') ? item['CATEGORY'] == category : item['CATEGORY_EN'] == category;
    }).map(rec => {
        let item = {};
        item['text'] = (lang == 'ar') ? rec['ITEM'] : rec['ITEM_EN'];
        item['value'] = rec['ID'];
        return item;
    });
  }

  items_list(coll_code, _lookups, lang) {
    if (_lookups) {
        return of(this.items(coll_code, _lookups, lang));
    }
    return this._lookups_observ.pipe(
      map(() => {
          return this.items(coll_code, _lookups, lang);
      }));
  }


}


