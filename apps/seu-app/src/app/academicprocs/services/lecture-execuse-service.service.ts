import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LectureExecuseServiceService {


  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getRequests() {

   return this.httRequest.GetRequest('lecture_excuse_service?std_id=S180105049').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('lecture_excuse_service/insert?std_id=S120000101', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('lecture_excuse_service/remove/' + id + '?std_id=S120000101').toPromise();

  }

   Download(req) {

    return this.configService.getApiURI() + '/lecture_excuse_service/download/' + req + '?std_id=S160239561';
   }
   DownloadEng() {

    return this.configService.getApiURI() + '/lecture_excuse_service/download?Lang=en';
   }
}
