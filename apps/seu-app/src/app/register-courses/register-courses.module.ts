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
import { AddRegisterationHelperComponent } from './registeration-helper/diag/add-registeration-helper/add-registeration-helper.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [RegisterWishesComponent,RegisterationHelperComponent,AddRegisterationHelperComponent],
  entryComponents:[AddRegisterationHelperComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegisterCoursesRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
     MatNativeDateModule,
    ToastrModule.forRoot()
  ],
  providers:[RegisterWishesService,RegistrationHelperService]
})
export class RegisterCoursesModule { }
