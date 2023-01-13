import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  reqData;
  msgs;
  newreqs = false;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getInvoices() {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.GetRequest('invoices_service').toPromise();
  }

  download() {
    this.configService.baseUrl = 'stdservicesapi';
    return this.configService.getApiURI() + '/invoices_service/download';
  }
}
