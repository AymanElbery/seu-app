import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class GraduateProfileService {

  reqData;
  msgs;
  reqDataDetail;
  msgsDetail;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }
  getRequest() {
    
    return this.httRequest.GetRequest('grade_info_service').toPromise();
  }

  getDetails() {
    
    return this.httRequest.GetRequest('grade_info_service/details').toPromise();
  }


  deleteReq(id) {
    return this.httRequest.GetRequest('grade_info_service/remove/' + id ).toPromise();

  }
}
