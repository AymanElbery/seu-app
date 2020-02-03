import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class UniversityWithdrawalService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getRequest() {
    this.configService.baseUrl = 'stdsUnivapi';


    return this.httRequest.GetRequest('withdraw_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.postRequest('withdraw_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.GetRequest('withdraw_service/remove/' + id).toPromise();

  }
  Download(req) {
    this.configService.baseUrl = 'stdsUnivapi';

    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/withdraw_service/download/' + req + '?sid=' + sid;
  }
  DownloadEng() {
    this.configService.baseUrl = 'stdsUnivapi';


    return this.configService.getApiURI() + '/withdraw_service/download?Lang=en';
  }
}
