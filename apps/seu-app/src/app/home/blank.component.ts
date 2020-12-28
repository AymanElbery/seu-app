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
import { DocsConfirmComponent } from './docs-confirm.component';
import { GMPolicyComponent } from './gmpolicy.component';
import { StdUploadPhotoComponent } from './std-upload-photo/std-upload-photo.component';

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

    // this.http.jsonp(environment.ssolink + '/sess.php', "callback").subscribe(
    //   res => {
    //     localStorage.setItem('sid', encodeURI(res['csid']));
    //     this.userService.loadUserData();
    //   },
    //   error => {
    //     this.userService.relogin();
    //   });
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
          // const dialogConfig = new MatDialogConfig();
          // dialogConfig.autoFocus = true;
          // dialogConfig.disableClose = true;
          // dialogConfig.maxWidth = 550;
          // //dialogConfig.height = '58%';
          // let dialogRef = this.dialog.open(PolicyComponent, dialogConfig);
          // dialogRef.afterClosed().subscribe(result => {
          //   this.showConfirmation();
          // });
        } else {
          this.showConfirmation();
        }
        //console.log(this.userService.userData);
        if ((this.userService.userData.role == "Student" && this.userService.userData.level == "GR") && this.userService.userData['GM_policy'] && this.userService.userData['GM_policy']['show'] && !this.userService.userData['gmpolicy']) {
          //this.router.navigate(['/policy']);
          const dialogConfig = new MatDialogConfig();
          dialogConfig.autoFocus = true;
          dialogConfig.disableClose = true;
          dialogConfig.maxWidth = 550;
          //dialogConfig.height = '58%';
          this.dialog.open(GMPolicyComponent, dialogConfig);
        }
        if (this.userService.userData.role == "Student" && this.userService.userData['UPLOAD_PHOTO'] == 1 && !this.userService.userData['UPLOAD_PHOTO_STATUS']) {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.autoFocus = true;
          dialogConfig.disableClose = true;
          dialogConfig.maxWidth = "800px";
          const CanCancel = (this.userService.userData['UPLOAD_PHOTO_CANCEL'] == 1 ? true : false);
          dialogConfig.data = {'showCancelNotes':CanCancel,'allowCancel':CanCancel};
          this.dialog.open(StdUploadPhotoComponent, dialogConfig);
        }
      }
    });
  }
  showConfirmation() {
    let showConf = false;
    if (this.userService.userData['emp_confirm'] && this.userService.userData['emp_confirm']['show'] === true) {
      showConf = true;
    }
    if ((this.userService.userData.role == "Instructor" || this.userService.userData.role == "Employee") && showConf) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = '75%';
      dialogConfig.maxWidth = 1000;
      //dialogConfig.height = '88%';
      dialogConfig.data = { notes: this.userService.userData['emp_confirm']['notes'] };
      this.dialog.open(DocsConfirmComponent, dialogConfig);
    }
  }
}
