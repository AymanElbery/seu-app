import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { SalariesComponent } from './salaries/salaries.component';
import {SalarydetailComponent} from './salarydetail/salarydetail.component';
import {VacationsComponent} from './vacations/vacations.component';
import {PrintReportComponent} from './print-report/print-report.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { AppLazyTransModule } from 'src/app/app.lazytrans.module';
import{SeucommonModule} from '../../seucommon/seucommon.module';
import { ManagerialDutiesComponent } from './managerial-duties/managerial-duties.component';
import { UpdateinfoComponent } from './personalinfo/updateinfo/updateinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [PersonalinfoComponent,SalariesComponent,SalarydetailComponent,VacationsComponent,
    PrintReportComponent,ManagerialDutiesComponent,UpdateinfoComponent],
  entryComponents: [SalarydetailComponent,UpdateinfoComponent],
  imports: [
    CommonModule,    
    PersonalRoutingModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    AppLazyTransModule,
    SeucommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  
  ]
})
export class PersonalModule { }
