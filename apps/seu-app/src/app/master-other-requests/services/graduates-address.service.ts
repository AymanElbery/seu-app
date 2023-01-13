import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MasterGraduatesAddressService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }

  getAddress() {
    this.configService.baseUrl = environment.gr;
    return this.httRequest.GetRequest('/student_address_service/index').toPromise();
  }

  saveAddress(data) {
    this.configService.baseUrl = environment.gr;
    return this.httRequest.postRequest('/student_address_service/update', data).toPromise();
  }

}
