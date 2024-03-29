import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AcademicRecordService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getRecord() {
    this.configService.baseUrl = environment.gr;


    return this.httRequest.GetRequest('academic_record_service').toPromise();
  }

  Download() {

    this.configService.baseUrl = environment.gr;
    const sid = this.configService.getSid();


    return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print';
  }
  DownloadEng() {
    this.configService.baseUrl = environment.gr;
    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print?lang=en&sid=' + sid;
  }
  getٍِStudentGrades() {
    this.configService.baseUrl = environment.gr;
    return this.httRequest.GetRequest('academic_record_service/grades').toPromise();
  }
}
