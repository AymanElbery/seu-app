import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CertificateIDService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getRequest() {
    this.configService.baseUrl = environment.gr;

    // ?std_id=S180105049
    return this.httRequest.GetRequest('identification_certificate').toPromise();
  }
  Download() {

    this.configService.baseUrl = environment.gr;
    const sid =   this.configService.getSid();

    return this.configService.getApiURI() + '/identification_certificate/download';
   }
   DownloadEng() {
    this.configService.baseUrl = environment.gr;
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/identification_certificate/download?Lang=en';
   }
}
