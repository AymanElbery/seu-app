import { Injectable } from '@angular/core';
import { GlobalBaseService } from './global-base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService extends GlobalBaseService {

  relogin() {
    localStorage.removeItem('sid');
    window.location.href = environment.ssolink + '/' + environment.loginpage;
  }
  getSID(): string {
    //return localStorage.getItem('sid');
    return localStorage.getItem('access_token');
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }


  getItem(key): string {
    return localStorage.getItem(key);
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  constructor() {
    super();
  }


}
