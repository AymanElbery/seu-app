import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class InfoUpdateService {
  cities = [];
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }

  getRequest() {
    this.configService.baseUrl = 'stdsUnivapi'

    return this.httRequest.GetRequest('student_info_service').toPromise();
  }

  AddNewRequest(data) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.postRequest('student_info_service/update', data).toPromise();
  }


}
