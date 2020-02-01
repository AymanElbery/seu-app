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
    return 'YTk2ZGFlNDAtZTc2Yi00NTJkLWE0YjctZWY1ZWJhNjczMDU3fEZVVlBPb3VQSUNMSnJ3a0NIemVTUk5GUUJrMD0='; }
}
