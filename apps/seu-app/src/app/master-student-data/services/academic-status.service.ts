import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AcademicStatusService {

  reqData;
  msgs;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = environment.gr;
  }
  getRequests() {
    this.configService.baseUrl = environment.gr;

    // ?std_id=S180105049

    return this.httRequest.GetRequest('academic_status_service').toPromise();

  }
}
