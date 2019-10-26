import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationHelperService {
  reqData;
  msgs;
  courses;
  departments;
 	  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
                    this.configService.baseUrl = "stdservicesapi";
			  }

  getِgetRequests() {
    //?std_id=S180105049
    //?std_id=S160239561
    //?std_id=S190000060
    //?std_id=S120000101
    return this.httRequest.GetRequest('registeration_helper_service').toPromise();
  }

  getِgetCourse(collegeId) {
    //?std_id=S190000060
    collegeId = collegeId == '' ? '0' : collegeId;
    return this.httRequest.GetRequest('registeration_helper_service/get_courses_for_colledges/' + collegeId).toPromise();
  }
  getِgetDepartments(courseId) {
    courseId = courseId == '' ? '0' : courseId;
    //?std_id=S190000060
    return this.httRequest.GetRequest('registeration_helper_service/get_departments/' + courseId).toPromise();
  }
  deleteReq(id) {
    //+ '?std_id=S120000101'
    return this.httRequest.GetRequest('registeration_helper_service/cancel/' + id).toPromise();

  }

  AddRequest(data) {

    return this.httRequest.postRequest('registeration_helper_service/insert', data).toPromise();
  }
}
