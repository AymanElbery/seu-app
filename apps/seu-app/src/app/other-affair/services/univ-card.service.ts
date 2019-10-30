import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UvnivCardService {
  reqData;
  msgs;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getِgetRequests() {

   return this.httRequest.GetRequest('card_university_service').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('card_university_service/insert', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('card_university_service/remove/' + id ).toPromise();

  }


}
