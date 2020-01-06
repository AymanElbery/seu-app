import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { PostsService } from './services/posts.service';
import { DashboardRoutingModule } from './dashboard-routing.module.tns';


@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule, DashboardRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [PostsService]
})
export class DashboardModule { }
