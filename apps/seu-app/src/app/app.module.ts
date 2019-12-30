import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AccountModule } from './account/account.module';
import { config } from 'rxjs';
import { ConfigService } from './shared/services/config.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BlankComponent } from './home/blank.component';
import { HeaderComponent } from './header/header.component';
import { XHRBackend } from '@angular/http';
import { HttpRequestService } from './shared/services/http-request.service';
import { UserManagerService } from './shared/services/user-manager.service';
import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';
import { HttpClientModule } from '@angular/common/http';
import { AppStorageService } from './shared/services/app-storage.service';
import { AcademicprocsModule } from './academicprocs/academicprocs.module';
import { AcademicaffModule } from './academicaff/academicaff.module';
import { NameComponentComponent } from './name-component/name-component.component';
import { RegisterCoursesModule } from './register-courses/register-courses.module';
import { LecturesAbsenceModule } from './lectures-absence/lectures-absence.module';
import { FinanceAffairModule } from './finance-affair/finance-affair.module';
import { ExamsAffairModule } from './exams-affair/exams-affair.module';
import { OtherAffairModule } from './other-affair/other-affair.module';
import { PrintService } from './shared/services/print.service';
import { PrintLayoutComponent } from './PrintExample/print-layout/print-layout.component';
import { PrintFileComponent } from './PrintExample/print-file/print-file.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MasterAcademicRequestsModule } from './master-academic-requests/master-academic-requests.module';
import { MasterFinanceAffairModule } from './master-finance-affair/master-finance-affair.module';
import { MasterOtherRequestsModule } from './master-other-requests/master-other-requests.module';
import { MasterPrintCertificatesModule } from './master-print-certificates/master-print-certificates.module';
import { MasterStudentDataModule } from './master-student-data/master-student-data.module';
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
import { OwlModule } from "ngx-owl-carousel";
import { AppTransModule } from './app.trans.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlankComponent,
    HeaderComponent,
    AutoGeneratedComponent,
    NameComponentComponent,
    PrintLayoutComponent,
    PrintFileComponent,
    FooterComponent,
    MenuComponent,
    PageHeaderComponent,
    DownloadPrintDirective,
    ExternalLinkDirective
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
    ToastrModule.forRoot(),
    , TimerModule
    , MatProgressSpinnerModule
  ],
  providers: [ConfigService,
    HttpRequestService,
    { provide: GlobalBaseService, useClass: GlobalService }
    , UserManagerService
    , AppStorageService
    , UserService
    , PrintService
    , HomeService
  ],
  exports: [DownloadPrintDirective, ExternalLinkDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
