import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorStudentService {
  reqData;
  msgs;

  newreqs = false;
  constructor(private translate: TranslateService,private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getِgetRequests() {
    // ?std_id=S180105049
    // ?std_id=S160239561
    // ?std_id=S190000060
    // ?std_id=S120000101
    // ?std_id=S180372820
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('visitor_student_service').toPromise();
  }


  deleteReq(id) {
    // + '?std_id=S120000101'
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('visitor_student_service/remove/' + id).toPromise();

  }

  AddRequest(data) {

    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.postRequest('visitor_student_service/insert', data).toPromise();
  }

  Download(req) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/visitor_student_service/download/' + req + '?sid=' + sid+ '&lang=' + this.translate.currentLang;
  }
}
