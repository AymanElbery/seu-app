import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ChineesCourseService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdservicesapi";
  }

  getِgetRequests() {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.GetRequest('chinese_course_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.postRequest('chinese_course_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.GetRequest('chinese_course_service/remove/' + id).toPromise();
  }
}
