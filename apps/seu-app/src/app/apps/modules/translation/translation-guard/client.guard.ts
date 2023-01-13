import { Injectable } from '@angular/core';
import {  Router } from '@angular/router'; import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslationUserService } from '../services/translation-user'
import { TranslationUSERGuard } from './user.guard';
import { TranslationModule } from '../translation.module';
import { TranslationServicesModule } from '../services/translation-service.module';
@Injectable({
  providedIn: TranslationServicesModule
})
export class TranslationCLIENTGuard extends TranslationUSERGuard {
  constructor(
    router: Router, 
    user: TranslationUserService, 
    translate: TranslateService
  ) {
    super(router, user, translate);
  }

  hasTheRole() {
    return this.user.is_client();
  }

}