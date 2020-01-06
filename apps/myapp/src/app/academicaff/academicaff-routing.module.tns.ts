import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeComponent } from '../home/home.component.tns';
import { GraduateStateComponent } from './graduate-state/graduate-state.component';
import { CertificateIDComponent } from './certificate-id/certificate-id.component.tns';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'academicaff',
    children: [

      { path: 'graduationstatment', component: GraduateStateComponent },
      { path: 'certificate', component: CertificateIDComponent }
    ]
  }
];
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AcademicaffRoutingModule { }
