import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrintLayoutComponent } from './PrintExample/print-layout/print-layout.component';
import { PrintFileComponent } from './PrintExample/print-file/print-file.component';

const routes: Routes = [

  { path: 'print',
  outlet: 'print',
  component: PrintLayoutComponent,
  children: [
    { path: 'print-file/:paramData', component: PrintFileComponent },
  ]
}
, { path: '', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
