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
export class ClientMyrequestsService extends TranslationRootService {

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
        return this.get("client/request/get_my_requests/" + userId);
    }
    cancel(id) {
        return this.get("client/request/cancel/" + id);
    }
    checkout(req_id) {
        return this.get('/client/request/checkout/' + req_id);
    }

    payment_status(tid) {
        return this.get('/client/request/payment_status/' + tid);
    }

    add_reject_pay_reason(data) {
        return this.post("client/request/add_reject_pay_reason" , data) ;
    }
}

