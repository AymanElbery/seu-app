import { NgModule } from '@angular/core';
import { AcademicAffairsRoutingModule } from './academic-affairs-routing.module';
import { DiplomeCommonModule } from '../diplome-common/diplome-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SeucommonModule,
    DiplomeCommonModule,
    AcademicAffairsRoutingModule,
  ],
  entryComponents: [
  ]
})
export class AcademicAffairsModule {

}
