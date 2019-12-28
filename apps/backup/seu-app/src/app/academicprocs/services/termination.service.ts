import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class TerminationService {
  reqData;
  msgs;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getِgetRequests() {
    this.configService.baseUrl = 'stdservicesapi';


    return this.httRequest.GetRequest('terminate_service').toPromise();
   }
   AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

       return this.httRequest.postRequest('terminate_service/insert',data).toPromise();
   }
   deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';

     return this.httRequest.GetRequest('terminate_service/remove/'+ id ).toPromise();
 
   }

   Download(id) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();

    return this.configService.getApiURI()+'/terminate_service/download/'+id+'?sid='+sid;
   }
   DownloadEng(id) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();

    return this.configService.getApiURI()+'/terminate_service /download/' + id +'?Lang=en&sid='+sid;
   }
}
