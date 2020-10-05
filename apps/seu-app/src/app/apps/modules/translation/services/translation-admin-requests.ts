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

    addFileURL(items, field = 'FILE_PATH', field2 = 'TRANSLATION_FILE') {
        return items.map(item => {
            item['downloadURL'] = environment.baselink + environment.servicesprefix + "/rest" + "/download.php?folder=TRANSLATION_FILES&file=" + item[field];
            item['downloadTransURL'] = environment.baselink + environment.servicesprefix + "/rest" + "/download.php?folder=TRANSLATION_FILES&file=" + item[field2];
            return item;
        });
    }
    getAllRequests() {
        return this.get("admin/request/get_all_requests") ;
    }
    getMyRequests(){
        return this.get("admin/request/myrequests") ;
    }
    getCompletedRequests(){
        return this.get("admin/request/get_completed_requests") ;
    }
    completeRequest(data){
        return this.post("admin/request/complete",data);
    }
    changeStatus(data) {
        return this.post("admin/request/change_status" , data) ;
    }
}

