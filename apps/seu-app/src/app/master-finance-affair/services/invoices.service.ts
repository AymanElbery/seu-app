import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  reqData;
  msgs;
  newreqs = false;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }

  getInvoices() {
    this.configService.baseUrl = environment.gr;
    return this.httRequest.GetRequest('invoices_service').toPromise();
  }

  download() {
    this.configService.baseUrl = environment.gr;
    return this.configService.getApiURI() + '/invoices_service/download';
  }
}
