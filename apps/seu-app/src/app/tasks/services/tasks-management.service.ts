import { Injectable } from '@angular/core';
import { WafiHttpRequestService } from '../../wafi/services/wafi-http-request.service';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/account/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class TasksManagementService {
  dialogCloseRefresh = false;
  ddl;
  empList = [];
  empListFavourit = [];
  ddlsubject = new Subject();
  empListsubject = new Subject();
  stats;
  constructor(private wafihttRequest: WafiHttpRequestService, private userService: UserService) {

  }
  deleteFromFavourite(id) {
    this.empListFavourit = this.empListFavourit.filter(rec => rec != id);
  }
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

  reloadList(force = false) {
    this.loadDDL();
    this.loadEmpList();
  }
  loadDDLStart = false;
  loadDDL(force = false) {
    if (!force && this.ddl) {
      return false;
    }
    if (this.loadDDLStart) {
      return false;
    }
    this.loadDDLStart = true;
    this.getDDLlist().subscribe(reqtype => {
      if (reqtype) {
        this.loadDDLStart = false;
        this.ddl = (reqtype as any).data;
        this.ddlsubject.next();
      }
    }, err => {
      this.loadDDLStart = false;
    });
  }
  loadStats() {
    this.wafihttRequest.postRequest_obj('task/getTasksStatistics', {}).subscribe(res => {
      if (res) {
        this.stats = (res as any).data;
      }
    });
  }
  loadEmpListStart = false;
  loadEmpList(force = false) {
    if (!force && this.ddl) {
      return false;
    }
    if (this.loadEmpListStart) {
      return false;
    }
    this.loadEmpListStart = true;
    this.getDDLEmplist().subscribe(reqtype => {
      if (reqtype) {
        this.empList = (reqtype as any).data['employeesList'].map(item => {
          item['empNameEmail'] = item['empName'] + ' (' + item['empWorkEmail'] + ')';
          return item;
        });
        this.empListFavourit = (reqtype as any).data['favouriteEmpsList'].map(rec => { return rec['favEmpId'] }).filter((item, i, ar) => ar.indexOf(item) === i);
        this.empListsubject.next();
        this.loadEmpListStart = false;
      }
    }, err => {
      this.loadEmpListStart = false;
    });
  }

  getfaVouriteList() {
    return this.empListFavourit.map(id => {
      return this.empList.find(it => it['empId'] == id);
    })
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
    return this.getNameFromList(this.empList, 'empId', id, 'empNameEmail'/*'empName'*/);
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
      data['status'] = 3;
    }
    return this.wafihttRequest.postRequest_obj('task/createTask', data);
  }
  AddFavEmp(data) {
    return this.wafihttRequest.postRequest_obj('task/addFavouriteEmp', data);
  }

  getTasksList(url = 'getMyTasks') {
    return this.wafihttRequest.postRequest_obj('task/' + url, {});
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

  DeleteFavEmployee(favEmpId) {

    return this.wafihttRequest.postRequest_obj('task/deleteFavouriteEmp', { favEmpId });
  }


}

