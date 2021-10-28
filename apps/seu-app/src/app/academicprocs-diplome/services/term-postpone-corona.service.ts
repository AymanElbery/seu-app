import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TermPostponeCoronaService {

  newreqs = true;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.ud;
  }

  gettgetRequests() {
    // ?std_id=S120000101
    this.configService.baseUrl = environment.ud;

    return this.httRequest.GetRequest('postpone_corona_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = environment.ud;

    return this.httRequest.postRequest('postpone_corona_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = environment.ud;

    return this.httRequest.GetRequest('postpone_corona_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = environment.ud;
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/postpone_corona_service/download/postpone/' + req;
  }
  // DownloadEng() {
  //   this.configService.baseUrl = environment.ud;
  //   return this.configService.getApiURI() + '/postpone_corona_service/download?Lang=en';
  // }
}
