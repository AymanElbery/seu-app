import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { StatementsRootService } from './statements-root.service';
import { ConfigService } from '../../shared/services/config.service';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { StatementsServicesModule } from './statements-service.module';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
    providedIn: StatementsServicesModule
})
export class StatementsService extends StatementsRootService {


    userLoaded: boolean = false;
    userHasLoaded = new Subject();

    constructor(
        public http: HttpClient,
        public router: Router,
        configService: ConfigService,
        translate: TranslateService,
        toaster: AppToasterService,
        private httRequest: HttpRequestService
    ) {
        super(http, router, configService, translate,toaster);
    }

    getStatements(){
        return this.httRequest.GetRequest('statements').toPromise();
    }

    download(url){
        return this.URL + url;
    }
}

