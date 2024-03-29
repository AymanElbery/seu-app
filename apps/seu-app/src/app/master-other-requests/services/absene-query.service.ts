import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AbseneQueryService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }

  getRequests() {
    this.configService.baseUrl = environment.gr;


    return this.httRequest.GetRequest('absent_service').toPromise();
   }

}
