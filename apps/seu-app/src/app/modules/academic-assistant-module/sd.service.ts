import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { of, Subject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class SDService {

    _usedCourses = [];
    _lookups: any;
    _lookups_observ = new Subject<any>();
    protected _controller = "";

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

    getTickets() {
        return this.get(this._controller + "/requests");
    }

    getTicketDetails(id) {
        return this.get(this._controller + "/details/" + id);
    }

    delete(id) {
        return this.get(this._controller + "/delete/" + id);
    }

    download(url) {
        return this.get(this._controller + '/download/' + url);
    }

    getLockups() {
        return this.get(this._controller + "/lookups");
    }

    AddRequest(data) {
        return this.post(this._controller + "/add", data);
    }
}