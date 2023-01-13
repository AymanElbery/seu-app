import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CourseGPAService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdservicesapi";
  }

  getِgetRequests() {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.GetRequest('Courses_gpa_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.postRequest('Courses_gpa_service/insert', data).toPromise();
  }
  deleteReq() {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.GetRequest('Courses_gpa_service/remove').toPromise();
  }
}
