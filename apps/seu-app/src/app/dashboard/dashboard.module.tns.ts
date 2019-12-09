import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component.tns';
import { PostsService } from './services/posts.service';
import { DashboardRoutingModule } from './dashboard-routing.module.tns';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';


@NgModule({
  declarations: [SpinnerComponent, HomeComponent, PostsComponent, NewsComponent, NewsDetailsComponent],
  imports: [
    NativeScriptCommonModule, DashboardRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [PostsService]
})
export class DashboardModule { }
