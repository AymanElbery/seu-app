import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AcademicStatusService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = "stdsUnivapi";
  }
  getRequests() {
    //?std_id=S180105049

    return this.httRequest.GetFullUrlRequest('https://seuapps.seu.edu.sa/stdsUnivapi/identification_certificate').toPromise();
  }
}
