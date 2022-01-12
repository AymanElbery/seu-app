import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../../../environments/environment';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { SDService } from "../../../sd.service";

@Injectable({
    providedIn: "root"
})
export class ReqAssistantService extends SDService {
    
    constructor(
        http: HttpClient,
        router: Router,
        globalService: GlobalBaseService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, globalService, translate, toaster);
        this._controller = 'registration_assistant';
    }

    categories_list() {
        if (this._lookups) {
            return of(this.categories());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.categories();
            }));
    }

    categories() {
        return this._lookups['categories'].map(rec => {
            let item = {};
            item['text'] = rec;
            item['value'] = rec;
            return item;
        });
    }

    courses_list() {
        if (this._lookups) {
            return of(this.courses());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.courses();
            }));
    }

    courses() {
        return this._lookups['courses'].map(rec => {
            let item = {};
            item['text'] = rec['COURSE_TITLE'] + " | " + rec['COURSE_CODE'];
            item['value'] = rec['COURSE_CODE'];
            return item;
        });
    }

    items(category) {
        return this._lookups['items'].filter(item => {
            return item['CATEGORY'] == category;
        }).map(rec => {
            let item = {};
            item['text'] = rec['ITEM'];
            item['value'] = rec['ID'];
            return item;
        });
    }

    items_list(coll_code) {
        if (this._lookups) {
            return of(this.items(coll_code));
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.items(coll_code);
            }));
    }
}