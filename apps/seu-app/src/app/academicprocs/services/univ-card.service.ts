import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UvnivCardService {
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getِgetRequests() {

   return this.httRequest.GetRequest('card_university_service?std_id=S120000101').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('card_university_service/insert?std_id=S120000101', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('card_university_service/remove/' + id + '?std_id=S120000101').toPromise();

  }


}
