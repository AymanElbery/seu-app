import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalIDService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getِgetRequests() {

    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.GetRequest('card_university_service').toPromise();
   }
   AddRequest(data) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.postRequest('card_university_service/insert', data).toPromise();
   }
   deleteReq(id) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.GetRequest('card_university_service/remove/' + id ).toPromise();

   }
}