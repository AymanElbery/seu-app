import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['../styles/contact.css', './contact-layout.component.css']
})
export class ContactLayoutComponent implements OnInit {
  currLang = 'ar';
  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.lang) {
          this.useLang(params.lang);
        } else {
          this.useLang(localStorage.getItem('seu-lang'));
        }
      });
    // this.translate.onLangChange.subscribe(() => {
    //   this.currLang = this.translate.currentLang;
    // });
    // setTimeout(() => {
    //   //this.loadCss();
    // }, 1000);
  }

  loadCss() {
    if (this.currLang == 'ar') {
      this.addCssURL("/assets/seu/css/bootstrap.min-rtl.css", "bootstrap_rtl");
      this.addCssURL("/assets/seu/css/bootsnav.rtl.css", "bootsnav_rtl");
      document.getElementById('html').setAttribute('dir', 'rtl');
    } else {
      this.addCssURL("/assets/seu/css/bootstrap.min.css", "bootstrap_rtl");
      this.addCssURL("/assets/seu/css/bootsnav.css", "bootsnav_rtl");
      this.addCssURL("/assets/seu/css/style-en.css", "seu_style_en");
      document.getElementById('html').setAttribute('dir', 'ltr');
    }
    document.getElementById('html').setAttribute('lang', this.currLang);

    return false;
    // this.addCssURL("https://seu.edu.sa/css/bootstrap.min.css", "seubootstrap");
    // this.addCssURL("https://seu.edu.sa/css/bootstrap.min-rtl.css", "seubootstraprtl");
    // this.addCssURL("https://seu.edu.sa/css/bootsnav.css", "navurl");
    // if (this.currLang == 'ar') {
    //   this.addCssURL("https://seu.edu.sa/css/bootsnav.rtl.css", "navurlrtl");
    // }
  }

  addCssURL(styleUrl, id) {
    let elm = document.getElementById(id);
    if (elm) {
      //document.getElementById(id).remove();
      elm.setAttribute("href", styleUrl);
    } else {
      const styleElement = document.createElement('link');
      styleElement.href = styleUrl;
      styleElement.id = id;
      styleElement.rel = 'stylesheet';
      document.head.appendChild(styleElement);
    }
  }

  useLang(code) {
    this.translate.use(code);
    if (code === 'en') {
      document.getElementById('html').setAttribute('lang', code);
      document.getElementById('html').setAttribute('dir', 'ltr');
      this.currLang = 'en';
    } else {
      document.getElementById('html').setAttribute('lang', code);
      document.getElementById('html').setAttribute('dir', 'rtl');
      if (document.getElementById('seu_style_en')) {
        document.getElementById('seu_style_en').remove();
      }
      this.currLang = 'ar';
    }
    this.loadCss();
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
