import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LectureAbsQueryService {

constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = 'stdservicesapi';
}


  getِAbsemceQuery() {
    this.configService.baseUrl = 'stdservicesapi';


   return this.httRequest.GetRequest('absent_service').toPromise();
  }

   Download() {

    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/absent_service/download?sid='+sid;
   }
   DownloadEng() {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/absent_service/download?Lang=en&sid='+sid;
   }
}
