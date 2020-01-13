import { Injectable } from '@angular/core';
import { GlobalBaseService } from './global-base.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService extends GlobalBaseService {

  constructor() {
    super();
  }

  getSID() {
    return 'N2M1ODViNzQtYWNjMS00NDE1LThkMzgtN2ZlOGZhNWJjOGY4fFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0=';
  }
}
