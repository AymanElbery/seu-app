import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExamAttendanceCertificateService {

  reqData;
  msgs;
  
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }
  getRequest() {
    // ?std_id=S180105049
    return this.httRequest.GetRequest('attendance_service').toPromise();
  }
  Download(type:string) {

    return this.configService.getApiURI() + '/attendance_service/download/'+type;
   }
   DownloadEng(type:string) {

    return this.configService.getApiURI() + '/attendance_service/download/'+type+'?Lang=en';
   }
}
