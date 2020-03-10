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
    return this.wafihttRequest.postRequest_obj('emp/open-show-service-requests',{});  
}

getEmpReqdetail(serviceRequestSeq:any,serviceRequestType:any) { 
  return this.wafihttRequest.postRequest_obj('emp/show-service-request-details',{serviceRequestSeq,serviceRequestType});  
}

deletetEmpRequest(serviceRequestSeq:any,serviceRequestType:any) { 
  return this.wafihttRequest.postRequest_obj('emp/delete-service-request',{serviceRequestSeq,serviceRequestType});  
}

}
