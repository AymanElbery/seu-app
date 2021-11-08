import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PersonalIDService {

  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getِgetRequests() {

    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('card_university_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.postRequest('card_university_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('card_university_service/remove/' + id).toPromise();

  }
}
