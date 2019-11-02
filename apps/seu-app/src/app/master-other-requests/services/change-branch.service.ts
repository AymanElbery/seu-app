import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeBranchService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }
  getِgetRequests() {

   return this.httRequest.GetRequest('change_camp_service').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('change_camp_service/insert', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('change_camp_service/remove/' + id ).toPromise();

  }

   
}