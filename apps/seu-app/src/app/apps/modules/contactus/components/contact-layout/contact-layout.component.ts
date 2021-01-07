import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['../styles/contact.css','./contact-layout.component.css']
})
export class ContactLayoutComponent implements OnInit {
  currLang;

  constructor(private translate: TranslateService) {

  }

  ngOnInit() {
    this.useLang("en");
    this.currLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe(() => {
      this.currLang = this.translate.currentLang;
    });
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

}
