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
    return 'NjVhYzVmMTgtYzAzMi00ODQ4LThjNzctNmM3NDJmY2JmZjZkfEZVVlBPb3VQSUNMSnJ3a0NIemVTUk5GUUJrMD0='; }
}
