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
    return 'ZDU2MWM0ZjItZTgzZi00NzhiLTg5ODAtMWZhYTdkMTg2OGZifEZVVlBPb3VQSUNMSnJ3a0NIemVTUk5GUUJrMD0=';
}
}
