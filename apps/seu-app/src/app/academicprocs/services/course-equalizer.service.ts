import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class CourseEqualizerService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  getِgetRequests() {

   return this.httRequest.GetRequest('course_transfer_service?std_id=S120000101').toPromise();
  }
  AddRequest(data) {
      return this.httRequest.postRequest('course_transfer_service/insert?std_id=S120000101', data).toPromise();
  }
  deleteReq(id) {
    return this.httRequest.GetRequest('course_transfer_service/remove/' + id + '?std_id=S120000101').toPromise();

  }

   Download(req) {

    return this.configService.getApiURI() + '/execuse_service/download/execuse_request/' + req + '?std_id=S160239561';
   }
   DownloadEng() {

    return this.configService.getApiURI() + '/postpone_service/download?Lang=en';
   }
}