import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { TranslationRootService } from './translation-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { TranslationServicesModule } from './translation-service.module';
@Injectable({
    providedIn: TranslationServicesModule
})
export class AdminUsersService extends TranslationRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getUsers() {
        return this.get("admin/users/get_all_users") ;
    }

    inActivate(data) {
        return this.post("admin/users/in_activate", data) ;
    }

    activate(data) {
        return this.post("admin/users/activate", data) ;
    }

    addUser(data) {
        return this.post("admin/users/add_user", data) ;
    }
}

