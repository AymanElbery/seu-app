import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CancelCourseService {
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getRequest() {
    
    return this.httRequest.GetRequest('course_cancel').toPromise();
  }
  AddRequest(data) {
    return this.httRequest.postRequest('Course_cancel_service/insert', data).toPromise();
}
  deleteReq(id) {
    return this.httRequest.GetRequest('Course_cancel_service/remove/' + id ).toPromise();

  }
}
