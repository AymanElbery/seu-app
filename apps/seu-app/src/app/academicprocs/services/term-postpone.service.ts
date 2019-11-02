import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class TermPostponeService {


  reqData;
  msgs;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getِgetRequests() {
//?std_id=S120000101
   return this.httRequest.GetRequest('postpone_service').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('postpone_service/insert', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('postpone_service/remove/' + id ).toPromise();

  }

   Download(req) {

    return this.configService.getApiURI() + '/postpone_service/download/postpone/' + req ;
   }
   DownloadEng() {

    return this.configService.getApiURI() + '/postpone_service/download?Lang=en';
   }
}
