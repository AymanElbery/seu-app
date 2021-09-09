import { NgModule } from '@angular/core';
import { DiplomeCommonModule } from './modules/diplome-common/diplome-common.module';
import { SeucommonModule } from 'src/app/seucommon/seucommon.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SeucommonModule,
    DiplomeCommonModule,
  ],
  exports: [
    SeucommonModule,
    DiplomeCommonModule
  ]
})
export class DiplomeSharedModule {

}