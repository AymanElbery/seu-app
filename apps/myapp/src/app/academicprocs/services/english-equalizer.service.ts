import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class EnglishEqualizerService {
  newreqs = false;

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getِgetRequests() {

    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('english_certificates_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.postRequest('english_certificates_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('english_certificates_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = 'stdservicesapi';

    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/english_certificates_service/download/english_certificates/' + req + '?sid=' + sid;
  }
  DownloadEng() {
    this.configService.baseUrl = 'stdservicesapi';

    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/postpone_service/download?Lang=en&sid=' + sid;
  }
}
