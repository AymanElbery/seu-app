import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TermExecuseService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getِgetRequests() {
    // ?std_id=S120000101
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('execuse_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.postRequest('execuse_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('execuse_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = 'stdservicesapi';

    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/execuse_service/download/execuse_request/' + req + '?sid=' + sid + '&lang=' + this.translate.currentLang;
  }
  DownloadEng() {
    this.configService.baseUrl = 'stdservicesapi';


    return this.configService.getApiURI() + '/postpone_service/download?Lang=en';
  }
}
