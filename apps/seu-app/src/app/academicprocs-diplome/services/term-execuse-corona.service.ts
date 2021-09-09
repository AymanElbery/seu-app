import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TermExecuseCoronaService {
  newreqs = true;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'std_api_diplome';
  }

  getِgetRequests() {
    // ?std_id=S120000101
    this.configService.baseUrl = 'std_api_diplome';

    return this.httRequest.GetRequest('execuse_service_corona').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'std_api_diplome';

    return this.httRequest.postRequest('execuse_service_corona/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'std_api_diplome';

    return this.httRequest.GetRequest('execuse_service_corona/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = 'std_api_diplome';

    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/execuse_service_corona/download/execuse_request/' + req ;
  }
  DownloadEng() {
    this.configService.baseUrl = 'std_api_diplome';


    return this.configService.getApiURI() + '/execuse_service_corona/download?Lang=en';
  }
}
