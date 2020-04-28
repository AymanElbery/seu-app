import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AdmissionGRService } from '../../services/admission-gr.service';
@Component({
  selector: 'app-pay-fee',
  templateUrl: './pay-fee.component.html',
  styleUrls: ['./pay-fee.component.css']
})
export class PayFeeComponent implements OnInit {

  url = '/gr/index';
  urlSafe: SafeResourceUrl;
  sid;
  srcUrl;
  constructor(private translate: TranslateService, public sanitizer: DomSanitizer, private admissionGrservice: AdmissionGRService) { }

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
    const user_id = this.admissionGrservice.LoggedInUser['ID'];
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(environment.paymentLink + this.url + '/' + user_id + '?lang=' + this.translate.currentLang);
    // console.log(this.urlSafe);
  }
}
