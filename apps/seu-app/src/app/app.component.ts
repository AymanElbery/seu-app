import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './account/services/user.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public userService: UserService, private http: HttpClient, private route: Router, private activatedRoute: ActivatedRoute, private translate: TranslateService
  ) {
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.lang) {
          this.setLang(params.lang);
        }
      });

    // this.http.jsonp(environment.ssolink + '/sess.php', "callback").subscribe(
    //   res => {
    //     localStorage.setItem('sid', encodeURI(res['csid']));
    //     this.userService.loadUserData();
    //   },
    //   error => {
    //     this.userService.relogin();
    //   });
  }
  setLang(ulang) {
    let lang = 'ar';
    if (ulang == 'en' || ulang == 'ar') {
      lang = ulang;
    }
    localStorage.setItem('seu-lang', lang);
    this.translate.use(lang);
  }

  ngOnInit() {
    this.http.jsonp(environment.ssolink + '/sess.php', "callback").subscribe(
      res => {
        localStorage.setItem('sid', encodeURI(res['csid']));
        this.userService.loadUserData();
      },
      err => {
        if (this.route.url.indexOf("/apps") == -1) {
          this.userService.relogin();
        }
      }
    );
  }

}
