import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppServices } from 'src/app/seucommon/app-services';
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'apps_');
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/translate_', '.json?rand=' + Math.random());
}


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      isolate: true
    }),
  ],
  providers: [
  ],
  exports: [TranslateModule]
})
export class TranslationLazyTransModule {
  constructor(private trans: TranslateService,private app:AppServices) {
    let lang = localStorage.getItem("seu-lang");
    if (!lang) {
      lang = 'ar';
    }
    trans.use(lang);

    app.translate.subscribe(data=>{
      app.updateStayle(data['lang']);
      trans.use(data['lang']);
    })
    
  }
}
