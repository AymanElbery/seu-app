import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-master-payment',
  templateUrl: './master-payment.component.html',
  styleUrls: ['./master-payment.component.scss']
})
export class MasterPaymentComponent implements OnInit, OnDestroy {
  @Input()
  url = 'https://apps.seu.edu.sa/fees/gr/index?sid=';
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
    // console.log(this.urlSafe);
  }

}
