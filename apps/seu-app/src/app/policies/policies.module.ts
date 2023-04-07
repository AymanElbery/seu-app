import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { PoliciesRoutingModule } from './policies-routing.module';
import { SecurityPolicyComponent } from './security-policy/security-policy.component';

@NgModule({
  declarations: [ 
    SecurityPolicyComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    PoliciesRoutingModule, 
    AppLazyTransModule
  ],
  providers: []
})
export class PoliciesModule { }
