import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExamAttendanceCertificateAppService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }

  getRequest() {
    this.configService.baseUrl = "stdsUnivapi";

    // ?std_id=S180105049
    return this.httRequest.GetRequest('proof_attendance_service').toPromise();
  }
  Download(type:string) {
    this.configService.baseUrl = "stdsUnivapi";

    const sid =   this.configService.getSid();

    return this.configService.getApiURI() + '/proof_attendance_service/download/'+type;
   }
   DownloadEng(type:string) {
    this.configService.baseUrl = "stdsUnivapi";
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/proof_attendance_service/download/'+type+'?Lang=en';
   }
}
