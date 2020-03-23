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
    //console.log(serviceRequestSeq, serviceRequestType);
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
    //console.log("submit data", currentServiceRequestTable);
    return this.wafihttRequest.postRequest_obj('emp/submit-service-request-entry', { serviceRequestEntryBean: { currentServiceRequestTable } });
  }

  submitreqserviceleavededuction(currentServiceRequestTable: any) {
    //console.log("submit data", currentServiceRequestTable);
    const file = currentServiceRequestTable['file'];
    delete currentServiceRequestTable['file'];
    return this.wafihttRequest.postRequest_obj('emp/submit-service-request-entry', { file, serviceRequestEntryBean: { currentServiceRequestTable } });
  }
  getCities(countryId: any) {

    return this.wafihttRequest.postRequest_obj('emp/get-city-new-items', { countryId });
  }

  getapprovalrequests() {

    return this.wafihttRequest.postRequest_obj('emp/show-service-request-toapprove', { });
  }

  getapprovalreqDetail(reqSeq:any,reqType:any, reqEmpId:any ) {

    ////console.log(reqSeq, reqEmpId, reqType);
    return this.wafihttRequest.postRequest_obj('emp/show-service-request-toapprove-details', {  reqSeq, reqEmpId,reqType  });
  }
  getapprovalhistory() {

    return this.wafihttRequest.postRequest_obj('emp/show-approved-request-trans', { });
  }

  getapprovalhistoryDetail(reqSeq:any,reqType:any, reqEmpId:any ) {
    ////console.log("service","reqSeq",reqSeq,"reqType", reqType,"reqEmpId",reqEmpId);    
    return this.wafihttRequest.postRequest_obj('emp/show-service-request-transaction-details', {  reqSeq, reqEmpId,reqType  });
  }

  submitapproverequest(reqSeq:any,reqType:any, reqEmpId:any,rejectReasonNo:any,approveValue:any) {
     //console.log("service","reqSeq",reqSeq,"reqType", reqType,"reqEmpId",reqEmpId,rejectReasonNo,approveValue);    
    return this.wafihttRequest.postRequest_obj('emp/save-approve-request', {  reqSeq, reqEmpId,reqType,rejectReasonNo,approveValue  });
  }

}
