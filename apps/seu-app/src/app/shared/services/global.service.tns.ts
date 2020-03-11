import { Injectable } from '@angular/core';
import { GlobalBaseService } from './global-base.service';
import * as applicationSettings from 'tns-core-modules/application-settings';
@Injectable({
  providedIn: 'root'
})
export class GlobalService extends GlobalBaseService {

  
  constructor() {
    super();
  }

  getItem(key): string {
    return '';
  }

  setItem(key: string, value: string) {
    applicationSettings.setString(key, value);
  }
  setSid(value: string) {
    applicationSettings.setString('sid', value);


  }

  relogin() {

  }

  getSID() {

    return applicationSettings.getString('sid');
  //  return 'N2Q4NTI4NWQtYjQzYy00MDYyLTljZGItNjg4MjBlNTJkYTEzfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0=';
  }
}
