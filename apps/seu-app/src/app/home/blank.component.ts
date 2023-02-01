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
import { VaccineStatusComponent } from './vaccine-status/vaccine-status.component';
import { SeuStructureEmpComponent } from './seu-structure-emp/seu-structure-emp.component';
import { OtpConfirmation } from './otp-confirmation/otp-confirmation.component';
import { FeesUDConfirmation } from './fees-UD-confirmation/fees-UD-confirmation.component';
import { StudentRightsComponent } from './student-rights/student-rights.component';
import { GMPolicyComponent } from './gmpolicy.component';
import { StdUploadPhotoComponent } from './std-upload-photo/std-upload-photo.component';

@Component({
  selector: 'app-blank-home',
  templateUrl: './blank.component.html'
})
export class BlankComponent implements OnInit {
  title = 'seu-app';
  print: PrintService;
  showFeesUDOnce= 0;
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

    //
    this.userService.userDataSubject.subscribe(res => {
      if (res != null) {
        this.sessionloaded = true;
        document.getElementById('bodyloading')
          ? document.getElementById('bodyloading').remove()
          // tslint:disable-next-line: no-unused-expression
          : '';
        if ((this.userService.userData.role == "Student") && this.userService.userData.COMMITTE_CONFIRM == 0) {
          this.router.navigate(['/committe-confirm/committe']);
        }
        
        this.showConfirmation();

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
        if(!this.showFeesUDOnce){
          this.showFeesUdConfirm();
        }
      }
    });
    //
    this.setLang(localStorage.getItem('seu-lang'));
    this.route.queryParams
      .subscribe(params => {
        if (params.lang) {
          this.setLang(params.lang);
        }
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
    this.showOtpConfirm();
  }

  showOtpConfirm(){
    this.userService.userDataSubject.subscribe(userData => {
      if (userData) {
        if (!userData.OTP) {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.autoFocus = true;
          dialogConfig.disableClose = true;
          dialogConfig.width = '50%';
          dialogConfig.maxWidth = 1000;
          this.dialog.open(OtpConfirmation, dialogConfig);
        }
      }
    });
  }
  
  showFeesUdConfirm(){
    this.showFeesUDOnce = 1;
    if (!this.userService.userData['FEES_UD']) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = '50%';
      dialogConfig.maxWidth = 1000;
      this.dialog.open(FeesUDConfirmation, dialogConfig);
    }
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
      dialogConfig.data = { notes: this.userService.userData['emp_confirm']['notes'] };
      this.dialog.open(DocsConfirmComponent, dialogConfig);
    }
  }
}
