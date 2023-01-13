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
        return this._lookups['categories'].map(rec => {
            let item = {};
            item['text'] = rec;
            item['value'] = rec;
            return item;
        });
    }
    courses() {
        return this._lookups['courses'].map(rec => {
            let item = {};
            item['text'] = rec['SUBJ_CODE'] + rec['CRSE_NUMB'] + ' | ' + rec['CRSE_TITLE'];
            item['value'] = rec['SUBJ_CODE'] + rec['CRSE_NUMB'] + ' | ' + rec['CRSE_TITLE'];
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
    description(_code) {
        if (this._lookups) {
            return of(this.get_suggest(_code));
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.get_suggest(_code);
            }));
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

    courses_list() {
        if (this._lookups) {
            return of(this.courses());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.courses();
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

    get_suggest(_code){
        return this._lookups['items'].filter(item => {
            return item['ID'] == _code;
        }).map(rec => {
            return rec['SUGGEST'] == '0' ? false : rec['SUGGEST'];
        });
    }

    extra_fields(_code){
        return this._lookups['items'].filter(item => {
            return item['ID'] == _code;
        }).map(rec => {
            return {
                'course_a' : rec['COURSE_A'] == 0 ? false : rec['COURSE_A'],
                'course_b' : rec['COURSE_B'] == 0 ? false : rec['COURSE_B'],
            };
        });
    }

    suggest_list(item) {
        if (this._lookups) {
            return of(this.get_suggest(item));
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.get_suggest(item);
            }));
    }

}