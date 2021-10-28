import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcademicDiplomeRecordService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.ud;
  }

  getِAcademicRecord() {
    this.configService.baseUrl = environment.ud;

    return this.httRequest.GetRequest('academic_record_service/get_academic_record').toPromise();
  }
  getٍِStudentGrades() {
    this.configService.baseUrl = environment.ud;

    return this.httRequest.GetRequest('academic_record_service/grades').toPromise();
  }

  Download() {

    this.configService.baseUrl = environment.ud;
    const sid = this.configService.getSid();


    return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print';
  }
  DownloadEng() {

    this.configService.baseUrl = environment.ud;
    const sid = this.configService.getSid();


    return this.configService.getApiURI() + '/academic_record_service/get_academic_record_print?Lang=en';
  }
}
