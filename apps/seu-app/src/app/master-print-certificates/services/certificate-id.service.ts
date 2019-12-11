import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CertificateIDService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getRequest() {
    this.configService.baseUrl = "stdsUnivapi";

    // ?std_id=S180105049
    return this.httRequest.GetRequest('identification_certificate').toPromise();
  }
  Download() {

    this.configService.baseUrl = "stdsUnivapi";
    const sid =   this.configService.getSid();

    return this.configService.getApiURI() + '/identification_certificate/download?sid='+sid;
   }
   DownloadEng() {
    this.configService.baseUrl = "stdsUnivapi";
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/identification_certificate/download?Lang=en&sid='+sid;
   }
}
