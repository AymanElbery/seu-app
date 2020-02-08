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
    return 'ZGNmMTE4NWMtMTMyYy00M2YzLWFjOWMtOTJhM2ExMjJiMWQ0fHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }}