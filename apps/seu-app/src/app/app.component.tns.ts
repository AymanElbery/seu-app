import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';
import * as app from 'tns-core-modules/application';
import { GlobalBaseService } from './shared/services/global-base.service';
import { UserService } from './account/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { isAndroid, isIOS } from "tns-core-modules/ui/frame/frame";
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.tns.html'
})
export class AppComponent implements OnInit {
    @ViewChild(RadSideDrawerComponent,
        {
            static:false
    }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    // tslint:disable-next-line: variable-name
    private _activatedUrl: string;
    // tslint:disable-next-line: variable-name
    private _sideDrawerTransition: DrawerTransitionBase;
    public userName:String="UserName";
    level: string="";

    constructor(    private translate: TranslateService,
                    public userService: UserService,
                    private router: Router, private routerExtensions: RouterExtensions,    
                    private  globalService: GlobalBaseService ,
                    private changeDetectionRef: ChangeDetectorRef) {
        // Use the component constructor to inject services.
        translate.addLangs(['ar', 'en']);
        translate.setDefaultLang('ar');
        translate.use('ar');
    

    }

    ngOnInit(): void {

        this._activatedUrl = '/home';
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        const draw =   app.getRootView() as RadSideDrawer;
        this.userService.logedIn=false;
     //   draw.drawerLocation = SideDrawerLocation.Right;
    }

    get sideDrawerTransition(): DrawerTransitionBase {
    
        this.userName=this.userService.userData.name_ar;
      
        this.level=this.userService.userData.student_details.level;
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

    ngAfterViewInit(): void {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();

        if (isIOS) {
          // This disables the swipe gesture to open menu
          this.drawer.ios.defaultSideDrawer.allowEdgeSwipe = false;
    
          // You can set other properties the same way, to style your RadSideDrawer for iOS. 
          // Such as:
          // ios.defaultSideDrawer.style.dimOpacity;
          // ios.defaultSideDrawer.style.shadowOpacity; 
          // ios.defaultSideDrawer.style.shadowRadius;
          // ios.defaultSideDrawer.transitionDuration;
        }
      }
    
      onLoaded() {
        if (isAndroid) {
          // This disables the swipe gesture to open menu, by setting the treshhold to '0'
          this.drawer.android.setTouchTargetThreshold(0);

        }
      }
    
}
