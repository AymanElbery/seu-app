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
    return 'ZmUyNTY2YTEtOGM0ZC00NWJlLWJmNzEtOWJlNWI4YTg3M2Y0fEZVVlBPb3VQSUNMSnJ3a0NIemVTUk5GUUJrMD0='; }
}
