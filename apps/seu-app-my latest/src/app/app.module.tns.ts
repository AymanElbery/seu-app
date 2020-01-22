import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { HomeComponent } from './home/home.component';
import { ConfigService } from './shared/services/config.service';
import { HttpRequestService } from './shared/services/http-request.service';
import { UserManagerService } from './shared/services/user-manager.service';
import * as mobileStorage from 'nativescript-localstorage';


import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppStorageService } from './shared/services/app-storage.service';
import { AcademicprocsModule } from './academicprocs/academicprocs.module.tns';
import { AcademicaffModule } from './academicaff/academicaff.module.tns';
import { PrintLayoutComponent } from './PrintExample/print-layout/print-layout.component';
import { PrintFileComponent } from './PrintExample/print-file/print-file.component';
import { TimerComponent } from './shared/components/timer/timer.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutoGeneratedComponent,
    PrintLayoutComponent,
    PrintFileComponent,
    TimerComponent,
    FooterComponent,
    MenuComponent,
    PageHeaderComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    AccountModule,
    DashboardModule, AcademicprocsModule, AcademicaffModule
  ],
  providers: [ConfigService, HttpRequestService, UserManagerService,
  {
    provide: AppStorageService,
    useValue: mobileStorage
  }

  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }