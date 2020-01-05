import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class GraduateProfileService {

  reqData;
  msgs;
  reqDataDetail;
  msgsDetail;
  request_number;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }
  getRequest() {
    this.configService.baseUrl = "stdsUnivapi";

    
    return this.httRequest.GetRequest('grade_info_service').toPromise();
  }

  getDetails() {
    this.configService.baseUrl = "stdsUnivapi";

    
    return this.httRequest.GetRequest('grade_info_service/details/'+this.request_number).toPromise();
  }


  deleteReq(id) {
    this.configService.baseUrl = "stdsUnivapi";

    return this.httRequest.GetRequest('grade_info_service/remove/' + id ).toPromise();

  }

  AddRequest(data) {
    this.configService.baseUrl = "stdsUnivapi";

    return this.httRequest.postRequest('grade_info_service/insert', data).toPromise();
}
}
