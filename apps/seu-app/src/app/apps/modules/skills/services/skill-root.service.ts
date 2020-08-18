import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../../environments/environment';
import { GlobalService } from '../../../../shared/services/global.service';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SkillsModule } from '../skills.module';


@Injectable({
    providedIn: SkillsModule
})
export class SkillsRootService {
    URL = environment.baselink + environment.servicesprefix + "/rest/skills/";
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;

    langPrefix = '_AR';

    constructor(
        public http: HttpClient,
        public router: Router,
        public config: GlobalService,
        public translate: TranslateService,
        public toaster: AppToasterService
    ) {

        this.langPrefix = this.translate.currentLang == 'ar' ? '_AR' : '_EN';
        this.translate.onLangChange.subscribe(() => {
            this.langPrefix = this.translate.currentLang == 'ar' ? '_AR' : '_EN';
        });

    }

    getHeader() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.auth,
            'sessionid': this.config.getSID()
        });
        return headers;
    }

    get(url) {
        return this.http.get(this.URL + url, {
            headers: this.getHeader()
        }).pipe(
            map((res: any) => {
                if (!res.status && (res.error == "invalid_user" || res.error == "invalid_session")) {
                    this.config.relogin();
                } else {
                    return res;
                }
            })
        );
    }

    post(url, data) {
        return this.http.post(this.URL + url, data,
            {
                headers: this.getHeader(),
            });
    }

    notifyError(code) {
        this.toaster.push([{ type: "error", 'body': this.translate.instant("messages." + code) }]);
    }

    notifySucc(code) {
        console.log("messages." + code, this.translate.instant("messages." + code));
        this.toaster.push([{ type: "success", 'body': this.translate.instant("messages." + code) }]);
    }

    tryagain() {
        this.toaster.tryagain();
    }
}

