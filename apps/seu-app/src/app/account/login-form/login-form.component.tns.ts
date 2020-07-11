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
import { AppToasterService } from '../../shared/services/app-toaster.tns';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import * as utils from "tns-core-modules/utils/utils";
import * as appavailability from "nativescript-appavailability";
import { isIOS, isAndroid } from 'tns-core-modules/ui/page/page';
import { TranslateService } from '@ngx-translate/core';
import { ApiUserRoles } from '../../shared/models/StaticData/api-user-roles';



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
  clicked = {};
  submitted = false;
  credentials: Credentials = { email: '', password: '' };
  status;
  isLoading: boolean;
  role: string;
  constructor(
    private page: Page,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private globalSer: GlobalService,
    private ref: ChangeDetectorRef,
    private toastr: AppToasterService,
    private routerExtensions: RouterExtensions,
    private translate: TranslateService
  ) {
    console.log('l1');
    this.globalSer.setSid('AAAAAAAAAAAAA');

    page.actionBarHidden = true;
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {

        this.brandNew = param.brandNew;
        this.credentials.email = param.email;
      }
    );
    console.log('l2');
    //this.userService.userData.activeRole = (ApiUserRoles.Emplpyee);

    // this.userManger.logout();
    // this.userManger.logout();
  }

  clickme(item) {
    this.clicked = item;
  }
  uclickme(item) {
    this.clicked = {};
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


    this.isLoading = true;
    this.userService.SignIn( this.credentials.email, this.credentials.password).then(res => {

      this.status = (res as any).status;
      const data = (res as any);
      if ((res as any).status) {
         this.globalSer.setSid(data.sid);
         this.role = this.userService.userData.activeRole = (data.data.data.role);
         applicationSettings.setString('user', this.credentials.email);
         applicationSettings.setString('pass', this.credentials.password);
         this.userService.logedIn = true;
         if (this.role === 'Vendor') {
           this.userService.userData.student_details.level = data.data.data.student_details_gr.level;

         } else if (this.role === 'Student') {
          this.userService.userData.student_details.level = data.data.data.level;
         }
         this.userService.userData.username = data.data.data.username;
         this.userService.userData.name_ar = data.data.data.name_ar;
         console.log(data.data);
         this.userService.userData.id=data.data.data.id;
       // this.ref.markForCheck();
        // this.ref.detectChanges();
         this.isLoading = false;
         const sideDrawer =  app.getRootView() as RadSideDrawer;
         sideDrawer.isEnabled = true;
         sideDrawer.gesturesEnabled = true;

         this.router.navigate(['/land']);

        } else {
          this.isLoading = false;
          this.toastr.tryagain();
        }
      }
    ,
    err => {
      this.isLoading = false;
      this.toastr.tryagain();
     // alert(err);
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
    this.credentials.email = applicationSettings.getString('user');
    this.credentials.password = applicationSettings.getString('pass');
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.isEnabled = false;
    sideDrawer.gesturesEnabled = false;

  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
  openLink(url:string){
    utils.openUrl(url);
  }
  
  
  openWhatsAppConversation(){
    let chatBotNumber="966112613500"
    let msg=this.translate.instant('general.isInstalled')
    if(isIOS) {
      appavailability.available("whatsapp://")
        .then((avail: boolean) => {
          if(avail) {
            utils.openUrl("whatsapp://send?phone="+chatBotNumber)
          } else {
            this.toastr.show(msg);
          }
        })
    } else {
      appavailability.available("com.whatsapp")
        .then((avail: boolean) => {
          if(avail) {
            utils.openUrl("https://api.whatsapp.com/send?phone="+chatBotNumber)
          } else {
            this.toastr.show(msg);
          }
        })
    }
  }
}
