import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LectureAbsQueryService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }


  getِAbsemceQuery() {

   return this.httRequest.GetRequest('absent_service?std_id=S180105049 ').toPromise();
  }

   Download() {

    return this.configService.getApiURI() + '/absent_service/download';
   }
   DownloadEng() {

    return this.configService.getApiURI() + '/absent_service/download?Lang=en';
   }
}
