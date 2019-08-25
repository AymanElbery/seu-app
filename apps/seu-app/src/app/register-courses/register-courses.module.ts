import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCoursesRoutingModule } from './register-courses-routing.module';
import { FreshmenWishesComponent } from './freshmen-wishes/freshmen-wishes.component';
import { RegisterHelpComponent } from './register-help/register-help.component';

@NgModule({
  declarations: [FreshmenWishesComponent, RegisterHelpComponent],
  imports: [
    CommonModule,
    RegisterCoursesRoutingModule
  ]
})
export class RegisterCoursesModule { }
