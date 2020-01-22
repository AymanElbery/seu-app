import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AcademicRecordService {

constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = 'stdservicesapi'; }

  getِAcademicRecord() {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('academic_record_service/get_academic_record').toPromise();
  }

   Download() {

    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print?sid=' + sid;
   }
   DownloadEng() {

    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print?Lang=en&sid=' + sid;
   }
}