import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AbsenceQueryComponent } from './absence-query/absence-query.component.tns';
import { ChangeBranchComponent } from './change-branch/change-branch.component.tns';
import { ChangeCourseComponent } from './change-course/change-course.component.tns';
import { PersonalIDComponent } from './personal-id/personal-id.component.tns';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component.tns';

const routes: Routes = [
  { path: 'other', component: AbsenceQueryComponent },
{
  path: 'other',
  children: [
  { path: 'absencequery',  component: AbsenceQueryComponent },
  { path: 'changebranch',  component: ChangeBranchComponent },
  {path: 'changecourse', component: ChangeCourseComponent},
  { path: 'personalid',  component: PersonalIDComponent  },
  { path: 'graduateprofile',  component: GraduateProfileComponent }
 ]
}

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MasterOtherRequestsRoutingModule { }
