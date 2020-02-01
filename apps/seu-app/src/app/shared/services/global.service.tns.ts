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
    return 'ZDY3YmE5ZjMtY2I2YS00MzZlLTgyNjgtMDBkOTY3YTBkMmM4fEZVVlBPb3VQSUNMSnJ3a0NIemVTUk5GUUJrMD0='; }
}
