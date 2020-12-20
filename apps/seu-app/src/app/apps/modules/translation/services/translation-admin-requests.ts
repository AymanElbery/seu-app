import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { TranslationRootService } from './translation-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { TranslationServicesModule } from './translation-service.module';
import { environment } from '../../../../../environments/environment';
@Injectable({
    providedIn: TranslationServicesModule
})
export class ClientAdminRequestsService extends TranslationRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    addFileURL(items) {
        return items.map(item => {
            return this.adURLs(item);;
        });
    }

    adURLs(item, field = 'FILE_PATH', field2 = 'TRANSLATION_FILE') {
        if (item[field])
            item['downloadURL'] = environment.baselink + environment.servicesprefix + "/rest" + "/download.php?folder=TRANSLATION_FILES&file=" + item[field];

        if (item[field2])
            item['downloadTransURL'] = environment.baselink + environment.servicesprefix + "/rest" + "/download.php?folder=TRANSLATION_FILES&file=" + item[field2];

        return item;
    }
    getPenddingRequests(print = 0) {
        return this.get("admin/request/get_pendding_requests/" + print);
    }
    getProcessiongRequests(print = 0) {
        return this.get("admin/request/get_processing_requests/" + print);
    }
    getReviewingRequests(print = 0) {
        return this.get("admin/request/get_reviewing_requests/" + print);
    }
    getReviewingEmpRequests(user_id, print = 0) {
        return this.get("admin/request/get_reviewing_emp_requests/" + user_id + "/" + print);
    }
    getMyRequests() {
        return this.get("admin/request/myrequests");
    }
    getCompletedRequests(print = 0) {
        return this.get("admin/request/get_completed_requests/" + print);
    }
    reviewRequest(data) {
        return this.post("admin/request/review", data);
    }
    addReview(data) {
        return this.post("admin/request/add_review", data);
    }
    changeStatus(data) {
        return this.post("admin/request/change_status", data);
    }
    assignReview(data) {
        return this.post("admin/request/assign_review", data);
    }
    addTranslatedFile(data) {
        return this.post("admin/request/add_translated_file", data);
    }
}

