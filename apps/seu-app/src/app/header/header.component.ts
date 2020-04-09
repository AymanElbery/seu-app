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
    public dialog: MatDialog
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
    this.userManager.logout();
  }
  useLang(code) {
    this.currLang = code;
    this.translate.use(code);
    if (code === 'en') {
      this.loadExternalStyles('en-style.css')
        .then(() => {
          document.getElementById('html').setAttribute('lang', code);
          document.getElementById('html').setAttribute('dir', 'ltr');
        })
        .catch(() => { });
    } else {
      document.getElementById('html').setAttribute('lang', code);
      document.getElementById('html').setAttribute('dir', 'rtl');
      if (document.getElementById('enStyle')) {
        document.getElementById('enStyle').remove();
      }
    }
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
