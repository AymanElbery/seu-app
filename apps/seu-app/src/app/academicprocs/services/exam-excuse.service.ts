import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExamExcuseService {

  reqData;
  msgs;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getِgetRequests() {

   return this.httRequest.GetRequest('exam_excuse_service?std_id=S190000060').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('exam_excuse_service/insert?std_id=S190000060', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('exam_excuse_service/remove/' + id + '?std_id=S190000060').toPromise();

  }
}
