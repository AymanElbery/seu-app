import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeComponent } from '../home/home.component.tns';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'academicaff',
    children: [

      { path: 'graduationstatment', component: GraduateStateComponent }
    ]
  }
];
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AcademicaffRoutingModule { }
