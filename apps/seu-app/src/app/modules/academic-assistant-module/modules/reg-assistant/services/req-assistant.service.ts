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

    _usedCourses = [];
    _lookups: any;
    _lookups_observ = new Subject<any>();


    _settings;
    currentApp;
    currentAddApps;
    currentAdd;
    instructor;
    URL = environment.baselink + environment.servicesprefix + "/rest/sd/std/";
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.auth
    });

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

    loadlookups() {
        if (this._lookups) {
            return;
        }
        this.getLockups().subscribe(response => {
            this._lookups = response['data'];
            this._lookups_observ.next();

        });
    }


    colleges() {
        return this._lookups['colleges'].map(rec => {
            let item = {};
            item['text'] = rec['COLL_NAME'];
            item['value'] = rec['COLL_PK'] + ' - ' + rec['COLL_NAME'];
            return item;
        });
    }
    // courses(coll_code) {
    //     return this._lookups['courses'][coll_code].filter(item => {
    //         return !this._usedCourses.includes(item['SUBJ_CODE'] + item['CRSE_NUMB']);
    //     }).map(rec => {
    //         let item = {};
    //         item['text'] = rec['CRSE_CODE'] + ' | ' + rec['CRSE_TITLE'];
    //         item['value'] = rec['CRSE_CODE'] + ' | ' + rec['CRSE_TITLE'];
    //         return item;
    //     });
    // }
    courses() {
        return this._lookups['courses'].map(rec => {
            let item = {};
            item['text'] = rec['COURSE_CODE'] + ' | ' + rec['COURSE_TITLE'];
            item['value'] = rec['COURSE_CODE']  + ' | ' + rec['COURSE_TITLE'];
            return item;
        });
    }
    messages() {
        return this._lookups['messages'].map(rec => {
            let item = {};
            item['text'] = rec['MESSAGE'];
            item['value'] = rec['MESSAGE'];
            return item;
        });
    }
    days() {
        return this._lookups['days'].map(rec => {
            let item = {};
            item['text'] = rec['NAME_AR'];
            item['value'] = rec['ID'];
            return item;
        });
    }
    times() {
        return this._lookups['times'].map(rec => {
            let item = {};
            item['text'] = rec['NAME_AR'];
            item['value'] = rec['CODE'];
            return item;
        });
    }
    lectures() {
        return this._lookups['lectures'];
    }

    colleges_list() {
        if (this._lookups) {
            return of(this.colleges());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.colleges();
            }));
    }

    // courses_list(coll_code) {
    //     if (this._lookups) {
    //         return of(this.courses(coll_code));
    //     }
    //     return this._lookups_observ.pipe(
    //         map(() => {
    //             return this.courses(coll_code);
    //         }));
    // }
    courses_list() {
        if (this._lookups) {
            return of(this.courses());
        }
        return this._lookups_observ.pipe(
            map(() => {
            return this.courses();
        }));
    }
    lectures_list() {
        if (this._lookups) {
            return of(this.lectures());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.lectures();
            }));
    }
    messages_list() {
        if (this._lookups) {
            return of(this.messages());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.messages();
            }));
    }
    days_list() {
        if (this._lookups) {
            return of(this.days());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.days();
            }));
    }
    times_list() {
        if (this._lookups) {
            return of(this.times());
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.times();
            }));
    }
    crns_list(crse) {
        return this.post("registration_assistant/crns", { 'crse': crse }).pipe(
            map((response) => {
                return response['data']['crns'].map(rec => {
                    let item = {};
                    item['text'] = rec['CRN'] + ' ' + rec['BLDG_DESC'];
                    item['value'] = rec['CRN'] + ' ' + rec['BLDG_DESC'];
                    return item;
                });
            })
        );
    }

    checkCourses(tickets) {
        let usedCourses = [];
        tickets.forEach(element => {
            if (element['status'] == 'Open') {
                let crsecode = element['crse'].split(" ");
                usedCourses.push(crsecode[0] + crsecode[1]);
            }
        });
        this._usedCourses = usedCourses;
    }
}