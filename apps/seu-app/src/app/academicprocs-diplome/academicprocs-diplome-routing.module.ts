import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostponeCoronaRequestComponent } from './postpone-request-corona/postpone-request-corona.component';
import { ExecuseRequestCoronaComponent } from './execuse-request-corona/execuse-request-corona.component';
import { WithdrawFromUnivComponent } from './withdraw-from-univ/withdraw-from-univ.component';
import { LecturesExecusesComponent } from './lectures-execuses/lectures-execuses.component';

const routes: Routes = [{ path: '', component: PostponeCoronaRequestComponent },
{
  path: '',
  children: [
    { path: 'lecexecuse', component:  LecturesExecusesComponent},
    { path: 'withdrawuniv', component: WithdrawFromUnivComponent },
    { path: 'postpone-corona', component: PostponeCoronaRequestComponent },
    { path: 'execuse-corona', component: ExecuseRequestCoronaComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicprocsDiplomeRoutingModule { }
