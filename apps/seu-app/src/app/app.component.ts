import { Component } from '@angular/core';
import { PrintService } from './shared/services/print.service';
import { ConfigService } from './shared/services/config.service';
import { UserService } from './account/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seu-app';
  print: PrintService;
  sessionloaded:boolean=false;
  constructor(public printService: PrintService, public configService: ConfigService, public userService: UserService) {
    this.print = printService;
    this.getSession();
  }

  getSession() {
    let sid = this.configService.getSid();
    if (!sid) {
      setTimeout(this.getSession, 500);
      return;
    }
    //console.log("LOAD USER DATAT ATATTTATATT==============================================================");
    this.userService.loadUserData().then(res => {
      this.sessionloaded = true;
    });
  }
}
