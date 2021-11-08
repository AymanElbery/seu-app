import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class TermExecuseService {
  newreqs = false;
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getRequest() {
    this.configService.baseUrl = environment.gr;


    return this.httRequest.GetRequest('execuse_service').toPromise();
  }
  AddRequest(data) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.postRequest('execuse_service/insert', data).toPromise();
  }
  deleteReq(id) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('execuse_service/remove/' + id).toPromise();

  }
}
