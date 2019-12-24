import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CertificateIDComponent } from './certificate-id/certificate-id.component.tns';

const routes: Routes = [ 
{
  path: '',
  children: [
    { path: 'certificate', component: CertificateIDComponent }
   
  ]
}

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AcademicaffRoutingModule { }
