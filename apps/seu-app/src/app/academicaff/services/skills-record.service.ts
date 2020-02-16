import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsRecordService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getSkills() {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.GetRequest('/activities_service').toPromise();
  }
  downloadAR() {
    const sid = this.configService.getSid();
    this.configService.baseUrl = 'stdservicesapi';
    return this.configService.getApiURI() + '/activities_service/records_print?sid=' + sid;
  }
  DownloadEN() {
    const sid = this.configService.getSid();
    this.configService.baseUrl = 'stdservicesapi';
    return this.configService.getApiURI() + '/activities_service/records_print?lang=en&sid=' + sid;
  }
}
