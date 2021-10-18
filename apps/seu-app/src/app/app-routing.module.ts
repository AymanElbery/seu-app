import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlankComponent } from './home/blank.component';

import { PrintLayoutComponent } from './PrintExample/print-layout/print-layout.component';
import { PrintFileComponent } from './PrintExample/print-file/print-file.component';
import { UDGuard } from './guards/ud.guard';
import { UGGuard } from './guards/ug.guard';
import { GRGuard } from './guards/gr.guard';
import { AdmisPagesComponent } from './admis-pages/old/admis-pages.component';
import { StdsPagesComponent } from './admis-pages/stds/stds-pages.component';
import { PolicyComponent } from './home/policy.component';
import { DocsConfirmComponent } from './home/docs-confirm.component';
import { EmpGuard } from './guards/emp.guard';
import { AppErrorComponent } from './home/error.component';
import { StdUploadPhotoListComponent } from './home/std-upload-photo-list/std-upload-photo-list.component';
import { ContactRedirectComponent } from './shared/components/contact/contactcomponent';
const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'home/:t', component: HomeComponent },
      { path: 'admis-pages/:cat', component: AdmisPagesComponent },
      { path: 'stdsnew-pages', component: StdsPagesComponent },
      { path: 'policy', component: PolicyComponent },
      { path: 'docs-confirm', component: DocsConfirmComponent },
      { path: 'exam-photo', component: StdUploadPhotoListComponent },
      // {
      //   path: 'instructions',
      //   loadChildren: './instructions/instructions.module#InstructionsModule',
      // },
      {
        path: 'written-forms',
        loadChildren: './written-forms/written-forms.module#WrittenFormsModule',
      },
      {
        path: 'academicaff',
        loadChildren: './academicaff/academicaff.module#AcademicaffModule',
        canActivate: [UGGuard]
      },
      {
        path: 'academicaff-diplome',
        loadChildren: './academicaff-diplome/academicaff-diplome.module#AcademicaffDiplomeModule',
        canActivate: [UGGuard]
      },
      {
        path: 'procedures',
        loadChildren:
          './academicprocs/academicprocs.module#AcademicprocsModule',
        canActivate: [UGGuard]
      },
      {
        path: 'statements',
        loadChildren:
          './statements/statements.module#StatementsModule',
        canActivate: [UGGuard]
      },
      {
        path: 'statements-gr',
        loadChildren:
          './statements-gr/statements_gr.module#StatementsGrModule',
        canActivate: [GRGuard]
      },
      {
        path: 'statements-diplome',
        loadChildren:
          './statements-diplime/statements-diplime.module#StatementsDiplomeModule',
        canActivate: [GRGuard]
      },
      {
        path: 'registercourses',
        loadChildren:
          './register-courses/register-courses.module#RegisterCoursesModule',
        canActivate: [UGGuard]
      },
      {
        path: 'finance',
        loadChildren:
          './finance-affair/finance-affair.module#FinanceAffairModule',
        canActivate: [UGGuard]
      },
      {
        path: 'finance-diplome',
        loadChildren:
          './finance-diplome-affair/finance-diplome-affair.module#FinanceDiplomeAffairModule',
        canActivate: [UDGuard]
      },
      {
        path: 'exams',
        loadChildren: './exams-affair/exams-affair.module#ExamsAffairModule',
        canActivate: [UGGuard]
      },
      {
        path: 'exams-diplome',
        loadChildren: './exams-diplome-affair/exams-diplome-affair.module#ExamsDiplomeAffairModule',
        canActivate: [UDGuard]
      },
      {
        path: 'other',
        loadChildren: './other-affair/other-affair.module#OtherAffairModule',
        canActivate: [UGGuard]
      },
      {
        path: 'univcard',
        loadChildren: './modules/card-module/card-module.module#CardModule',
        canActivate: [UGGuard]
      },
      {
        path: 'academic-assistant',
        loadChildren: './modules/academic-assistant-module/academic-assistant.module#AcademicAssistantModule',
        canActivate: [GRGuard, UGGuard]
      },
      // {
      //   path: 'diplome',
      //   loadChildren: './diplome/diplome.module#DiplomeModule',
      //   canActivate: [UDGuard]
      // },
      {
        path: 'procedures-diplome',
        loadChildren:
          './academicprocs-diplome/academicprocs-diplome.module#AcademicprocsDiplomeModule',
        canActivate: [UGGuard]
      },
      {
        path: 'academicrequests',
        loadChildren:
          './master-academic-requests/master-academic-requests.module#MasterAcademicRequestsModule',
        canActivate: [GRGuard]
      },
      {
        path: 'mfiniance',
        loadChildren:
          './master-finance-affair/master-finance-affair.module#MasterFinanceAffairModule',
        canActivate: [GRGuard]
      },
      {
        path: 'otherrequests',
        loadChildren:
          './master-other-requests/master-other-requests.module#MasterOtherRequestsModule',
        canActivate: [GRGuard]
      },
      {
        path: 'masterstdcertificate',
        loadChildren:
          './master-print-certificates/master-print-certificates.module#MasterPrintCertificatesModule',
        canActivate: [GRGuard]
      },
      {
        path: 'masterstddata',
        loadChildren:
          './master-student-data/master-student-data.module#MasterStudentDataModule',
        canActivate: [GRGuard]
      },
      {
        path: 'wafi',
        loadChildren: './wafi/wafi.module#WafiModule',
        canActivate: [EmpGuard]
      },
      {
        path: 'tasks',
        loadChildren: './tasks/tasks.module#TasksModule',
        canActivate: [EmpGuard]
      },
      {
        path: 'attendance',
        loadChildren: './attendance/attendance.module#AttendanceModule'
      },
      {
        path: 'std-attendance',
        loadChildren: './std-attendance/std-attendance.module#StdAttendanceModule',
        canActivate: [GRGuard, UGGuard]
      },
      // {
      //   path: 'resume',
      //   loadChildren: './resume/resume.module#ResumeModule',
      //   canActivate: [EmpGuard]
      // },
      {
        path: 'leadership',
        loadChildren: './leadership/leadership.module#LeadershipModule',
        canActivate: [EmpGuard]
      },
      {
        path: 'teaching_load',
        loadChildren: './teaching_load/teaching_load.module#Teaching_loadModule',
        canActivate: [EmpGuard]
      },
      {
        path: 'enquries',
        loadChildren: './enquries/enquries.module#EnquriesModule'
      },
      {
        path: 'emp-clean-data',
        loadChildren: './clean_data/clean_data.module#Clean_dataModule'
      },
    ]
  },
  {
    path: 'error',
    component: AppErrorComponent
  },
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [{ path: 'print-file/:paramData', component: PrintFileComponent }]
  },
  {
    path: 'contactus',
    component: ContactRedirectComponent
  },
  {
    path: 'apps',
    loadChildren: './apps/apps.module#AppsModule'
  },
  {
    path: 'public',
    loadChildren: './modules/public-module/public-module.module#PublicModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
