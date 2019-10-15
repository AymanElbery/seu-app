import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class FeesExceptionService {
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getِgetRequests() {
    return this.httRequest.GetRequest('fees_exception_service').toPromise();
  }


  deleteReq(id) {
    //+ '?std_id=S120000101'
    return this.httRequest.GetRequest('registeration_helper_service/cancel/' + id).toPromise();

  }

  AddRequest(data) {

    return this.httRequest.postRequest('fees_exception_service/remove', data).toPromise();
  }
}
