import { Component, OnInit, OnDestroy } from '@angular/core';
import { Credentials } from '../../shared/models/credentials.interface';
import { Subscription, Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManagerService } from '../../shared/services/user-manager.service';
import { GlobalService } from '../../shared/services/global.service.tns';
import { map } from 'rxjs/operators';
import * as applicationSettings from 'tns-core-modules/application-settings';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.tns.html',
  styleUrls: ['./login-form.component.tns.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted = false;
  credentials: Credentials = { email: '', password: '' };
  status;
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private globalSer: GlobalService,
    private ref: ChangeDetectorRef
  ) {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {

        this.brandNew = param.brandNew;
        this.credentials.email = param.email;
      }
    );
    // this.userManger.logout();
    // this.userManger.logout();
  }

  login() {
   /*  this.submitted = true;
    this.isRequesting = true;
    this.errors = '';

    this.userService.loadUserData().then(() => {
      if (this.userService.userData.activeRole === '') {
        this.userService.loadUserData();
      }
    }
    ); */

    this.userService.SignIn( this.credentials.email, this.credentials.password).then(res => {
      this.status=(res as any).status;
      this.status;
      const data = (res as any);
      if ((res as any).status) {
         this.globalSer.setSid(data.sid);
         this.userService.userData.activeRole = (data.data.data.role);
         applicationSettings.setString('user', this.credentials.email);
         applicationSettings.setString('pass', this.credentials.password);
         this.userService.logedIn=true;
         this.userService.userData.student_details.level=data.data.data.student_details.level;
        this.userService.userData.username=data.data.data.username;
       // this.ref.markForCheck();
        //this.ref.detectChanges();
        
         this.router.navigate(['/land']);

        }
      }
    ,
    err => {
      alert(err);
      // if (localStorage.getItem("userreloaded")) {
      //   localStorage.removeItem("userreloaded");
      //   window.location.href = "https://seu.edu.sa";
      // } else {
      //   localStorage.setItem("userreloaded", "1");
      // }
    }

    );
  //
    /*  this.userService
       .login(value.email, value.password)
       .pipe(finalize(() => (this.isRequesting = false)))
       .subscribe(
         result => {
           //console.log(result.data);
           if (result.status == 1) {
             this.userManger.saveToken(result.data);

             this.userManger.login();
             this.router.navigate(["/dashboard/home"]);
           } else {
             dialogs.alert("Invalid username or password").then(() => {
               //console.log("Dialog!");
             });
             if (result.messages) {
               this.errors = result.messages[0].body;
             }
           }
         },
         error => {
           this.errors = error;
           dialogs.alert(error).then(() => {
             //console.log("Dialog closed!");
           });
         }
       ); */
  }

  ngOnInit() { 
    this.credentials.email=applicationSettings.getString('user');
    this.credentials.password=applicationSettings.getString('pass');
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
}
