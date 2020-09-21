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
    currentAddApps;
    currentJobAds;
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
        this.toaster.push([{ type: "error", 'body': this.translate.instant("leadership.messages." + code) }]);
    }

    notifySucc(code) {
        this.toaster.push([{ type: "success", 'body': this.translate.instant("leadership.messages." + code) }]);
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
        }).pipe(
            map((res: any) => {
                if (!res.status && (res.res_code == "invalid_user" || res.res_code == "invalid_session")) {
                    this.globalService.relogin();
                }
                return res;
            })
        );
    }

    post(url, data) {
        return this.http.post(this.URL + url, data,
            {
                headers: this.getHeader(),
            }).pipe(
                map((res: any) => {
                    if (!res.status && (res.res_code == "invalid_user" || res.res_code == "invalid_session")) {
                        this.globalService.relogin();
                    }
                    return res;
                })
            );
    }
    settings() {
        if (this._settings) {
            return of(this._settings);
        }
        return this.get('leadership/user').pipe(map(response => {
            if (response['status']) {
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
            } else {
                return {};
            }
        }));
    }
    list_jobs() {
        return this.get("job/list");
    }

    add_update_job(data) {
        return (data.JOB_PK != 0) ? this.post("job/update", data) : this.post("job/add", data);
    }

    get_job_by_id(id) {
        return this.get("job/get_job_by_id/" + id);
    }

    delete_job(id) {
        return this.get("job/delete/" + id);
    }


    list_ads() {
        return this.get("ads/list");
    }

    save_ads(data) {
        return this.post("ads/save", data);
    }
    ads_apps(id) {
        return this.get("ads/apps/" + id);
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

    get_my_recommendations() {
        return this.get("recommendations/myrecommendation");
    }

    get_my_add_recommendations(id) {
        return this.get("recommendations/myadrecommendation/" + id);
    }

    file(name) {
        return this.get("applications/file/" + name);
    }

    addslist() {
        return this.get("applications/addslist");
    }

    get_instructor(data) {
        return this.post("recommendations/get_instructor_by", data);
    }

    save_recommend(data) {
        return this.post("recommendations/save", data);
    }

    application_create(data) {
        return this.post("applications/save", data);
    }
}
