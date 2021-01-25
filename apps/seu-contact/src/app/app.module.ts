import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { ConfigService } from './shared/services/config.service';
import { HttpRequestService } from './shared/services/http-request.service';
import { UserManagerService } from './shared/services/user-manager.service';
import { AppStorageService } from './shared/services/app-storage.service';
import { PrintService } from './shared/services/print.service';
import { HomeService } from './rootservices/home.service';
import { UserService } from './account/services/user.service';
import { GlobalService } from './shared/services/global.service';
import { GlobalBaseService } from './shared/services/global-base.service';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppTransModule } from './app.trans.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AppTransModule,

  ],
  providers: [
    ConfigService,
    HttpRequestService,
    { provide: GlobalBaseService, useClass: GlobalService }
    , UserManagerService
    , AppStorageService
    , UserService
    , PrintService
    , HomeService
    , { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }

  ],
  entryComponents: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.use('ar');
  }
}
