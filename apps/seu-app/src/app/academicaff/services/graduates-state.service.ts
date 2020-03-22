import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class GraduatesStateService {

 	  // tslint:disable-next-line: indent
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = 'stdservicesapi';
			  // tslint:disable-next-line: indent
			  // tslint:disable-next-line: indent
			  }

  getStatement() {

    this.configService.baseUrl = 'stdservicesapi';


    return this.httRequest.GetRequest('/graduation_statement/statement').toPromise();
   }
   DownloadStatement() {
    this.configService.baseUrl = 'stdservicesapi';

    const sid =   this.configService.getSid();

    return this.configService.getApiURI() + '/graduation_statement/get_statement_print';
   }
   DownloadEngStatement() {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/graduation_statement/get_statement_print?Lang=en';
   }
}
