import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';
import * as app from 'tns-core-modules/application';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.tns.html'
})
export class AppComponent implements OnInit {
    // tslint:disable-next-line: variable-name
    private _activatedUrl: string;
    // tslint:disable-next-line: variable-name
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._activatedUrl = '/home';
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        const draw =   app.getRootView() as RadSideDrawer;
        draw.drawerLocation = SideDrawerLocation.Right;
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade'
            }
        });

        const sideDrawer =  app.getRootView() as RadSideDrawer;
        sideDrawer.closeDrawer();
    }
}
