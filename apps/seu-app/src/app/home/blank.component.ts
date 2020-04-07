import { Component, OnInit } from '@angular/core';
import { UserService } from '../account/services/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PrintService } from '../shared/services/print.service';
import { ConfigService } from '../shared/services/config.service';
import { GlobalBaseService } from '../shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PolicyComponent } from './policy.component';

@Component({
  selector: 'app-blank-home',
  templateUrl: './blank.component.html'
})
export class BlankComponent implements OnInit {
  title = 'seu-app';
  print: PrintService;
  sessionloaded = false;
  constructor(
    public printService: PrintService,
    public configService: ConfigService,
    public userService: UserService,
    private http: HttpClient,
    private globalService: GlobalBaseService,
    private translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.print = printService;
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang('ar');

    this.setLang(localStorage.getItem('seu-lang'));
    this.route.queryParams
      .subscribe(params => {
        if (params.lang) {
          this.setLang(params.lang);
        }
      });

    this.http.jsonp(environment.ssolink + '/sess.php', "callback").subscribe(
      res => {
        localStorage.setItem('sid', encodeURI(res['csid']));
        this.userService.loadUserData();
      },
      error => {
        this.userService.relogin();
      });
  }
  setLang(ulang) {
    let lang = 'ar';
    if (ulang == 'en' || ulang == 'ar') {
      lang = ulang;
    }
    localStorage.setItem('seu-lang', lang);
    this.translate.use(lang);
  }
  ngOnInit() {
    // alert(this.globalService.getSID());
    this.userService.userDataSubject.subscribe(res => {
      if (res != null) {
        this.sessionloaded = true;
        document.getElementById('bodyloading')
          ? document.getElementById('bodyloading').remove()
          // tslint:disable-next-line: no-unused-expression
          : '';

        if ((this.userService.userData.role == "Instructor" || this.userService.userData.role == "Employee") && !this.userService.userData['policy']) {
          //this.router.navigate(['/policy']);
          const dialogConfig = new MatDialogConfig();
          dialogConfig.autoFocus = true;
          dialogConfig.disableClose = true;
          dialogConfig.maxWidth = 550;
          //dialogConfig.height = '58%';
          this.dialog.open(PolicyComponent, dialogConfig);
        }
      }
    });
  }
}
