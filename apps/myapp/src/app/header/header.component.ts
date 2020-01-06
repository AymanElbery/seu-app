import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserManagerService } from '../shared/services/user-manager.service';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../shared/user-service.service';
import { UserService } from '../account/services/user.service';
import { NotificationsService } from '../shared/services/notificationsservice';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private userManager: UserManagerService, public userService: UserService, public notifications: NotificationsService, private translate: TranslateService) {


  }
  subscription: Subscription;
  isNavbarCollapsed;
  userData: any = {};
  status = false;
  currLang;
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    this.userManager.logout();

  }
  useLang(code) {
    this.currLang = code;
    this.translate.use(code);
  }
  ngOnInit() {
    this.currLang = this.translate.currentLang;
    //console.log('header user data');
    this.userService.userDataSubject.
      subscribe(res => {
        if (res) {
          this.userData = this.userService.getActiveRoleDetails();
          // if (!this.userService.userData.name_ar) {
          //   setTimeout(() => {
          //     window.location.reload();
          //   }, 500);
          // }
        }
      });

    // // tslint:disable-next-line: triple-equals
    // if (this.userService.userData.name_ar === '') {
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 3000);







  }
}
