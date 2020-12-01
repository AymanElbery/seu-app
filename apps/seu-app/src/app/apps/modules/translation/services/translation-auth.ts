import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { TranslationRootService } from './translation-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { User } from '../models/user';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslationServicesModule } from './translation-service.module';

@Injectable({
    providedIn: TranslationServicesModule
})
export class TranslationAuthService extends TranslationRootService {



    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    register(post) {
        return this.post('/auth/register', post);
    }
    login(post) {
        return this.post('/auth/login', post);
    }
    reset(post) {
        return this.post('/auth/reset', post);
    }
    activate(post) {
        return this.post('/auth/reset', post);
    }
}

