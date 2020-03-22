import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class MedicalReportService {

 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }


  getِMedicalReport() {

   return this.httRequest.GetRequest('medical_report_service').toPromise();
  }


   Download() {
    const sid =   this.configService.getSid();
    return this.configService.getApiURI() + '/medical_report_service/download';
   }
   DownloadEng() {
    const sid =   this.configService.getSid();
    return this.configService.getApiURI() + '/medical_report_service/download?Lang=en';
   }
}
