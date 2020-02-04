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
    return 'YTFkODYyNzItYzJmNy00OGU5LThjMzAtODI1MjYwMzFhZWIxfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }
}
