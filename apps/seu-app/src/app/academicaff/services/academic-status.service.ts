import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcademicStatusService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }


  getStaudentStatus() {

   return this.httRequest.GetRequest('/academic_status/get_status').toPromise();
  }

  getStaudentTermDetails(code) {

    return this.httRequest.GetRequest('/academic_status/getTermDetails?TermCode=' + code).toPromise();
   }
   DownloadStatus() {

    return this.configService.getApiURI() + '/academic_status/academic_status_print';
   }
   DownloadEngStatus() {

    return this.configService.getApiURI() + '/academic_status/academic_status_print?Lang=en';
   }
}
