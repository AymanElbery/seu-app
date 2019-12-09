import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ReEnrollService {

  reqData;
  msgs;

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
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


    return this.configService.getApiURI() + '/return_service/download/return_request/' + req +'?sid='+sid;
   }
   DownloadEng() {
    this.configService.baseUrl = 'stdservicesapi';


    return this.configService.getApiURI() + '/return_service/download?Lang=en';
   }
}
