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
    return 'MzRmYTIyYjYtNTVjNy00OTMzLWJmNDAtMzNlODU2ZTg3MWZhfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0=';
 }
}
