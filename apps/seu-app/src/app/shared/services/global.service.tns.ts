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
    return 'NDMzMjdmNDQtZWI0OS00OWIxLTg3MTktZDhjZGEzYTYwZDZlfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }}