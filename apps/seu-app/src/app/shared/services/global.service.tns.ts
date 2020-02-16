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
    return 'YjkzMjQxZjgtY2E3ZS00YmUwLTg5ZDktMDc2YTc5N2Y3N2FmfHdiSi9aQWRCcUQ1cEFEOGRFSUpBOTBESnpiRT0='; }}