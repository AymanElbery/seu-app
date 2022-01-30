import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLazyTransModule } from '../app.lazytrans.module';
import { ProcedureGuideRoutingModule } from './procedure-guide-routing.module';
import { UniversityComponent } from './university/university.component';
import { UniversityAgencyComponent } from './university-agency/university-agency.component';
import { UniversityAgencyGrComponent } from './university-agency-gr/university-agency-gr.component';
import { UniversityAgencyAllComponent } from './university-agency-all/university-agency-all.component';
import { UniversityAgencyCampComponent } from './university-agency-camp/university-agency-camp.component';
import { UniversityAgencyFemaleComponent } from './university-agency-female/university-agency-female.component';
import { UniversityEducationalAffairsComponent } from './university-educational-affairs/university-educational-affairs.component';

@NgModule({
  declarations: [ 
    UniversityComponent,
    UniversityAgencyComponent,
    UniversityAgencyGrComponent,
    UniversityEducationalAffairsComponent,
    UniversityAgencyAllComponent,
    UniversityAgencyCampComponent,
    UniversityAgencyFemaleComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    ProcedureGuideRoutingModule,
    AppLazyTransModule
  ],
  providers: []
})
export class ProcedureGuideModule { }
