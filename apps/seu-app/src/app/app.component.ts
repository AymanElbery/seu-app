import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './account/services/user.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public userService: UserService, private http: HttpClient, private route: Router) {

  }

  ngOnInit() {
    this.http.jsonp(environment.ssolink + '/sess.php', "callback").subscribe(
      res => {
        localStorage.setItem('sid', encodeURI(res['csid']));
        this.userService.loadUserData();
      },
      err => {
        if (!this.route.url.startsWith("/apps")) {
          this.userService.relogin();
        }
      }
    );
  }

}
