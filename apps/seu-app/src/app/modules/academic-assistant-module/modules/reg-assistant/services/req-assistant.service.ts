import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../../../environments/environment';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { of, Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ReqAssistantService {

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
        private http: HttpClient,
        private router: Router,
        private globalService: GlobalBaseService,
        private translate: TranslateService,
        private toaster: AppToasterService
    ) {

    }

    notifyError(code) {
        this.toaster.push([{ type: "error", 'body': this.translate.instant("card.messages." + code) }]);
    }

    notifySucc(code) {
        this.toaster.push([{ type: "success", 'body': this.translate.instant("card.messages." + code) }]);
    }

    getHeader() {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.auth
        });
        if (this.globalService.getSID()) {
            headers = headers.append("sessionid", this.globalService.getSID());
        }
        return headers;
    }

    get(url) {
        return this.http.get(this.URL + url, {
            headers: this.getHeader()
        });
    }

    post(url, data) {
        return this.http.post(this.URL + url, data,
            {
                headers: this.getHeader(),
            });
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
            item['value'] = rec['COLL_PK'];
            return item;
        });
    }
    courses(coll_code) {
        return this._lookups['courses'][coll_code].map(rec => {
            let item = {};
            item['text'] = rec['CRSE_CODE'] + ' | ' + rec['CRSE_TITLE'];
            item['value'] = rec['CRSE_CODE'] + ' | ' + rec['CRSE_TITLE'];
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

    courses_list(coll_code) {
        if (this._lookups) {
            return of(this.courses(coll_code));
        }
        return this._lookups_observ.pipe(
            map(() => {
                return this.courses(coll_code);
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
    crns_list(crse) {
        return this.post("registration_assistant/crns", { 'crse': crse }).pipe(
            map((response) => {
                return response['data']['crns'];
            })
        );
    }


    getTickets(id) {
        return this.get("registration_assistant/requests");
    }

    getTicketDetails(id) {
        return this.get("registration_assistant/details/" + id);
    }

    delete(id) {
        return this.get("registration_assistant/delete/" + id);
    }

    download(url) {
        return this.get('registration_assistant/download/' + url);
    }

    getLockups() {
        return this.get("registration_assistant/lookups");
    }

    AddRequest(data) {
        return this.post("registration_assistant/add", data);
    }
}