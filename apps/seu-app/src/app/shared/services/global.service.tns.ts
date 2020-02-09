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
    return 'YzA3Mjg0NDEtOWRlMS00ZTgyLTg5OTctZTg4NWUxODNjZGRmfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }}