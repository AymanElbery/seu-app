import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { WafiHttpRequestService } from '../../wafi/services/wafi-http-request.service';
import { GlobalBaseService } from '../../shared/services/global-base.service';
import { Employee } from '../../wafi/personal/personalinfo/employee'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  constructor(private wafihttRequest: WafiHttpRequestService) {
  }

  // getِEmpInfo() {

  //   return this.wafihttRequest.postRequest('emp/get-emp-info',{}).toPromise();
  // }

  getdataEmployees() { 
    return this.wafihttRequest.postRequest_obj('emp/get-emp-info',{});  
}
updateEmpInfo(data) { 
  return this.wafihttRequest.postRequest_obj('emp/update-emp-info',{email:data.email,mobile_no:data.mobile_no,phone_no:data.phone_no,address:data.address,address_s:data.address_s,preferred_lang_sms:data.preferred_lang_sms});  
}
getmanagerialduties() { 
  return this.wafihttRequest.postRequest_obj('emp/get-managerial-duties',{});  
}
getdataEmployeesLang() { 
  return this.wafihttRequest.postRequest_obj('emp/get-comm-lang',{});  
}

getsalaryyear(){
  return this.wafihttRequest.postRequest_obj('emp/get-salary-years',{});
}

getEmpsalary(year:any){
  return this.wafihttRequest.postRequest_obj('emp/get-salaries',{year});
}

getEmpsalaryDetail(month:any,year:any){
  return this.wafihttRequest.postRequest_obj('emp/get-salary-details',{month,year});
}

getvacationstype(gender:any,category:any){
  return this.wafihttRequest.postRequest_obj('emp/get-vacation-types',{gender,category});
}

getVacation(vacationCode:any,startDate:any){
  return this.wafihttRequest.postRequest_obj('emp/get-vacations',{vacationCode,startDate});
}

getprintreport(repName:any,outerSide:any){
  return this.wafihttRequest.postRequest_obj('emp/print-report',{repName,outerSide});
}

getprintreport_housing(repName:any){
  return this.wafihttRequest.postRequest_obj('emp/print-pdf-report',{repName});
}


}