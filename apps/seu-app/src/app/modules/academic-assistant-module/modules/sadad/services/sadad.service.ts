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
export class SadadService extends SDService {

    constructor(
        http: HttpClient,
        router: Router,
        globalService: GlobalBaseService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, globalService, translate, toaster);
        this._controller = 'sadad';
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