import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class UniversityWithdrawalService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getRequest() {
    
    return this.httRequest.GetRequest('withdraw_service').toPromise();
  }
  AddRequest(data) {
    return this.httRequest.postRequest('withdraw_service/insert', data).toPromise();
}
  deleteReq(id) {
    return this.httRequest.GetRequest('withdraw_service/remove/' + id ).toPromise();

  }
  Download(req) {

    return this.configService.getApiURI() + '/withdraw_service/download/'+req;
   }
   DownloadEng() {

    return this.configService.getApiURI() + '/withdraw_service/download?Lang=en';
   }
}
