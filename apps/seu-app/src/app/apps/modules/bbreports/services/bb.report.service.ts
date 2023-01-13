import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { BBRootService } from './bb-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from '../../../../shared/services/app-toaster';
import { Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BBServicesModule } from '../bb-services.module';
@Injectable({
    providedIn: BBServicesModule
})
export class BBReportService extends BBRootService {

    user: any;

    userLoaded: boolean = false;
    userHasLoaded = new Subject();
    _lookups;
    _lookups_observ = new Subject<any>();

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    collges() {
        return this._lookups['colleges'].map((item) => {
            return {
                code: item['COLL_CODE'],
                name: item['NAME_AR']
            }
        });
    }
    depts() {
        return this._lookups['depts'].map((item) => {
            return {
                code: item['DEPT_CODE'],
                name: item['DEPT_DESC_AR'],
                coll: item['COLL_CODE'],
            }
        });
    }

    reports() {
        return this._lookups['reports'].map((item) => {
            return {
                code: item['CODE'],
                name: item['NAME_AR'],
                path: item['R_PATH']
            }
        });
    }
    get_report_by_code(code) {
        const report = this._lookups['reports'].find(item => item['CODE'] == code);
        if (!report) {
            return false;
        }
        return {
            code: report['CODE'],
            filter_date: (report['FILTER_DATE'] == 1 ? true : false),
            name: report['NAME' + this.langPrefix],
            path: report['R_PATH']
        };
    }
    collges_list() {
        if (this._lookups) {
            return of(this.collges());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.collges();
            }));
    }

    getUser() {
        this.get("bb/user").subscribe(res => {
            if (res['status']) {
                this.user = res['data']['user'];

                this._lookups = res['data']['lookups'];
                this._lookups_observ.next();
                this.userLoaded = true;
                this.userHasLoaded.next();

            } else {
                this.config.relogin();
            }
        });
    }

    report(post) {
        return this.post("report/fetch", post);
    }

}

