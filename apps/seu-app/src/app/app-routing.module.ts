import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlankComponent } from './home/blank.component';

import { PrintLayoutComponent } from './PrintExample/print-layout/print-layout.component';
import { PrintFileComponent } from './PrintExample/print-file/print-file.component';
import { AuthGuard } from './guards/auth.guard';
import { UGGuard } from './guards/ug.guard';
import { GRGuard } from './guards/gr.guard';
import { AdmisPagesComponent } from './admis-pages/old/admis-pages.component';
import { StdsPagesComponent } from './admis-pages/stds/stds-pages.component';
import { PolicyComponent } from './home/policy.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'homebsc', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'homemsc', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'home/:t', component: HomeComponent },
      { path: 'admis-pages/:cat', component: AdmisPagesComponent },
      { path: 'stdsnew-pages', component: StdsPagesComponent },
      { path: 'policy', component: PolicyComponent },

      {
        path: 'academicaff',
        loadChildren: './academicaff/academicaff.module#AcademicaffModule',
        canActivate: [UGGuard]
      },
      {
        path: 'procedures',
        loadChildren:
          './academicprocs/academicprocs.module#AcademicprocsModule',
        canActivate: [UGGuard]
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
        path: 'exams',
        loadChildren: './exams-affair/exams-affair.module#ExamsAffairModule',
        canActivate: [UGGuard]
      },
      {
        path: 'other',
        loadChildren: './other-affair/other-affair.module#OtherAffairModule',
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
      }
    ]
  },
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [{ path: 'print-file/:paramData', component: PrintFileComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
