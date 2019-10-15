import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class MissingUnivCardService {

  reqData;
  msgs;
  reqNo;
  constructor(private configService: ConfigService, private httRequest: HttpRequestService) { }

  
   AddRequest(data) {
       return this.httRequest.postRequest('/card_missing_university_service/upload_bankreceipt',data).toPromise();
   }
   

}
