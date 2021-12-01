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
export class CommitteService extends SDService {

    constructor(
        http: HttpClient,
        router: Router,
        globalService: GlobalBaseService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, globalService, translate, toaster);
        this._controller = 'committe';
    }

    crses() {
        return this._lookups['crses'].map(rec => {
            let item = {};
            item['text'] = rec['CRN'] + ' | ' + rec['SUBJ_CODE'] + rec['CRSE_NUMB'] + ' | ' + rec['CRSE_TITLE'];
            item['value'] = rec['CRN'] + ' | ' + rec['SUBJ_CODE'] + rec['CRSE_NUMB'] + ' | ' + rec['CRSE_TITLE'];
            return item;
        });
    }

    crses_list() {
        if (this._lookups) {
            return of(this.crses());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.crses();
            }));
    }

    punishments() {
        return this._lookups['punishments'].map(rec => {
            let item = {};
            item['text'] = rec['NAME_AR'];
            item['value'] = rec['NAME_AR'];
            return item;
        });
    }

    punishments_list() {
        if (this._lookups) {
            return of(this.punishments());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.punishments();
            }));
    }
}