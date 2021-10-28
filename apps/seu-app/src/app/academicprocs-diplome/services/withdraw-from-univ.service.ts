import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WithdrawFromUnivService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.ud;
  }

  getِgetRequests() {
    //?std_id=S120000101
    this.configService.baseUrl = environment.ud;

    return this.httRequest.GetRequest('withdraw_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = environment.ud;

    return this.httRequest.postRequest('withdraw_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = environment.ud;

    return this.httRequest.GetRequest('withdraw_service/remove/' + id).toPromise();

  }

  print(req) {
    this.configService.baseUrl = environment.ud;
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/withdraw_service/print_statment/' + req;
  }

  download(req) {
    this.configService.baseUrl = environment.ud;
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/withdraw_service/download/withdraw_request_diplome/' + req + '?sid=' + sid + '&lang=' + this.translate.currentLang;
  }
}
