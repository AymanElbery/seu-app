import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../shared/services/notificationsservice.tns';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.tns.html',
  styleUrls: ['./header.component.tns.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router ,
    public notifications: NotificationsService

  ) {

  }
    ngOnInit(): void {
        const sideDrawer =  app.getRootView() as RadSideDrawer;
        sideDrawer.drawerLocation = SideDrawerLocation.Right;
    }

    getNotifications() {
        this.router.navigate(['/notifications']);
      }

      onDrawerButtonTap(): void {
        const sideDrawer =  app.getRootView() as RadSideDrawer;
        sideDrawer.showDrawer();
    }

    goHome() {
      this.router.navigate(['/land']);
    }
    navigate(route: string) {
      this.router.navigate([route]);
    }
}
