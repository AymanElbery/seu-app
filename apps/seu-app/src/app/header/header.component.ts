import { Component, OnInit, OnDestroy } from '@angular/core';
// import { DOCUMENT } from "@angular/common";
import { UserManagerService } from '../shared/services/user-manager.service';
import { Subscription, from } from 'rxjs';
import { UserServiceService } from '../shared/user-service.service';
import { UserService } from '../account/services/user.service';
import { NotificationsService } from '../shared/services/notificationsservice';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { ApiUserRoles } from '../shared/models/StaticData/api-user-roles';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ResetPasswordComponent } from '../account/reset-password/reset-password.component';
import { AppServices } from '../seucommon/app-services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private userManager: UserManagerService,
    public userService: UserService,
    public notifications: NotificationsService,
    private translate: TranslateService,
    public dialog: MatDialog,
    private app: AppServices
  ) {
    this.environment = environment;
  }
  subscription: Subscription;
  isNavbarCollapsed;
  userData: any = {};
  status = false;
  currLang;
  environment;
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

  logout() {
    //this.userManager.logout();
    //localStorage.removeItem('access_token');
    localStorage.removeItem('access_token');
    window.location.href = "https://iam.seu.edu.sa/oam/server/logout?end_url=https://iam.seu.edu.sa/SEUSSO/pages/Logout.jsp";
  }
  useLang(code) {
    this.currLang = code;
    this.translate.use(code);
    this.app.updateStayle(code);
    this.app.translate.next({ lang: code });
    localStorage.setItem('seu-lang', code);
  }

  private loadExternalStyles(styleUrl: string) {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.href = styleUrl;
      styleElement.id = 'enStyle';
      styleElement.rel = 'stylesheet';
      styleElement.onload = resolve;
      document.head.appendChild(styleElement);
    });
  }
  initLang() {
    this.currLang = this.translate.currentLang;
    this.useLang(this.currLang);
  }
  hasWafi = false;
  ngOnInit() {
    this.initLang();
    this.translate.onLangChange.subscribe(() => {
      this.initLang();
    });
    // console.log('header user data');
    this.userService.userDataSubject.subscribe(res => {
      if (res) {
        this.userData = this.userService.getActiveRoleDetails();

        this.hasWafi = environment.allowWafi && (this.userService.userData.activeRole == ApiUserRoles.Emplpyee || this.userService.userData.activeRole == ApiUserRoles.Instructor);

      }
    });

  }
  resetPawwordFrom() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '70%';
    this.dialog.open(ResetPasswordComponent, dialogConfig);
  }
}
