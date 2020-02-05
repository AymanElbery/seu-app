import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.scss']
})
export class StudentPaymentComponent implements OnInit, OnDestroy {
  @Input()
  url = 'https://apps.seu.edu.sa/fees/ug/index?sid=';
  urlSafe: SafeResourceUrl;
  sid;
  srcUrl;
  constructor(private translate: TranslateService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.UpdateSettings();
    this.subscribeLangChange();
  }

  subscriptions;
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  subscribeLangChange() {
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.UpdateSettings();
    });
  }

  UpdateSettings() {
    this.sid = localStorage.getItem('sid');
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.sid + "&lang=" + this.translate.currentLang);
    //console.log(this.urlSafe);
  }

}
