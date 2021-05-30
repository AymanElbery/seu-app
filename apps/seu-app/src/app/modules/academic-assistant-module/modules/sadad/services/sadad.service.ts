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

    items() {
        return this._lookups['items'].map(rec => {
            let item = {};
            item['text'] = rec['NAME'];
            item['value'] = rec['ITEMID'];
            return item;
        });
    }

    items_list() {
        if (this._lookups) {
            return of(this.items());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.items();
            }));
    }

}