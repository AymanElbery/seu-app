import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class SummerWithdrawService {


  reqData;
  msgs;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getِgetRequests() {

   return this.httRequest.GetRequest('cancel_summer_service').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('cancel_summer_service/insert',data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('cancel_summer_service/remove/' + id ).toPromise();

  }

   Download(req) {

    return this.configService.getApiURI() + '/cancel_summer_service/download/' + req ;
   }
   DownloadEng() {

    return this.configService.getApiURI() + '/cancel_summer_service/download?Lang=en';
   }
}
