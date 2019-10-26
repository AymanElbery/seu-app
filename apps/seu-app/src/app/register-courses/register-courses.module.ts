import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCoursesRoutingModule } from './register-courses-routing.module';
import {RegisterWishesService} from './services/register-wishes.service';
import {RegistrationHelperService} from './services/registration-helper.service';
import {RegisterWishesComponent} from './register-wishes/register-wishes.component';
import {RegisterationHelperComponent} from './registeration-helper/registeration-helper.component';
import { from } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterWishesComponent,RegisterationHelperComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegisterCoursesRoutingModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers:[RegisterWishesService,RegistrationHelperService]
})
export class RegisterCoursesModule { }
