import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class MasterGraduatesAddressService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }

  getAddress() {
    this.configService.baseUrl = 'stdsUnivapi';
    return this.httRequest.GetRequest('/student_address_service/index').toPromise();
  }

  saveAddress(data) {
    this.configService.baseUrl = 'stdsUnivapi';
    return this.httRequest.postRequest('/student_address_service/update', data).toPromise();
  }

}
