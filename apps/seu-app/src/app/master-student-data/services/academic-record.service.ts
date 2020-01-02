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
    this.configService.baseUrl = 'stdsUnivapi';


    return this.httRequest.GetRequest('academic_record_service').toPromise();
   }

    Download() {

      this.configService.baseUrl = 'stdsUnivapi';
      const sid =   this.configService.getSid();


      return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print?lang=ar&sid=' + sid;
    }
    DownloadEng() {
      this.configService.baseUrl = 'stdsUnivapi';
      const sid =   this.configService.getSid();


      return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print?lang=en&sid=' + sid;
    }
}
