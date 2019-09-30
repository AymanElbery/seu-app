import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectExamService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getRequests() {

   return this.httRequest.GetRequest('exam_objections_service').toPromise();
  }
  getgetRequests() {

    return this.httRequest.GetRequest('exam_objections_service?std_id=S160239561').toPromise();
   }
  AddRequest(data) {
      return this.httRequest.postRequest('exam_objections_service/insert?', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('exam_objections_service/remove/' + id+ '?std_id=S160239561').toPromise();

  }
}
