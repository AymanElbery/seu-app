import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppServices } from 'src/app/seucommon/app-services';
import { TranslationUserService } from '../../services/translation-user';
import { TranslationPasswordComponent } from '../translation-password/translation-password.component';

@Component({
  selector: 'app-translation-header',
  templateUrl: './translation-header.component.html',
  styleUrls: ['./translation-header.component.css']
})
export class TranslationHeaderComponent implements OnInit {
  currLang;
  userData;

  constructor(public dialog: MatDialog, private app: AppServices,
    private router: Router, private translate: TranslateService, private tuser: TranslationUserService) { }

  ngOnInit() {
    if (this.tuser.userLoaded) {
      this.userData = this.tuser.user;
    }
    this.tuser.userHasLoaded.subscribe(() => {
      this.userData = this.tuser.user;
    });

    let lang = localStorage.getItem("seu-lang");
    if (!lang) {
      lang = 'ar';
    }
    this.useLang(lang);
    this.currLang = this.translate.currentLang;
  }

  logout() {
    localStorage.removeItem('sid');
    this.tuser.setUser(null);
    this.tuser.userLoaded = false;
    this.router.navigate(["/apps/translation/auth/login"]);
    return false;
  }

  useLang(code) {
    this.currLang = code;
    this.translate.use(code);
    this.app.updateStayle(code);
    localStorage.setItem('seu-lang', code);
    this.app.translate.next({ lang: code });

  }

  resetPawwordFrom() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '70%';
    this.dialog.open(TranslationPasswordComponent, dialogConfig);
    return false;
  }
}
