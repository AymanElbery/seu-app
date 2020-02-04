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
    return 'NjgwYzlmZWEtMDQ5NS00NjdlLWI5MjMtZjlkMjIyOTYyNDMwfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }
}
