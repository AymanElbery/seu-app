import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeScheduleService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private translate: TranslateService, private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdservicesapi";
  }

  getRequests() {
    //?std_id=S120000101
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('change_schedule_service').toPromise();
  }

  getConditions() {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('change_schedule_service/conditions').toPromise();
  }

  getDurations(day) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('change_schedule_service/durations/' + day).toPromise();
  }

  cancelRequest(id) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.GetRequest('change_schedule_service/cancel/' + id).toPromise();
  }

  addRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';

    return this.httRequest.postRequest('change_schedule_service/insert', data).toPromise();
  }

  print(req) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/change_schedule_service/print_statment/' + req;
  }

  download(req) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/change_schedule_service/download/change_schedule_service/' + req + '?sid=' + sid + '&lang=' + this.translate.currentLang;
  }
}
