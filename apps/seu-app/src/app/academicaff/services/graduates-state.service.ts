import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class GraduatesStateService {

 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getStatement() {

    this.configService.baseUrl = 'stdservicesapi';

    
    return this.httRequest.GetRequest('/graduation_statement/statement').toPromise();
   }
   DownloadStatement() {
    this.configService.baseUrl = 'stdservicesapi';

    const sid =   this.configService.getSid();

    return this.configService.getApiURI() + '/graduation_statement/get_statement_print?sid='+sid;
   }
   DownloadEngStatement() {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/graduation_statement/get_statement_print?Lang=en&sid='+sid;
   }
}
