import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { WafiHttpRequestService } from '../../wafi/services/wafi-http-request.service';
import { GlobalBaseService } from '../../shared/services/global-base.service';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeRequestsService {

  constructor(private wafihttRequest: WafiHttpRequestService) { }

  getEmpReqLists() {
    return this.wafihttRequest.postRequest_obj('emp/open-show-service-requests', {});
  }

  getEmpReqdetail(serviceRequestSeq: any, serviceRequestType: any) {
    return this.wafihttRequest.postRequest_obj('emp/show-service-request-details', { serviceRequestSeq, serviceRequestType });
  }

  deletetEmpRequest(serviceRequestSeq: any, serviceRequestType: any) {
    console.log(serviceRequestSeq, serviceRequestType);
    return this.wafihttRequest.postRequest_obj('emp/delete-service-request', { serviceRequestSeq, serviceRequestType });
  }

  getDDLReqType() {

    return this.wafihttRequest.postRequest_obj('emp/get-request-types', {});
  }

  getDDLVacationType(serviceRequestType: any) {

    return this.wafihttRequest.postRequest_obj('emp/get-lovs-service-request-entry', { serviceRequestType });
  }
  getVacationbalance(vacationCode: any, startDate: any) {
    return this.wafihttRequest.postRequest_obj('emp/get-vacations', { vacationCode, startDate });
  }
  submitreqservice(currentServiceRequestTable: any) {
    console.log("submit data", currentServiceRequestTable);
    return this.wafihttRequest.postRequest_obj('emp/submit-service-request-entry', { serviceRequestEntryBean: { currentServiceRequestTable } });
  }

  submitreqserviceleavededuction(currentServiceRequestTable: any) {
    console.log("submit data", currentServiceRequestTable);
    const file = currentServiceRequestTable['file'];
    delete currentServiceRequestTable['file'];
    return this.wafihttRequest.postRequest_obj('emp/submit-service-request-entry', { file, serviceRequestEntryBean: { currentServiceRequestTable } });
  }
  getCities(countryId: any) {

    return this.wafihttRequest.postRequest_obj('emp/get-city-new-items', { countryId });
  }

}
