import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  reqData;
  msgs;
  reqNo;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }
  getِRequests() {
    return this.httRequest.GetRequest('student_info_service').toPromise();
   }
   AddRequest(data) {
       return this.httRequest.postRequest('student_info_service/update', data).toPromise();
   }
   DownloadPhoto() {

    return this.configService.getApiURI() + 'student_info_service/download/photo';
   }
   DownloadCv() {

    return this.configService.getApiURI() + 'student_info_service/download/cv';
   }
}

