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
    return 'MGZkNDNjZmYtZTUyMi00NDk2LTk5YmYtOWViYTA4YmU1MTg4fHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0=';
 }
}