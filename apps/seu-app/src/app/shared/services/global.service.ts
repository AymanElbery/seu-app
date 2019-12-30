import { Injectable } from '@angular/core';
import { GlobalBaseService } from './global-base.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService extends GlobalBaseService {
  getSID(): string {
    return localStorage.getItem('sid');
  }

  constructor() {
    super();
  }


}
