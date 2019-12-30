import { Component, OnInit } from '@angular/core';
import { PrintService } from './shared/services/print.service';
import { ConfigService } from './shared/services/config.service';
import { UserService } from './account/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Jsonp } from '@angular/http';
import { GlobalBaseService } from './shared/services/global-base.service';
import { GlobalService } from './shared/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'seu-app';
  print: PrintService;
  sessionloaded = false;
  constructor(
    public printService: PrintService,
    public configService: ConfigService,
    public userService: UserService,
    private http: HttpClient,
    private  globalService: GlobalBaseService
  ) {
    this.print = printService;
  }
  ngOnInit() {
   // alert(this.globalService.getSID());
    this.userService.userDataSubject.subscribe(res => {
      if (res != null) {
        this.sessionloaded = true;
        document.getElementById('bodyloading')
          ? document.getElementById('bodyloading').remove()
          // tslint:disable-next-line: no-unused-expression
          : '';
      }
    });
  }
}
