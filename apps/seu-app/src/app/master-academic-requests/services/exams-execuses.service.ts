import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExamsExecusesService {

  msgs;
  reqData;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getRequest() {
    
    return this.httRequest.GetRequest('exam_excuse_service').toPromise();
  }
  AddRequest(data) {
    return this.httRequest.postRequest('exam_excuse_service/insert', data).toPromise();
}
  deleteReq(id) {
    return this.httRequest.GetRequest('exam_excuse_service/remove/' + id ).toPromise();
  }
}
