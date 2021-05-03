import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SDService } from '../../../sd.service';
import { of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class AcademicRequestsService extends SDService {

    constructor(
        http: HttpClient,
        router: Router,
        globalService: GlobalBaseService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, globalService, translate, toaster);
        this._controller = 'academic_requests';
    }

    categories() {
        return this._lookups['subcategories'].map(rec => {
            let item = {};
            item['text'] = rec['NAME'];
            item['value'] = rec['SUBCATEGORYID'];
            return item;
        });
    }
    items(_code) {
        return this._lookups['items'].filter(item => {
            return item['SUBCATEGORYID'] == _code;
        }).map(rec => {
            let item = {};
            item['text'] = rec['NAME'];
            item['value'] = rec['ITEMID'];
            return item;
        });
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