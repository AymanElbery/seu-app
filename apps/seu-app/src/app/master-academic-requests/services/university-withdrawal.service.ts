import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UniversityWithdrawalService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getRequest() {
    this.configService.baseUrl = environment.gr;


    return this.httRequest.GetRequest('withdraw_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.postRequest('withdraw_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('withdraw_service/remove/' + id).toPromise();

  }
  Download(req) {
    this.configService.baseUrl = environment.gr;

    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/withdraw_service/download/' + req;
  }
  DownloadEng() {
    this.configService.baseUrl = environment.gr;


    return this.configService.getApiURI() + '/withdraw_service/download?Lang=en';
  }
}
