import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'sd_');
}

export function createSDlateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/sd_', '.json?rand=' + Math.random());
}


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createSDlateLoader),
        deps: [HttpClient],
      },
      isolate: true
    }),
  ],
  providers: [
  ],
  exports: [TranslateModule]
})
export class SDLazyTransModule {
  constructor(private locals: TranslateService) {
    locals.use('ar');
  }
}

