import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicStatusComponent } from './academic-status/academic-status.component';
import { AcademicRecordComponent } from './academic-record/academic-record.component';

const routes: Routes = [{ path: '', component: AcademicStatusComponent },
{
  path: '',
  children: [
  { path: 'academicstatus',  component: AcademicStatusComponent },
  { path: 'academicrecord',  component: AcademicRecordComponent }

 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterStudentDataRoutingModule { }
