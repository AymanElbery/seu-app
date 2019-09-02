import { Injectable } from '@angular/core';
import { ConfigService } from '../shared/services/config.service';
import { HttpRequestService } from '../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CertificateIDService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getCertificateID() {

    return this.httRequest.GetRequest('/identification_crse/get_identification').toPromise();
   }
   DownloadCertificate() {

    return this.configService.getApiURI() + '/identification_crse/get_identification_print';
   }
   DownloadEngCertificate() {

    return this.configService.getApiURI() + '/identification_crse/get_identification_print?Lang=en';
   }
}
