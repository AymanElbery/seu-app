import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class TuitionFeesService {

 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = 'stdservicesapi';
			  }


  getِTuitionFeez() {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('fees_stmt_request_service').toPromise();
  }

   Download() {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();

    return this.configService.getApiURI() + '/fees_stmt_request_service/download';
   }
   DownloadEng() {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();

    return this.configService.getApiURI() + '/fees_stmt_request_service/download?Lang=en';
   }
}
