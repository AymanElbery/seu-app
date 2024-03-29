import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../../environments/environment';
import { GlobalService } from '../../../../shared/services/global.service';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SkillsModule } from '../skills.module';
import { SkillServicesModule } from './skills-service.module';


@Injectable({
    providedIn: SkillServicesModule
})
export class SkillsRootService {
    URL = environment.baselink + environment.servicesprefix + environment.common + "/skills/";
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
                if (!res.status && (res.res_code == "invalid_user" || res.res_code == "invalid_session")) {
                    //console.log("INVALID", this.URL + url, res);

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
        this.toaster.push([{ type: "success", 'body': this.translate.instant("messages." + code) }]);
    }

    tryagain() {
        this.toaster.tryagain();
    }

    addFileURL(files, field = 'FILE_NAME') {
        return files.map(item => {
            item['downloadURL'] = environment.baselink + environment.servicesprefix + "/rest" + "/download.php?file=" + item[field];
            return item;
        });
    }


    printAttends(attnd_id) {
        return this.get("certs/attends/" + attnd_id);
    }

    printAttendByLect(lect_id, std_id) {
        return this.get("certs/attends_lect/" + lect_id + "/" + std_id);
    }
    printCerts(c_id, std_id, rate) {
        return this.get("certs/cert/" + c_id + '/' + std_id + '/' + (rate ? 1 : 0));
    }
    printAttend(c_id, std_id) {
        return this.get("std/courses/attend_cert/" + c_id + '/' + std_id);
    }
    printAttendAdmin(c_id, std_id) {
        return this.get("emp/courses/attend_cert/" + c_id + '/' + std_id);
    }
    downloadPDF(response, file_name ="certificate.pdf") {
        if (response['status']) {
            const linkSource = `data:application/pdf;base64,${response['data']['content']}`;
            const downloadLink = document.createElement("a");
            const fileName = file_name;

            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
        } else {
            this.notifyError(response['res_code']);
        }
    }
}

