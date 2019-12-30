import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { ConfigService } from './shared/services/config.service';
import { HttpRequestService } from './shared/services/http-request.service';
import { UserManagerService } from './shared/services/user-manager.service';
import * as mobileStorage from 'nativescript-localstorage';


import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { HomeComponent } from './home/home.component.tns';
import { AccountModule } from './account/account.module.tns';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { AcademicaffModule } from './academicaff/academicaff.module.tns';
import { GlobalService } from './shared/services/global.service.tns';
import { GlobalBaseService } from './shared/services/global-base.service';



@NgModule({
  declarations: [
    AppComponent,
    AutoGeneratedComponent ,
    HomeComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    AcademicaffModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    AccountModule,
    NativeScriptUISideDrawerModule
   
  ],
  
  providers: [ConfigService, HttpRequestService, UserManagerService,
    {provide: GlobalBaseService, useClass: GlobalService}
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
}


)

/*

Pass your application module to the bootstrapModule function located in main.ts to start your app
*/

export class AppModule { }
