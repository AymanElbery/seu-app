import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { WafiHttpRequestService } from '../../wafi/services/wafi-http-request.service';
import { GlobalBaseService } from '../../shared/services/global-base.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasksManagementService {

  ddl;
  empList = [];
  ddlsubject = new Subject();
  empListsubject = new Subject();
  constructor(private wafihttRequest: WafiHttpRequestService) { }

  prepareList(data) {
    return data.map(item => {
      item['priorityDesc'] = item['priority'];
      item['statusDesc'] = item['status'];
      item['assignedToName'] = item['assignedTo'];
      return item;
    });
  }

  loadDDL(force = false) {
    if (!force && this.ddl) {
      return false;
    }
    this.getDDLlist().subscribe(reqtype => {
      if (reqtype) {
        this.ddl = (reqtype as any).data;
        this.ddlsubject.next();
      }
    });
  }
  loadEmpList(force = false) {
    if (!force && this.ddl) {
      return false;
    }
    this.getDDLEmplist().subscribe(reqtype => {
      if (reqtype) {
        this.empList = (reqtype as any).data;
        this.empListsubject.next();
      }
    });
  }

  AddTasksdata(data) {
    return this.wafihttRequest.postRequest_obj('task/createTask',data);
  }

  getTasksList() {
    return this.wafihttRequest.postRequest_obj('task/getMyTasks', {});
  }

  getDDLlist() {
    return this.wafihttRequest.postRequest_obj('task/listLookups', {});
  }
  getDDLEmplist() {
    return this.wafihttRequest.postRequest_obj('task/getEmployeesList', {});
  }



}

