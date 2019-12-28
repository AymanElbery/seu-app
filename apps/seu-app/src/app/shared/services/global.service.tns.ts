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
    return 'NTJlMzRlNzktM2U4My00MGM2LTkyOWEtM2I4NmMwNjdlMzc0fFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0';
  }
}
