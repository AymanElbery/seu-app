import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/account/services/user.service';

@Component({
  selector: 'app-student-diplome-payment',
  templateUrl: './student-diplome-payment.component.html',
  styleUrls: ['./student-diplome-payment.component.scss']
})
export class StudentDiplomePaymentComponent implements OnInit, OnDestroy {
  @Input()
  url = 'https://apps.seu.edu.sa/fees/ud/index';
  urlSafe: SafeResourceUrl;
  sid;
  srcUrl;
  constructor(private translate: TranslateService, public sanitizer: DomSanitizer, private userService: UserService) { }

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
    const user = this.userService.getActiveRoleDetails();
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + '/' + user.username + '?sid=' + this.sid + "&lang=" + this.translate.currentLang);
  }

}
