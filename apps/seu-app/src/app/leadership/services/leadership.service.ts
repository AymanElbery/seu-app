import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Injectable({
    providedIn: "root"
})
export class LeadershipService {
    _settings;
    currentApp;
    currentAdd;
    instructor;
    URL = environment.baselink + environment.servicesprefix + "/rest/leadership/";
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
        this.toaster.push([{ type: "error", 'body': this.translate.instant("messages." + code) }]);
    }

    notifySucc(code) {
        this.toaster.push([{ type: "success", 'body': this.translate.instant("messages." + code) }]);
    }

    getHeader() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.auth,
            'sessionid': this.globalService.getSID()
        });
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
    settings() {
        if (this._settings) {
            return of(this._settings);
        }
        return this.get('leadership/user').pipe(map(response => {
            let setting = {
                show_menu: false,
                menu_user: false,
                menu_admin: false,
                menu_instructor: false,
            }
            if (response['data']['instructor']) {
                setting.show_menu = true;
                setting.menu_instructor = true;
            }
            if (response['data']['user']) {
                setting.show_menu = true;
                setting.menu_user = true;
                setting.menu_admin = (response['data']['user']['IS_ADMIN']) ? true : false;
            }
            this._settings = setting;
            return setting;
        }));
    }
    list_jobs() {
        return this.get("job/list");
    }

    add_job(data) {
        return this.post("job/add", data);
    }

    delete_job(id) {
        return this.get("job/delete/" + id);
    }


    list_ads() {
        return this.get("ads/list");
    }

    add_ads(data) {
        return this.post("ads/add", data);
    }

    delete_ads(id) {
        return this.get("ads/delete/" + id);
    }


    users_list() {
        return this.get("users/list");
    }
    user_save(data) {
        return this.post("users/save", data);
    }

    myapplications() {
        return this.get("applications/mylist");
    }

    file(name) {
        return this.get("applications/file/" + name);
    }

    addslist() {
        return this.get("applications/addslist");
    }

    application_create(data) {
        return this.post("applications/save", data);
    }
}
