import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ReEnrollService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getِgetRequests() {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('return_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.postRequest('return_service/insert ', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('return_service/remove/' + id).toPromise();
  }
  Download(req) {
    this.configService.baseUrl = environment.gr;
    const sid = this.configService.getSid();


    return this.configService.getApiURI() + '/return_service/download/return_request/' + req + '?sid=' + sid;
  }
  DownloadEng() {
    this.configService.baseUrl = environment.gr;
    const sid = this.configService.getSid();

    return this.configService.getApiURI() + '/return_service/download?Lang=en';
  }
}
