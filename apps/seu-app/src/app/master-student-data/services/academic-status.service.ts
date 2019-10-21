import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AcademicStatusService {

  reqData;
  msgs;
     constructor(private configService: ConfigService, private httRequest: HttpRequestService)
     {
                    this.configService.baseUrl = 'stdservicesapi';
	  	}
  getِgetRequests() {
    // ?std_id=S180105049

    return this.httRequest.GetRequest('register_wishes_service?std_id=S190000060').toPromise();
  }

  deleteReq(id) {
    // + '?std_id=S120000101'
    return this.httRequest.GetRequest('register_wishes_service/cancel/' + id).toPromise();

  }

  AddRequest(data) {

    console.log(data);
    return this.httRequest.postRequest('register_wishes_service/insert', data).toPromise();
}
}
