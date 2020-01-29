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
    return 'NzNmYjM0NWMtNWUzNy00ZWMxLWIxMzYtMmQ3NTdjYWZiNjYzfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0=';
 }
}
