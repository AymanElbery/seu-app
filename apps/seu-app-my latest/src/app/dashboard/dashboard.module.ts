import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  declarations: [SpinnerComponent, HomeComponent, PostsComponent, NewsComponent, NewsDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ] ,

  providers :[
   PostsService

  ]
  
})
export class DashboardModule { }
