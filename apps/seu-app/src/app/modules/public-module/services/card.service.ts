import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../environments/environment';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { PublicBaseService } from './base';


@Injectable({
    providedIn: "root"
})
export class PublicCardService extends PublicBaseService {
    constructor(http: HttpClient, router: Router, globalService: GlobalBaseService, translate: TranslateService, toaster: AppToasterService) {
        super(http, router, globalService, translate, toaster);
    }

    getStdData(id) {
        return this.get(environment.common + "/stds/info/card/" + id);
    }
}
