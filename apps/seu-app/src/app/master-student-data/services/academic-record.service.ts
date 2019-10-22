import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AcademicRecordService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getRecord() {

    return this.httRequest.GetRequest('academic_record_service').toPromise();
   }

    Download() {

     return this.configService.getApiURI() + 'academic_record_service/download?Lang=ar';
    }
    DownloadEng() {

     return this.configService.getApiURI() + 'academic_record_service/download?Lang=en';
    }
}
