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
    return 'M2E1MGVlMmEtYjAxZi00NjI2LTk5MmMtMzI0NmQzNDczNDNmfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }}