import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component.tns';
import { PostsService } from './services/posts.service';
import { DashboardRoutingModule } from './dashboard-routing.module.tns';


@NgModule({
  declarations: [SpinnerComponent, HomeComponent, PostsComponent],
  imports: [
    NativeScriptCommonModule,DashboardRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [PostsService]
})
export class DashboardModule { }
