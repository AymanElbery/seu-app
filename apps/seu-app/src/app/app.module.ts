import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountModule } from './account/account.module';
import { config } from 'rxjs';
import { ConfigService } from './shared/services/config.service';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule, XHRBackend } from '@angular/http';
import { HttpRequestService } from './shared/services/http-request.service';
import { UserManagerService } from './shared/services/user-manager.service';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { HttpClientModule } from '@angular/common/http';
import { AppStorageService } from './shared/services/app-storage.service';
import { AcademicprocsModule } from './academicprocs/academicprocs.module';
import { AcademicaffModule } from './academicaff/academicaff.module';
import { NameComponentComponent } from './name-component/name-component.component';
import { RegisterCoursesModule } from './register-courses/register-courses.module';
import { EqualizeModule } from './equalize/equalize.module';
import { LecturesAbsenceModule } from './lectures-absence/lectures-absence.module';
import { FinanceAffairModule } from './finance-affair/finance-affair.module';
import { ExamsAffairModule } from './exams-affair/exams-affair.module';
import { OtherAffairModule } from './other-affair/other-affair.module';
import { PrintService } from './shared/services/print.service';
import { PrintLayoutComponent } from './PrintExample/print-layout/print-layout.component';
import { PrintFileComponent } from './PrintExample/print-file/print-file.component';
import { GraduatesAffairsModule } from './graduates-affairs/graduates-affairs.module';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, AutoGeneratedComponent, NameComponentComponent, PrintLayoutComponent, PrintFileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
     AccountModule
     , DashboardModule
     , FormsModule
     , AcademicprocsModule
     , AcademicaffModule
     , RegisterCoursesModule
     , EqualizeModule
    , LecturesAbsenceModule
    , FinanceAffairModule
    , ExamsAffairModule
    , OtherAffairModule
    , GraduatesAffairsModule
  ],
  providers: [ConfigService,
     HttpRequestService
     , UserManagerService
     , AppStorageService
     , PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
