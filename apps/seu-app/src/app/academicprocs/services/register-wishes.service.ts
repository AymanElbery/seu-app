import { Injectable } from '@angular/core';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { ConfigService } from 'src/app/shared/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterWishesService {
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }
  getِgetRequests() {
    //?std_id=S180105049
    return this.httRequest.GetRequest('register_wishes_service?std_id=S190000060').toPromise();
  }

  deleteReq(id) {
    //+ '?std_id=S120000101'
    return this.httRequest.GetRequest('register_wishes_service/cancel/' + id).toPromise();

  }

  AddRequest(data) {
  /*  alert('S');
    alert(data.colledge)*/
    return this.httRequest.postRequest('register_wishes_service/insert', data).toPromise();
}
}
