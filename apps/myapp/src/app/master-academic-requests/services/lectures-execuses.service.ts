import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LecturesExecusesService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
  getRequests() {
    this.configService.baseUrl = 'stdsUnivapi';

    //?std_id=S180105049
    return this.httRequest.GetRequest('lecture_excuse_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.postRequest('lecture_excuse_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.GetRequest('lecture_excuse_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = 'stdsUnivapi';

    const sid =   this.configService.getSid();

    return this.configService.getApiURI() + '/lecture_excuse_service/download/' + req+'?sid='+sid;
  }
  DownloadEng() {
    this.configService.baseUrl = 'stdsUnivapi';


    return this.configService.getApiURI() + '/lecture_excuse_service/download?Lang=en';
  }
}