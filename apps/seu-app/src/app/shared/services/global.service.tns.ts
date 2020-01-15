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
    return 'MDljYzRhODAtOGM5Ni00ZjRjLTgyODItYzQ1YmUzODY4N2Y3fFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0=';
  }
}
