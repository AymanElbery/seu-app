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
      return this.setTaskDescs(item);
    });
  }

  setTaskDescs(item) {
    item['priorityDesc'] = this.getPriorityByID(item['priority']);
    item['statusDesc'] = this.getStatusByID(item['status']);
    item['assignedToName'] = this.getEmpByID(item['assignedTo']);
    item['typeDesc'] = this.getStatusByID(item['type']);
    return item;
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

  getNameFromList(list, idcol, value, namecol) {
    if (!value) {
      return '';
    }
    const item = list.find(rec => rec[idcol] == value);
    if (item)
      return item[namecol];
    return '';
  }

  getEmpByID(id) {
    return this.getNameFromList(this.empList, 'empId', id, 'empName');
  }
  getTypeByID(id) {
    if (!this.ddl)
      return '';
    return this.getNameFromList(this.ddl['taskTypesList'], 'typeCode', id, 'typeDesc');
  }
  getStatusByID(id) {
    if (!this.ddl)
      return '';
    return this.getNameFromList(this.ddl['TaskStatusList'], 'statusCode', id, 'statusDesc');
  }
  getPriorityByID(id) {
    if (!this.ddl)
      return '';
    return this.getNameFromList(this.ddl['taskPriorityList'], 'priorityCode', id, 'priorityDesc');
  }

  AddTasksdata(data) {
    if (data['assignedTo']) {
      data['status'] = 2;
    }
    return this.wafihttRequest.postRequest_obj('task/createTask', data);
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

  getTaskDetails(tid) {
    return this.wafihttRequest.postRequest_obj('task/getTaskDetails', { tid });

  }

  AddTaskscommnets(data) {
   
    return this.wafihttRequest.postRequest_obj('task/createTaskComment', data);
  }


}

