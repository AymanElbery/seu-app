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
    return 'MWE0OTNhMDgtZTViNi00OWIwLWIwMDktODJjZjc3YjRjM2NlfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }
}
