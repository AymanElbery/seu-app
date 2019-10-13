import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class TerminationService {
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getِgetRequests() {

    return this.httRequest.GetRequest('terminate_service').toPromise();
   }
   AddRequest(data) {
       return this.httRequest.postRequest('terminate_service/insert',data).toPromise();
   }
   deleteReq(id) {
     return this.httRequest.GetRequest('terminate_service/remove/'+ id ).toPromise();
 
   }

   Download(id) {
    return this.configService.getApiURI()+'/terminate_service/download/'+id;
   }
   DownloadEng(id) {
    return this.configService.getApiURI()+'/terminate_service /download/' + id +'?Lang=en';
   }
}
