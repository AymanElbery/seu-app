import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['../styles/contact.css', './contact-layout.component.css']
})
export class ContactLayoutComponent implements OnInit {
  currLang;
  loading = true;
  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
    localStorage.setItem("contactform", "1");
    window.location.href = "/contactus/index.html";

  }

  ngOnInit() {


  }

  // this.activatedRoute.queryParams
  //   .subscribe(params => {
  //     if (params.lang) {
  //       this.useLang(params.lang);
  //     } else {
  //       this.useLang(localStorage.getItem('seu-lang'));
  //     }
  //   });
  // // this.translate.onLangChange.subscribe(() => {
  //   this.currLang = this.translate.currentLang;
  // });
  // setTimeout(() => {
  //   //this.loadCss();
  // }, 1000);

  loadCss() {
    this.addCssURL("https://seu.edu.sa/css/bootstrap.min.css", "seubootstrap");
    this.addCssURL("https://seu.edu.sa/css/bootstrap.min-rtl.css", "seubootstraprtl");
    this.addCssURL("https://seu.edu.sa/css/bootsnav.css", "navurl");
    if (this.currLang == 'ar') {
      this.addCssURL("https://seu.edu.sa/css/bootsnav.rtl.css", "navurlrtl");
    }
  }

  addCssURL(styleUrl, id) {
    if (document.getElementById(id)) {
      document.getElementById(id).remove();
    }

    const styleElement = document.createElement('link');
    styleElement.href = styleUrl;
    styleElement.id = id;
    styleElement.rel = 'stylesheet';
    document.head.appendChild(styleElement);
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
      this.addCssURL("https://seu.edu.sa/css/bootsnav.rtl.css", "navurlrtl");
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
