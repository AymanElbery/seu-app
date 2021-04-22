import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExamExcuseService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getِgetRequests() {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('exam_excuse_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.postRequest('exam_excuse_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.GetRequest('exam_excuse_service/remove/' + id + '').toPromise();

  }

  download(req) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/exam_excuse_service/download/upload_exam_excuse/' + req;
  }
}
