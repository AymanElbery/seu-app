import { Component, OnInit, Input } from '@angular/core';
// import { DOCUMENT } from "@angular/common";
import { Subscription, from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppUserService } from '../../../../services/app-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apps-header',
  templateUrl: './apps-header.component.html',
  styleUrls: ['./apps-header.component.css']
})
export class AppsHeaderComponent implements OnInit {
  logedin = '';
  @Input() appUserService;

  constructor(
    private translate: TranslateService, private router: Router
  ) {
  }
  userData: any = {};
  currLang;
  username = "";

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
  ngOnInit() {
    this.initLang();
    this.translate.onLangChange.subscribe(() => {
      this.initLang();
    });
  }

  logout() {
    this.appUserService.logout();
  }

}
