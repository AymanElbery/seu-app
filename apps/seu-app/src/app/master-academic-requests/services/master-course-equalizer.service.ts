import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MasterCourseEqualizerService {
  newreqs = false;

  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }

  getِgetRequests() {
    this.configService.baseUrl = 'stdsUnivapi';


    return this.httRequest.GetRequest('course_equation_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.postRequest('course_equation_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdsUnivapi';

    return this.httRequest.GetRequest('course_equation_service/remove/' + id).toPromise();

  }
}
