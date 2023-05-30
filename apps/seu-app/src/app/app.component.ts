import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './account/services/user.service';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute, Route, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { oAuthDevelopmentConfig } from './oauth.config';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from './account/services/auth.service';

declare const gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  signedIn: Observable<boolean>;
  loadingDataImg: boolean = false;
  token_received_once: boolean = false;

  constructor(
    public userService: UserService, 
    private http: HttpClient,
    private oAuthService: OAuthService,
    private authService: AuthService,
    private router:Router,
    private route: Router, 
    private activatedRoute: ActivatedRoute, 
    private translate: TranslateService,
    private titleService: Title
  ) {
    this.activatedRoute.queryParams
    .subscribe(params => {
      if (params.lang) {
        this.setLang(params.lang);
      }
    });


    router.events.subscribe(event => {
      this.navigationInterceptor(event);
    });

    /** START : Code to Track Page View using gtag.js */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
       gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
       })
      })
      /** END : Code to Track Page View  using gtag.js */

      //Add dynamic title for selected pages - Start
      router.events.subscribe(event => {
        if(event instanceof NavigationEnd) {
          var title = this.getTitle(router.routerState, router.routerState.root).join(' > ');
          var titleString = title.split(",")[0];
          this.titleService.setTitle(titleString);
        }
      });
      //Add dynamic title for selected pages - End

  }

  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(this.getTitle(state, state.firstChild(parent)));
    }
    
    return data;
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: any): void {
    //Triggered When the navigation starts
      if (event instanceof NavigationStart) {
        this.loadingDataImg = true;
      }
    //Triggered When the navigation ends
      if (event instanceof NavigationEnd) {
        this.loadingDataImg = false;
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.loadingDataImg = false;
      }
    //Triggered When the error occurrs while navigation
      if (event instanceof NavigationError) {
        this.loadingDataImg = false;
      }
  }


  setLang(ulang) {
    let lang = 'ar';
    if (ulang == 'en' || ulang == 'ar') {
      lang = ulang;
    }
    localStorage.setItem('seu-lang', lang);
    this.translate.use(lang);
  }

  ngOnInit() {
    const notapps = (document.location.href.indexOf("/apps") == -1) ? true : false;
    const notpublic = (document.location.href.indexOf("/public") == -1) ? true : false;
    const notcontactus = (document.location.href.indexOf("/contactus") == -1) ? true : false;
    if (notapps && notpublic && notcontactus) {
      this.oidc();

      this.signedIn = this.authService.isSignedIn();

      this.authService.userChanged().subscribe(
      (user) => {
          //console.log("USER CHECNGED",user);
      });
      //this.userService.relogin();
    }
    
  }
  custionsso() {
    this.http.jsonp(environment.ssolink + '/sess.php', "callback").subscribe(
      res => {
        localStorage.setItem('sid', encodeURI(res['csid']));
        //this.userService.loadUserData();
      },
      err => {
        const notapps = (document.location.href.indexOf("/apps") == -1) ? true : false;
        const notpublic = (document.location.href.indexOf("/public") == -1) ? true : false;
        const notcontactus = (document.location.href.indexOf("/contactus") == -1) ? true : false;
        if (notapps && notpublic && notcontactus) {
          this.userService.relogin();
        }
      }
    );
  }

  oidc() {
    this.oAuthService.configure(oAuthDevelopmentConfig);
    let url: string = oAuthDevelopmentConfig.config_openid ;
    this.oAuthService.setStorage(localStorage);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();

    // Loads discovery document & tries login.
    this.oAuthService.loadDiscoveryDocument(url).then((doc: any) => {
      // Stores discovery document.
      //this.authService.setItem('discoveryDocument', doc.info.discoveryDocument);
      // Tries login.
      this.oAuthService.tryLogin().then(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initImplicitFlow(window.location.href);
        }
      });
    });

    // Setups silent refresh.
    this.oAuthService.setupAutomaticSilentRefresh();
    if (this.oAuthService.hasValidAccessToken()) {
      //console.log("HAS VALID TOKEN");
     // this.userService.loadUserData();
    }
    // Events.
    // On silently refreshed.
    this.oAuthService.events.subscribe(e => {
      if((e => e.type === 'token_received')){
        this.userService.loadUserData();
      }

      // if((e => e.type === 'session_terminated')){
      //   this.authService.refreshSession();
      // }
      
    });

    // // On session terminated.
    // this.oAuthService.events.filter(e => e.type === 'session_terminated').subscribe(e => {
    //   this.authService.refreshSession();
    // });

    // Already authorized.
    
    // else{
    //   this.oAuthService.initLoginFlow();
    // }
  }

}
