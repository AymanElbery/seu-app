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
export class InstructorMyrequestsService extends ResumeRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getMyRequests(userId) {
        return this.get("instructor/request/get_my_requests/" + userId) ;
    }

    cancel(id){
        return this.get("instructor/request/cancel/" + id);
    }
}

