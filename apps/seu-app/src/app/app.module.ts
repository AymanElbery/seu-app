import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountModule } from './account/account.module';
import { ConfigService } from './shared/services/config.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BlankComponent } from './home/blank.component';
import { HeaderComponent } from './header/header.component';
import { HttpRequestService } from './shared/services/http-request.service';
import { UserManagerService } from './shared/services/user-manager.service';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { HttpClientModule } from '@angular/common/http';
import { AppStorageService } from './shared/services/app-storage.service';
import { NameComponentComponent } from './name-component/name-component.component';
import { PrintService } from './shared/services/print.service';
import { PrintLayoutComponent } from './PrintExample/print-layout/print-layout.component';
import { PrintFileComponent } from './PrintExample/print-file/print-file.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TimerModule } from './shared/components/timer/timer.module';
import { HomeService } from './rootservices/home.service';
import { UserService } from './account/services/user.service';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { DownloadPrintDirective } from './shared/services/download.directive';
import { ExternalLinkDirective } from './shared/services/external-link.directive';
import { GlobalService } from './shared/services/global.service';
import { GlobalBaseService } from './shared/services/global-base.service';
import { OwlModule } from 'ngx-owl-carousel';
import { AppTransModule } from './app.trans.module';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { AdmisPagesComponent } from './admis-pages/old/admis-pages.component';
import { StdsPagesComponent } from './admis-pages/stds/stds-pages.component';
import { PolicyComponent } from './home/policy.component';
import { AppErrorComponent } from './home/error.component';
import { GMPolicyComponent } from './home/gmpolicy.component';
import { SeucommonModule } from './seucommon/seucommon.module';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlankComponent,
    PolicyComponent,
    GMPolicyComponent,
    AutoGeneratedComponent,
    NameComponentComponent,
    PrintLayoutComponent,
    PrintFileComponent,
    MenuComponent,
    PageHeaderComponent,
    DownloadPrintDirective,
    ExternalLinkDirective,
    AdmisPagesComponent,
    StdsPagesComponent,
    AppErrorComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    OwlModule,
    AppTransModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    AccountModule,
    DashboardModule,
    FormsModule,
    ToastrModule.forRoot()
    , TimerModule
    , MatProgressSpinnerModule
    , MatDialogModule
    , SeucommonModule
  ],
  providers: [ConfigService,
    HttpRequestService,
    { provide: GlobalBaseService, useClass: GlobalService }
    , UserManagerService
    , AppStorageService
    , UserService
    , PrintService
    , HomeService
    , { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }

  ],
  entryComponents: [PolicyComponent, GMPolicyComponent],
  exports: [DownloadPrintDirective, ExternalLinkDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.use('ar');
  }
}
