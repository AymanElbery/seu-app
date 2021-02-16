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
export class AdminNewRequestsService extends ResumeRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getNewRequests() {
        return this.get("admin/request/get_new_requests") ;
    }

    getRequest(id) {
        return this.get("admin/request/get_request/"+ id) ;
    }

    changeStatus(data) {
        return this.post("admin/request/change_status", data) ;
    }
}

