import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class EnglishEqualizerService {

  reqData;
  msgs;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getِgetRequests() {

   return this.httRequest.GetRequest('english_certificates_service').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('english_certificates_service/insert', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('english_certificates_service/remove/' + id ).toPromise();

  }

   Download(req) {

    return this.configService.getApiURI() + '/english_certificates_service/download/english_certificates/' + req ;
   }
   DownloadEng() {

    return this.configService.getApiURI() + '/postpone_service/download?Lang=en';
   }
}
