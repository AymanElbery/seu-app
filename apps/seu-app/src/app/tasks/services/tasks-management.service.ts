import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { WafiHttpRequestService } from '../../wafi/services/wafi-http-request.service';
import { GlobalBaseService } from '../../shared/services/global-base.service';


@Injectable({
  providedIn: 'root'
})
export class TasksManagementService {

  constructor(private wafihttRequest: WafiHttpRequestService) { }

  AddTasksdata() {
    return this.wafihttRequest.postRequest_obj('task/createTask', {});
  }

  getTasksList() {
    return this.wafihttRequest.postRequest_obj('task/getMyTasks', {});
  }
  


}

