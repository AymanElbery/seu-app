import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PaymentRefundService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }

  getRequest() {
    this.configService.baseUrl = environment.gr;


    return this.httRequest.GetRequest('payment_refund_service').toPromise();
  }

  AddRefundRequest(data) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.postRequest('payment_refund_service/insert', data).toPromise();
  }
  deleteReq(id) {
    //console.log("del id",id);
    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('payment_refund_service/remove/' + id).toPromise();
  }


}
