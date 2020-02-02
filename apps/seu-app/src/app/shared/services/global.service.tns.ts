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
    return 'MGUzZTM0ZmItYjk5ZS00ODk2LTkwYzgtMWM4N2E2NGFlNDczfEZVVlBPb3VQSUNMSnJ3a0NIemVTUk5GUUJrMD0='; 
}
}
