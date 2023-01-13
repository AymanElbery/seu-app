import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeCampMajorService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdservicesapi';
  }

  getgetRequests() {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.GetRequest('change_camp_major_service').toPromise();
  }

  getMajors(camp) {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.GetRequest('change_camp_major_service/get_majors/' + camp).toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.postRequest('change_camp_major_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = 'stdservicesapi';
    return this.httRequest.GetRequest('change_camp_major_service/remove/' + id).toPromise();

  }

  Download(req) {
    this.configService.baseUrl = 'stdservicesapi';
    const sid = this.configService.getSid();
    return this.configService.getApiURI() + '/change_camp_major_service/download/change_camp_major/' + req;
  }
  DownloadEng() {
    const sid = this.configService.getSid();

    this.configService.baseUrl = 'stdservicesapi';


    return this.configService.getApiURI() + '/change_camp_major_service/download?Lang=en';
  }

}
