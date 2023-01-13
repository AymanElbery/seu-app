import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServices {

  translate = new Subject();
  servicesList;
  constructor() { }


  updateStayle(code) {
    if (code === 'en') {
      if (document.getElementById('enStyle')) {
        document.getElementById('html').setAttribute('lang', code);
        document.getElementById('html').setAttribute('dir', 'ltr');
      } else {
        this.loadExternalStyles('en-style.css')
          .then(() => {
            document.getElementById('html').setAttribute('lang', code);
            document.getElementById('html').setAttribute('dir', 'ltr');
          })
          .catch(() => { });
      }
    } else {
      document.getElementById('html').setAttribute('lang', code);
      document.getElementById('html').setAttribute('dir', 'rtl');
      if (document.getElementById('enStyle')) {
        document.getElementById('enStyle').remove();
      }
    }
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
