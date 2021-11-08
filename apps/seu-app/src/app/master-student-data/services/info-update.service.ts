import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class InfoUpdateService {
  cities = [];
  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }

  getRequest() {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.GetRequest('student_info_service').toPromise();
  }

  AddNewRequest(data) {
    this.configService.baseUrl = environment.gr;

    return this.httRequest.postRequest('student_info_service/update', data).toPromise();
  }


}
