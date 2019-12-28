import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class WithdrawFromUnivService {

  reqData;
  msgs;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getِgetRequests() {
//?std_id=S120000101
this.configService.baseUrl = 'stdservicesapi';

   return this.httRequest.GetRequest('withdraw_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

      return this.httRequest.postRequest('withdraw_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('withdraw_service/remove/' + id ).toPromise();

  }

   Download(req) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/withdraw_service/download/' + req +'?sid'+sid;
   }
   DownloadEng() {
    this.configService.baseUrl = 'stdservicesapi';


    return this.configService.getApiURI() + '/fees_stmt_request_service/download?Lang=en';
   }
}
