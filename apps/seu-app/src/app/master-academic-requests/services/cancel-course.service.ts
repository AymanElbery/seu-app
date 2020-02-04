
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
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getRequest() {
    this.configService.baseUrl = 'stdsUnivapi';


    return this.httRequest.GetRequest('course_cancel_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.postRequest('course_cancel_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.GetRequest('course_cancel_service/remove/' + id).toPromise();
  }
  Download(req) {
    this.configService.baseUrl = 'stdsUnivapi';
    const sid = this.configService.getSid();


    return this.configService.getApiURI() + '/course_cancel/download/crse_cancel/' + req + '?sid=' + sid;
  }
  DownloadEng() {
    this.configService.baseUrl = 'stdsUnivapi';
    const sid = this.configService.getSid();


    return this.configService.getApiURI() + '/crse_cancel/download?Lang=en';
  }
}
