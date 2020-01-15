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
    return 'Y2Q0MGY2ZjctODI1OC00MTkzLTlhYTQtNmU3Mjk0ZThiZjVmfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0=';
  }
}
