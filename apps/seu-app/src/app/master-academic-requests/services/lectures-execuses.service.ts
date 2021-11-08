import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LecturesExecusesService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getRequests() {
    this.configService.baseUrl = environment.gr;

    //?std_id=S180105049
    return this.httRequest.GetRequest('lecture_excuse_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.postRequest('lecture_excuse_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('lecture_excuse_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = environment.gr;

    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/lecture_excuse_service/download/' + req;
  }
  DownloadEng() {
    this.configService.baseUrl = environment.gr;


    return this.configService.getApiURI() + '/lecture_excuse_service/download?Lang=en';
  }
}
