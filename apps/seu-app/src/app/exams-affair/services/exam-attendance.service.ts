import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ExamAttendanceService {

 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }


  getِExamsAttednace() {
    //std_id=S120000101
    //std_id=S180105049
    //S120000101
    this.configService.baseUrl = 'stdservicesapi';

return this.httRequest.GetRequest('attendance_service').toPromise();
  }

  Print_Term_Exam_With_Schedule() {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/attendance_service/download?type=Term_Exam_With_Schedule&sid='+sid;
   }
   Print_Term_Exam_Without_Schedule() {
    this.configService.baseUrl = 'stdservicesapi';
    const sid =   this.configService.getSid();


    return this.configService.getApiURI() + '/attendance_service/download?type=Term_Exam_Without_Schedule&sid='+sid;
   }
   Print_Final_Exam_With_Schedule() {
    const sid =   this.configService.getSid();

    this.configService.baseUrl = 'stdservicesapi';


    return this.configService.getApiURI() + '/attendance_service/download?type=Final_Exam_With_Schedule&sid='+sid;
   }
   Print_Final_Exam_Without_Schedule() {
    const sid =   this.configService.getSid();

    this.configService.baseUrl = 'stdservicesapi';


    return this.configService.getApiURI() + '/attendance_service/download?type=Final_Exam_Without_Schedule&sid='+sid;
   }
   Print_Term_Exam_With_ScheduleEn() {
    const sid =   this.configService.getSid();

    this.configService.baseUrl = 'stdservicesapi';

    return this.configService.getApiURI() + '/attendance_service/download?type=Term_Exam_With_Schedule&Lang=en&sid='+sid;
   }
   Print_Term_Exam_Without_ScheduleEn() {
    const sid =   this.configService.getSid();

    this.configService.baseUrl = 'stdservicesapi';

    return this.configService.getApiURI() + '/attendance_service/download?type=Term_Exam_Without_Schedule&Lang=en&sid='+sid;
   }
   Print_Final_Exam_With_ScheduleEn() {
    const sid =   this.configService.getSid();

    this.configService.baseUrl = 'stdservicesapi';

    return this.configService.getApiURI() + '/attendance_service/download?type=Final_Exam_With_Schedule&Lang=en&sid='+sid;
   }
   Print_Final_Exam_Without_ScheduleEn() {
    const sid =   this.configService.getSid();

    this.configService.baseUrl = 'stdservicesapi';

    return this.configService.getApiURI() + '/attendance_service/download?type=Final_Exam_Without_Schedule&Lang=en&sid='+sid;
   }
}
