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
                    this.configService.baseUrl = "stdsUnivapi";
			  }

  getِgetRequests() {
    
   return this.httRequest.GetRequest('return_service').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('return_service/insert ', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('return_service/remove/' + id ).toPromise();

  }

   Download(req) {

    return this.configService.getApiURI() + '/return_service/download/return_request/' + req ;
   }
   DownloadEng() {

    return this.configService.getApiURI() + '/return_service/download?Lang=en';
   }
}
