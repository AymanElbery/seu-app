import { Injectable } from '@angular/core';
import { AppUserService } from '../../../services/app-user.service';
import {HttpRequestAdmisionUgService} from './http-request-admision-ug.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdmisionUgService extends AppUserService {
  studentDataDetails;
  message;
  notice;  

  constructor( router: Router,private admissionUgHttpRequest: HttpRequestAdmisionUgService) {
    super(router);
  }


  get fulName(){
    if(this.isLoggedIn)
return this.LoggedInUser['S_NAME'];
    
    return '';
    }

    get isLoggedIn(){
      if(this.LoggedInUser){
        return true;
      }
      return false
    }

  getresstatus(ssn) { 
    
    return this.admissionUgHttpRequest.postRequest_obj('/Admission_result_service',{ssn});  
}

getloginstatus(ssn) { 
    
  return this.admissionUgHttpRequest.postRequest_obj('/Admission_result_service/check',{ssn});  
}

getverification(token,code) { 
    
  return this.admissionUgHttpRequest.postRequest_obj('/Admission_result_service/verification',{token,code});  
}

logout_ug(token) { 
    
  return this.admissionUgHttpRequest.postRequest_obj('/Admission_result_service/Logout',{token});  
}

}


