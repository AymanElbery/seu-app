import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CourseEqualizerService {
  newreqs = false;
 
  reqData;
  msgs;
  constructor(private translate: TranslateService,private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getِgetRequests() {
    this.configService.baseUrl = 'stdservicesapi';


    return this.httRequest.GetRequest('course_transfer_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.postRequest('course_transfer_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('course_transfer_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = 'stdservicesapi';

    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/course_transfer_service/download/crse_transfer/' + req + '?sid=' + sid+ '&lang=' + this.translate.currentLang;
  }
  
}
