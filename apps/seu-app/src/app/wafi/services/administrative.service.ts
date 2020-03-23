import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { WafiHttpRequestService } from '../../wafi/services/wafi-http-request.service';
import { GlobalBaseService } from '../../shared/services/global-base.service';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeService {

  constructor(private wafihttRequest: WafiHttpRequestService) { }

  getEmpevaluations() {
    return this.wafihttRequest.postRequest_obj('emp/get-emp-evaluations', {});
  }
  getEmpCustody() {
    return this.wafihttRequest.postRequest_obj('emp/get-emp-custody', {});
  }
  getLetterlist() {
    return this.wafihttRequest.postRequest_obj('emp/get-emp-letters', {});
  }
  gettraininglist() {
    return this.wafihttRequest.postRequest_obj('emp/get-trainings', {});
  }

  getvaoucherlovs() {
    return this.wafihttRequest.postRequest_obj('emp/get-personal-vouchers-LOVs', {});
  }

  getvaoucherlist(year:any,voucherType:any) {
    return this.wafihttRequest.postRequest_obj('emp/open-show-personal-vouchers', {year,voucherType});
  }


}
