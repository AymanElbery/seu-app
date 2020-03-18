import { Component, OnInit } from '@angular/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { NotificationsService } from '../../shared/services/notificationsservice.tns';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public notifications: NotificationsService) { }

  ngOnInit() {

    const sideDrawer =  app.getRootView() as RadSideDrawer;

    sideDrawer.drawerLocation = SideDrawerLocation.Right;
  }

  getNotifications(){
  }

  onDrawerButtonTap(): void {
    const sideDrawer =  app.getRootView() as RadSideDrawer;
    sideDrawer.showDrawer();
}

}
