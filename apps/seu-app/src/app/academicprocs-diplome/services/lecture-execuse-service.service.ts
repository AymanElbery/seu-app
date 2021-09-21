import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LectureExecuseServiceService {

  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'std_api_diplome';
  }

  getRequests() {
    // ?std_id=S180105049
    return this.httRequest.GetRequest('lecture_excuse_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'std_api_diplome';

    return this.httRequest.postRequest('lecture_excuse_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'std_api_diplome';

    return this.httRequest.GetRequest('lecture_excuse_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = 'std_api_diplome';
    const sid =   this.configService.getSid();
    return this.configService.getApiURI() + '/lecture_excuse_service/download/lecture_excuse_diplome/' + req;
  }
  DownloadEng() {
    this.configService.baseUrl = 'std_api_diplome';
    const sid =   this.configService.getSid();
    return this.configService.getApiURI() + '/lecture_excuse_service/download?Lang=en&sid=' + sid;
  }
}
