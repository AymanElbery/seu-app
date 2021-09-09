import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../../environments/environment';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { DiplomeService } from "../../../diplome.service";

@Injectable({
    providedIn: "root"
})
export class AcademicAffairsService extends DiplomeService {
    constructor(
        http: HttpClient,
        router: Router,
        globalService: GlobalBaseService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, globalService, translate, toaster);
    }
    
}