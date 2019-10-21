import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExamsAttendAppService {


 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }


  getِExamsAttednace(id) {

return this.httRequest.GetRequest('proof_attendance_service?std_id=S180105049').toPromise();
  }

  Print_Term_Exam_With_Schedule() {

    return this.configService.getApiURI() + '/proof_attendance_service/download?type=Term_Exam_With_Schedule';
   }
   Print_Term_Exam_Without_Schedule() {

    return this.configService.getApiURI() + '/proof_attendance_service/download?type=Term_Exam_Without_Schedule';
   }
   Print_Final_Exam_With_Schedule() {

    return this.configService.getApiURI() + '/proof_attendance_service/download?type=Final_Exam_With_Schedule';
   }
   Print_Final_Exam_Without_Schedule() {

    return this.configService.getApiURI() + '/proof_attendance_service/download?type=Final_Exam_Without_Schedule';
   }
   Print_Term_Exam_With_ScheduleEn() {

    return this.configService.getApiURI() + '/proof_attendance_service/download?type=Term_Exam_With_Schedule&Lang=en';
   }
   Print_Term_Exam_Without_ScheduleEn() {

    return this.configService.getApiURI() + '/proof_attendance_service/download?type=Term_Exam_Without_Schedule&Lang=en';
   }
   Print_Final_Exam_With_ScheduleEn() {

    return this.configService.getApiURI() + '/proof_attendance_service/download?type=Final_Exam_With_Schedule&Lang=en';
   }
   Print_Final_Exam_Without_ScheduleEn() {

    return this.configService.getApiURI() + '/proof_attendance_service/download?type=Final_Exam_Without_Schedule&Lang=en';
   }
}
