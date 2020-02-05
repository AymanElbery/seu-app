import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingRequestService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdservicesapi";
  }

  getِgetRequests() {

    return this.httRequest.GetRequest('training_service').toPromise();
  }
  AddRequest(data) {
    return this.httRequest.postRequest('training_service/insert', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('training_service/remove/' + id).toPromise();

  }

  Download(id) {
    return this.configService.getApiURI() + '/training_service/download/' + id;
  }
  DownloadEng(id) {
    return this.configService.getApiURI() + '/training_service/download/' + id + '?Lang=en';
  }
}
