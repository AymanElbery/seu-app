import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class VisitorStudentService {
  reqData;
  msgs;

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getِgetRequests() {
    //?std_id=S180105049
    //?std_id=S160239561
    //?std_id=S190000060
    //?std_id=S120000101
    //?std_id=S180372820
    return this.httRequest.GetRequest('visitor_student_service?std_id=S180372820').toPromise();
  }


  deleteReq(id) {
    //+ '?std_id=S120000101'
    return this.httRequest.GetRequest('visitor_student_service/remove/' + id).toPromise();

  }

  AddRequest(data) {

    return this.httRequest.postRequest('visitor_student_service/insert', data).toPromise();
  }

  Download(req) {

    return this.configService.getApiURI() + '/visitor_student_service/download/' + req ;
  }
}
