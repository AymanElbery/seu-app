import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CancelCourseService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getِgetRequests() {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('course_cancel').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.postRequest('course_cancel/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('course_cancel/remove/' + id).toPromise();

  }

  Download(req) {

    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/course_cancel/download/crse_cancel/' + req + '?sid=' + sid;
  }
  DownloadEng(req) {
    const sid = this.configService.getSid();


    this.configService.baseUrl = 'stdservicesapi';

    return this.configService.getApiURI() + '/course_cancel/download/crse_cancel/' + req + '?Lang=en';
  }
}
