import { Component, OnInit } from '@angular/core';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { GlobalBaseService } from '../shared/services/global-base.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.tns.html'
})
export class HomeComponent implements OnInit {

    constructor(  private  globalService: GlobalBaseService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        const sideDrawer =  app.getRootView() as RadSideDrawer;

        // Init your component properties here.
        sideDrawer.drawerLocation = SideDrawerLocation.Right;
    }

    onDrawerButtonTap(): void {
        const sideDrawer =  app.getRootView() as RadSideDrawer;
        sideDrawer.showDrawer();
    }
}
