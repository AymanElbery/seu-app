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
    getPenddingRequests(print = 0) {
        return this.get("admin/request/get_pendding_requests/" + print) ;
    }
    getProcessiongRequests(print = 0) {
        return this.get("admin/request/get_processing_requests/" + print) ;
    }
    getMyRequests(){
        return this.get("admin/request/myrequests") ;
    }
    getCompletedRequests(print = 0){
        return this.get("admin/request/get_completed_requests/" + print) ;
    }
    completeRequest(data){
        return this.post("admin/request/complete",data);
    }
    changeStatus(data) {
        return this.post("admin/request/change_status" , data) ;
    }
    addTranslatedFile(data) {
        return this.post("admin/request/add_translated_file" , data) ;
    }
}

