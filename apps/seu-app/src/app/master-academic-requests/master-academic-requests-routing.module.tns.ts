import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CancelCourseComponent } from './cancel-course/cancel-course.component.tns';
import { AddCancelCourseRequestComponent } from './cancel-course/diag/add-cancel-course-request/add-cancel-course-request.component.tns';

const routes: Routes = [

  {
    path: 'academicrequests',
    children: [
      { path: 'cancelcourse', component: CancelCourseComponent },
      { path: 'addcancelcourse', component: AddCancelCourseRequestComponent }

    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MasterAcademicRequestsRoutingModule { }
