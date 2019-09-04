import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class GraduatesStateService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getStatement() {

    return this.httRequest.GetRequest('/graduation_statement/statement').toPromise();
   }
   DownloadStatement() {

    return this.configService.getApiURI() + '/graduation_statement/get_statement_print';
   }
   DownloadEngStatement() {

    return this.configService.getApiURI() + '/graduation_statement/get_statement_print?Lang=en';
   }
}
