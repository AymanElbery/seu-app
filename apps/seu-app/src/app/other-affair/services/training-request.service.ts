import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingRequestService {
  newreqs = false;
  reqData;
  instructions = [];
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdservicesapi";
  }

  getِgetRequests() {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.GetRequest('training_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.postRequest('training_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = "stdservicesapi";
    return this.httRequest.GetRequest('training_service/remove/' + id).toPromise();
  }

  Download(id) {
    this.configService.baseUrl = "stdservicesapi";
    return this.configService.getApiURI() + '/training_service/download/' + id;
  }
  DownloadEng(id) {
    this.configService.baseUrl = "stdservicesapi";
    return this.configService.getApiURI() + '/training_service/download/' + id + '?Lang=en' + "&sid=" + this.configService.getSid();
  }
}
