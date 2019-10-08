import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationHelperService {
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getِgetRequests() {
//?std_id=S190000060
    return this.httRequest.GetRequest('registeration_helper_service').toPromise();
   }

   deleteReq(id) {
     //+ '?std_id=S120000101'
    return this.httRequest.GetRequest('registeration_helper_service/remove/' + id ).toPromise();

  }
}
