import { Injectable } from '@angular/core';
import { GlobalBaseService } from './global-base.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService extends GlobalBaseService {

  constructor() {
    super();
  }

  getItem(key): string {
    return "";
  }

  setItem(key, value) {
  }

  relogin() {

  }

  getSID() {
    return 'ZjE3N2EyMWItMzJlYS00N2Q3LTg2NTMtNGY0NWUxNmIyZjljfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0=';
  }
}
