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

  // asda() {
  //   const data = JSON.parse('{"configuration":{"release-version":"12.2.1.4.6"},"access-configuration":{"http-direct-authentication-endpoint":"https://iamtest.seu.edu.sa:443/oam/server/authentication","http-logout-endpoint":"https://iamtest.seu.edu.sa:443/oam/server/logout","http-credential-submit-endpoint":"https://iamtest.seu.edu.sa:443/oam/server/auth_cred_submit"},"openid-configuration":{"issuer":"https://iamtest.seu.edu.sa:443/oauth2","authorization_endpoint":"https://iamtest.seu.edu.sa:443/oauth2/rest/authorize","token_endpoint":"https://iamtest.seu.edu.sa:443/oauth2/rest/token","userinfo_endpoint":"https://iamtest.seu.edu.sa:443/oauth2/rest/userinfo","introspect_endpoint":"https://iamtest.seu.edu.sa:443/oauth2/rest/token/info","jwks_uri":"https://iamtest.seu.edu.sa:443/oauth2/rest/security","end_session_endpoint":"https://iamtest.seu.edu.sa:443/oauth2/rest/userlogout","scopes_supported":["openid","profile","email","address","phone"],"response_types_supported":["code","token","id_token","token id_token"],"grant_types_supported":["client_credentials","password","refresh_token","authorization_code","implicit","urn:ietf:params:oauth:grant-type:jwt-bearer"],"subject_types_supported":["public"],"id_token_signing_alg_values_supported":["RS256"],"userinfo_signing_alg_values_supported":["none"],"token_endpoint_auth_methods_supported":["client_secret_basic","client_secret_jwt"],"token_endpoint_auth_signing_alg_values_supported":["RS256"],"claims_supported":["aud","exp","iat","iss","jti","sub"],"ui_locales_supported":["en"]}}');
  //   let doc: any = data['openid-configuration'];
  //   this.oAuthService.loginUrl = doc.authorization_endpoint;
  //   this.oAuthService.logoutUrl = doc.end_session_endpoint;
  //   this.oAuthService.issuer = doc.issuer;
  //   this.oAuthService.tokenEndpoint = doc.token_endpoint;
  //   this.oAuthService.userinfoEndpoint = doc.userinfo_endpoint;
  //   this.oAuthService.sessionCheckIFrameUrl = doc.check_session_iframe || this.oAuthService.sessionCheckIFrameUrl;
  //   this.oAuthService.discoveryDocumentLoaded = true;
  //   //this.oAuthService.grantTypesSupported = doc.grant_types_supported;
  //   //this.oAuthService.discoveryDocumentLoadedSubject.next(doc);
  //   if (this.oAuthService.sessionChecksEnabled) {
  //     this.oAuthService.restartSessionChecksIfStillLoggedIn();
  //   }
  // }

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
      //console.log(e);
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
