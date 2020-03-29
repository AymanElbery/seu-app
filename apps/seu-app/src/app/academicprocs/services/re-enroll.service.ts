import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ReEnrollService {
  newreqs=false;
  reqData;
  msgs;

  constructor(private translate: TranslateService,private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = 'stdservicesapi';
}

  getِgetRequests() {
// ?std_id=S120000101
this.configService.baseUrl = 'stdservicesapi';

   return this.httRequest.GetRequest('return_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

      return this.httRequest.postRequest('return_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('return_service/remove/' + id ).toPromise();

  }

   Download(req) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/return_service/download/return_request/' + req;
   }
   DownloadEng() {
    this.configService.baseUrl = 'stdservicesapi';


    return this.configService.getApiURI() + '/return_service/download?Lang=en';
   }
}
