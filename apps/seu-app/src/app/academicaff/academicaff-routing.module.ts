import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component';
import { FormsModule } from '@angular/forms';
import { AcademicRecordComponent } from './academic-record/academic-record.component';

const routes: Routes = [
  { path: 'academicaff', component: AcademicStatusComponent },
  {
    path: 'academicaff',
    children: [
    { path: 'status',  component: AcademicStatusComponent },
    { path: 'certificate',  component: CertificateIDComponent },
    { path: 'record',  component: AcademicRecordComponent},


   ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicaffRoutingModule { }
