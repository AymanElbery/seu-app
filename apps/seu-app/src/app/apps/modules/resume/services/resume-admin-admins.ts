import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ResumeRootService } from './resume-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { ResumeServicesModule } from './resume-service.module';
@Injectable({
    providedIn: ResumeServicesModule
})
export class AdminAdminsService extends ResumeRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getAdmins() {
        return this.get("admin/users/get_active_admins") ;
    }

    inActivate(data) {
        return this.post("admin/users/in_activate", data) ;
    }

    activate(data) {
        return this.post("admin/users/activate", data) ;
    }

    addAdmin(data) {
        return this.post("admin/users/add_user", data) ;
    }
}

