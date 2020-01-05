import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component.tns';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';



export const routes: Routes = [
 
  {
    path: 'dashboard', 
    children: [      
    { path: 'home',  component: HomeComponent },
    { path: 'posts',  component: PostsComponent, canActivate:[AuthGuard] },
    { path: '', component: HomeComponent }
  
  
   ]      
  }

];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class DashboardRoutingModule { }
