import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeCourseService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }
  getRequests() {

    return this.httRequest.GetRequest('change_major_service').toPromise();
   }
   AddRequest(data) {
       return this.httRequest.GetRequest('change_major_service/insert').toPromise();
   }
   deleteReq(id) {
     return this.httRequest.GetRequest('change_major_service/remove' + id ).toPromise();
 
   }
 
  
 }
 