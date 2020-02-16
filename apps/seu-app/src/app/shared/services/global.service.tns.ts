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
    return 'ODc5OTMyYzItOWJlZS00Y2QyLWExZGUtM2MzM2I1ZjkwZjhkfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }}