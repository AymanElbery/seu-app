import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CertificateIDService {

 	  // tslint:disable-next-line: indent
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = 'stdservicesapi';
			  }

  getCertificateID() {

    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('/identification_crse/get_identification').toPromise();
   }
   DownloadCertificate() {
   // const sid =   this.configService.getSid();
    const sid="ZDBkNmM3MWQtMzAxZS00YmNiLTgyOTctMTA4NDJkZDliYmVmfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0="


    this.configService.baseUrl = 'stdservicesapi';

    return this.configService.getApiURI() + '/identification_crse/get_identification_print?sid=' + sid;
   }
   DownloadEngCertificate() {
    const sid =   this.configService.getSid();
    //const sid="ZDBkNmM3MWQtMzAxZS00YmNiLTgyOTctMTA4NDJkZDliYmVmfFNCdmF4L2JBSlA4Y3JRSnk5dUhxRlhaVGl4dz0="


    this.configService.baseUrl = 'stdservicesapi';

    return this.configService.getApiURI() + '/identification_crse/get_identification_print?Lang=en&sid=' + sid;
   }
}
