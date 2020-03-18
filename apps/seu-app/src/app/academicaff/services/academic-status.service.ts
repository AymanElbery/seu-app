import { Injectable } from '@angular/core';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
import { ConfigService } from '../../shared/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class AcademicStatusService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
    // tslint:disable-next-line: indent
  }


  getStaudentStatus() {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('/academic_status/get_status').toPromise();
  }

  getStaudentTermDetails(code) {
    this.configService.baseUrl = 'stdservicesapi';


    return this.httRequest.GetRequest('/academic_status/getTermDetails?TermCode=' + code).toPromise();
  }
  DownloadStatus(code) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/academic_status/academic_status_print?TermCode=' + code + '&sid=' + sid;
  }
  DownloadEngStatus(code) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/academic_status/academic_status_print?Lang=en&TermCode=' + code + '&sid=' + sid;
  }
}
