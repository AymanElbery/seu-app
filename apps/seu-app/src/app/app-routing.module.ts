import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrintLayoutComponent } from './PrintExample/print-layout/print-layout.component';
import { PrintFileComponent } from './PrintExample/print-file/print-file.component';
import { AuthGuard } from './guards/auth.guard';
import { UGGuard } from './guards/ug.guard';
import { GRGuard } from './guards/gr.guard';

const routes: Routes = [

  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'print-file/:paramData', component: PrintFileComponent },
    ]
  },
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'home/:t', component: HomeComponent },

      { path: 'academicaff', loadChildren: './academicaff/academicaff.module#AcademicaffModule', canLoad: [UGGuard] },
      { path: 'procedures', loadChildren: './academicprocs/academicprocs.module#AcademicprocsModule', canLoad: [UGGuard] },
      { path: 'registercourses', loadChildren: './register-courses/register-courses.module#RegisterCoursesModule', canLoad: [UGGuard] },
      { path: 'finance', loadChildren: './finance-affair/finance-affair.module#FinanceAffairModule', canLoad: [UGGuard] },
      { path: 'exams', loadChildren: './exams-affair/exams-affair.module#ExamsAffairModule', canLoad: [UGGuard] },
      { path: 'other', loadChildren: './other-affair/other-affair.module#OtherAffairModule', canLoad: [UGGuard] },
      { path: 'academicrequests', loadChildren: './master-academic-requests/master-academic-requests.module#MasterAcademicRequestsModule', canLoad: [GRGuard] },
      { path: 'mfiniance', loadChildren: './master-finance-affair/master-finance-affair.module#MasterFinanceAffairModule', canLoad: [GRGuard] },
      { path: 'otherrequests', loadChildren: './master-other-requests/master-other-requests.module#MasterOtherRequestsModule', canLoad: [GRGuard] },
      { path: 'masterstdcertificate', loadChildren: './master-print-certificates/master-print-certificates.module#MasterPrintCertificatesModule', canLoad: [GRGuard] },
      { path: 'masterstddata', loadChildren: './master-student-data/master-student-data.module#MasterStudentDataModule', canLoad: [GRGuard] },
    ]
  },
  { path: 'homebsc', component: HomeComponent },
  { path: 'homemsc', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
