import { Injectable } from '@angular/core';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { ConfigService } from '../../shared/services/config.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcademicDiplomeStatusService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.ud;
    // tslint:disable-next-line: indent
  }


  getStaudentStatus() {
    this.configService.baseUrl = environment.ud;

    return this.httRequest.GetRequest('academic_status/get_status').toPromise();
  }

  getStaudentTermDetails(code) {
    this.configService.baseUrl = environment.ud;


    return this.httRequest.GetRequest('academic_status/getTermDetails?TermCode=' + code).toPromise();
  }
  DownloadStatus(code) {
    this.configService.baseUrl = environment.ud;
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + 'academic_status/academic_status_print?TermCode=' + code;
  }
  DownloadEngStatus(code) {
    this.configService.baseUrl = environment.ud;
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + 'academic_status/academic_status_print?Lang=en&TermCode=' + code;
  }
}
