import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExamObjectionService {
reqData;
msgs;

constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
  this.configService.baseUrl = 'stdsUnivapi';
      }

getRequests() {
  this.configService.baseUrl = 'stdsUnivapi';

  return this.httRequest.GetRequest('exam_objections_service').toPromise();
}
// getgetRequests() {

//   return this.httRequest.GetRequest('exam_objections_service').toPromise();
//  }
AddRequest(data) {
  this.configService.baseUrl = 'stdsUnivapi';

  return this.httRequest.postRequest('exam_objections_service/insert?', data).toPromise();
}
deleteReq(id) {
  this.configService.baseUrl = 'stdsUnivapi';

  return this.httRequest.GetRequest('exam_objections_service/remove/' + id).toPromise();

}
}
