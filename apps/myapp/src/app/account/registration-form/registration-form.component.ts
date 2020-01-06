import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http'
import { finalize } from 'rxjs/operators';
import { UserRegistration } from '../../shared/models/user.registration.interface';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  errors: string;  
  isRequesting: boolean;
  submitted: boolean = false;
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }
  registerUser({ value, valid }: { value: UserRegistration, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if(valid)
    {
        this.userService.addUser(value.username ,value.email,value.password,value.firstName,value.lastName,value.address)
                  .pipe( finalize(()=>{this.isRequesting=false;}))
                  .subscribe(
                    result  => {if(result){
                      this.errors= result;
                    }},
                   ( error) =>{ 
                         
                  
                        this.errors ='ERR'+ error;
                       
                      
                    ;})
    }      
 } 

}
