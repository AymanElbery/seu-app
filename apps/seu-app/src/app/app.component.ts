import { Component, OnInit } from '@angular/core';
import { PrintService } from './shared/services/print.service';
import { ConfigService } from './shared/services/config.service';
import { UserService } from './account/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'seu-app';
  print: PrintService;
  sessionloaded: boolean = false;
  constructor(public printService: PrintService, public configService: ConfigService, public userService: UserService, private http: HttpClient) {
    this.print = printService;
  }
  ngOnInit() {
    this.userService.userDataSubject.subscribe(res => {
      this.sessionloaded = true;
      document.getElementById('bodyloading').remove();
    });
  }
}
