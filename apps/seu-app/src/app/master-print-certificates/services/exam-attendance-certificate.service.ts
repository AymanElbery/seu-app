import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ExamAttendanceCertificateService {

  reqData;
  msgs;
  
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getRequest() {
    this.configService.baseUrl = environment.gr;

    // ?std_id=S180105049
    return this.httRequest.GetRequest('attendance_service').toPromise();
  }
  Download(type:string) {

    this.configService.baseUrl = environment.gr;
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/attendance_service/download/'+type;
   }
   DownloadEng(type:string) {
    this.configService.baseUrl = environment.gr;
    const sid =   this.configService.getSid();



    return this.configService.getApiURI() + '/attendance_service/download/'+type+'?Lang=en';
   }
}
