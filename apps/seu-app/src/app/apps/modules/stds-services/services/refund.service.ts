import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUserRootService } from '../../../services/app-user-root.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { StudentServicesModule } from './student-services.module';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { StudentService } from './student.service'

@Injectable({
    providedIn: StudentServicesModule
})
export class RefundService extends StudentService {

    constructor(
        router: Router, 
        globalService: GlobalBaseService, 
        http: HttpClient, 
        translate: TranslateService, 
        toaster: AppToasterService
    ) {
        super(router, globalService, http, translate, toaster)
    }
    
    get_fee_refund_cases(){
        return this.get('/stds/refund/get_fee_refund_cases');
    }

    getRequests(){
        return this.get('/stds/refund/requests');
    }

    deleteReq(req_pk){
        return this.get('/stds/refund/remove/' + req_pk);
    }  

    AddRequest(data){
        return this.post('/stds/refund/add', data);
    }    

    ///

    get_banks_data(){
        return this.get('/stds/refund_continous/get_banks_data');
    }

    AddCountinousRequest(data){
        return this.post('/stds/refund_continous/add', data);
    }  
}


