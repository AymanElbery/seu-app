import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  reqData;
  msgs;
  reqNo;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdservicesapi";
  }
  getِRequests() {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.GetRequest('student_info_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.postRequest('student_info_service/update', data).toPromise();
  }
  DownloadPhoto() {
    this.configService.baseUrl = "stdservicesapi";
    return this.configService.getApiURI() + '/student_info_service/download/photo';
  }
  DownloadCv() {
    this.configService.baseUrl = "stdservicesapi";
    return this.configService.getApiURI() + '/student_info_service/download/cv';
  }
}

