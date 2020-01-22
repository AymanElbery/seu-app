import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component';
import { FormsModule } from '@angular/forms';
import { AcademicRecordComponent } from './academic-record/academic-record.component';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';

const routes: Routes = [
  { path: '', component: AcademicStatusComponent },
  {
    path: '',
    children: [
      { path: 'status', component: AcademicStatusComponent },
      { path: 'certificate', component: CertificateIDComponent },
      { path: 'record', component: AcademicRecordComponent },
      { path: 'graduationstatment', component: GraduateStateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicaffRoutingModule { }