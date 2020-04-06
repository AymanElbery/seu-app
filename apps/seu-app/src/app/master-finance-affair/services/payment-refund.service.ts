import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentRefundService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }

  getRequest() {
    this.configService.baseUrl = 'stdsUnivapi';


    return this.httRequest.GetRequest('payment_refund_service').toPromise();
  }

  AddRefundRequest(data) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.postRequest('payment_refund_service/insert', data).toPromise();
  }
  deleteReq(id) {
    //console.log("del id",id);
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.GetRequest('payment_refund_service/remove/' + id).toPromise();
  }


}
