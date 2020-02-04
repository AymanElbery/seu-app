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
    return 'YjQwNjIyOWMtZDA5MS00NzE2LTlkYTUtNDZlYWQzZjg1NzIwfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }
}
