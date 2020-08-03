import { Injectable } from '@angular/core';
import {  Router } from '@angular/router'; import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SkillsUserService } from '../services/skill-user'
import { SkillsUSERGuard } from './user.guard';
@Injectable()
export class SkillsSTDGuard extends SkillsUSERGuard {
  constructor(router: Router, user: SkillsUserService, translate: TranslateService) {
    super(router, user, translate);
  }

  hasTheRole() {
    return this.user.is_std();
  }

}