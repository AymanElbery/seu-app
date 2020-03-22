import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SummerWithdrawService {

  newreqs = false;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getِgetRequests() {
    this.configService.baseUrl = 'stdservicesapi';


    return this.httRequest.GetRequest('cancel_summer_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.postRequest('cancel_summer_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('cancel_summer_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/cancel_summer_service/download/' + req;
  }
  DownloadEng() {
    this.configService.baseUrl = 'stdservicesapi';


    return this.configService.getApiURI() + '/cancel_summer_service/download?Lang=en';
  }
}
