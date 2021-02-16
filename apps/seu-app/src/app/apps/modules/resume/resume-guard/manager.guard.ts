import { Injectable } from '@angular/core';
import {  Router } from '@angular/router'; import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ResumeUserService } from '../services/resume-user'
import { ResumeUSERGuard } from './user.guard';
import { ResumeServicesModule } from '../services/resume-service.module';
@Injectable({
  providedIn: ResumeServicesModule
})
export class ResumeManagerGuard extends ResumeUSERGuard {
  constructor(
    router: Router, 
    user: ResumeUserService, 
    translate: TranslateService
  ) {
    super(router, user, translate);
  }

  hasTheRole() {
    return this.user.is_manager();
  }

}