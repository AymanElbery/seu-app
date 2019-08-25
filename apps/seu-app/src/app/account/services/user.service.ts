import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { UserRegistration } from '../../shared/models/user.registration.interface';
import {Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { BaseService } from '../../shared/services/base.service';
import { UserManagerService } from '../../shared/services/user-manager.service';




@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
baseUrl:string='';
logedIn:boolean=false;
  constructor(private configService: ConfigService,private httRequest:HttpRequestService) {

    super();
    this.baseUrl=configService.getApiURI();
   }
   
   addUser(username:string, email: string, password: string, firstName: string, lastName: string,location: string) {
    
    let body = {username, email, password, firstName, lastName,location };
    return this.httRequest.postRequest('accounts',body).pipe(map((res: any)=>res),catchError(err=>{console.error(err);return throwError(err)}));
  }


  login(userName, password) {
    console.log('ser');
    return this.httRequest.postRequest
      (
       'auth/login',
      { userName, password }
      ).pipe(map((res: any)=> res),catchError(err=>{ console.error(err);return err;}));
     
      
     
  }
}
