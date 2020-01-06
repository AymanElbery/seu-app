import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from '../guards/auth.guard';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
{
  path: 'dashboard',
  children: [
  { path: 'home',  component: HomeComponent },
  { path: 'news',  component: NewsComponent },
  { path: 'newsdetail/:id',  component: NewsDetailsComponent },


  { path: 'posts',  component: PostsComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent }


 ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
