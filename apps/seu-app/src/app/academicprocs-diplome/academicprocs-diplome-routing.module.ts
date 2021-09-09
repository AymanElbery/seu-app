import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostponeCoronaRequestComponent } from './postpone-request-corona/postpone-request-corona.component';
import { ExecuseRequestCoronaComponent } from './execuse-request-corona/execuse-request-corona.component';

const routes: Routes = [{ path: '', component: PostponeCoronaRequestComponent },
{
  path: '',
  children: [
    { path: 'postpone-corona', component: PostponeCoronaRequestComponent },
    { path: 'execuse-corona', component: ExecuseRequestCoronaComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicprocsDiplomeRoutingModule { }
