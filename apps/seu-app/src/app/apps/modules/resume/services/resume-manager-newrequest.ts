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
export class ManagerNewrequestsService extends ResumeRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    saveNewRequest(data) {
        return this.post("manager/request/save_new_request" , data) ;
    }

    getIfExist(user_id, lang) {
        return this.get("manager/request/get_if_exist_request/"+user_id+"/"+lang) ;
    }
}

