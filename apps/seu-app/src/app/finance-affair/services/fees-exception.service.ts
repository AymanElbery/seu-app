import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class FeesExceptionService {
  reqData;
  msgs;
  newreqs = false;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getِgetRequests() {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.GetRequest('fees_exception_service').toPromise();
  }


  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';
    // + '?std_id=S120000101'
    return this.httRequest.GetRequest('fees_exception_service/remove/' + id).toPromise();

  }

  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';
    // console.log(data);
    return this.httRequest.postRequest('fees_exception_service/insert', data).toPromise();
  }
}
