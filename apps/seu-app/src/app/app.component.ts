import { Component, OnInit } from "@angular/core";
import { PrintService } from "./shared/services/print.service";
import { ConfigService } from "./shared/services/config.service";
import { UserService } from "./account/services/user.service";
import { HttpClient } from "@angular/common/http";
import { Jsonp } from "@angular/http";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "seu-app";
  print: PrintService;
  sessionloaded: boolean = false;
  constructor(
    public printService: PrintService,
    public configService: ConfigService,
    public userService: UserService,
    private http: HttpClient,
    translate: TranslateService
  ) {
    this.print = printService;
    translate.addLangs(['ar','en']);
    translate.setDefaultLang('ar');
    translate.use('ar');

  }
  ngOnInit() {
    this.userService.userDataSubject.subscribe(res => {
      if (res != null) {
        this.sessionloaded = true;
        document.getElementById("bodyloading")
          ? document.getElementById("bodyloading").remove()
          : "";
      }
    });
  }
}
