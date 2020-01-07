import { Component, OnInit } from '@angular/core';
import { UserService } from '../account/services/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-blank-home',
  templateUrl: './blank.component.html'
})
export class BlankComponent {
  constructor(public userService: UserService, private http: HttpClient) {
    this.http.jsonp(environment.ssolink + '/sess.php', "callback").subscribe(
      res => {
        localStorage.setItem('sid', res['sid']);
        this.userService.loadUserData();
      },
      error => {
        this.userService.relogin();
      });
  }
}
