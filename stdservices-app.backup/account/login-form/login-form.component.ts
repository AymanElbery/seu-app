import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../shared/models/credentials.interface';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { UserManagerService } from '../../shared/services/user-manager.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { email: '', password: '' };
  constructor(private userService: UserService,private userManger:UserManagerService, private router: Router,private activatedRoute: ActivatedRoute) {

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
         this.brandNew = param['brandNew'];   
         this.credentials.email = param['email'];         
      }); 
    
   }

   login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
    if (valid) {
      this.userService.login(value.email, value.password).pipe(
        finalize(() => this.isRequesting = false))
        .subscribe(
        result => {       
          console.log(result);  
          if (result.status==1) {
             this.router.navigate(['/dashboard/home']);  
             this.userManger.saveToken(result.data);
             this.userManger.login();

             
          }
          else
          {
            if(result.messages)
            {
            this.errors=result.messages[0].body;
            }
          }
        },
        error => this.errors = error);
    }
  } 

  ngOnInit() {
  }
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

}
