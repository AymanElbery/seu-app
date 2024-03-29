import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../../environments/environment';
import { GlobalService } from '../../../../shared/services/global.service';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslationServicesModule } from './translation-service.module';


@Injectable({
    providedIn: TranslationServicesModule
})
export class TranslationRootService {
    URL = environment.baselink + environment.servicesprefix + environment.common + "/translation/";
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
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.auth
        });
        const session_id = this.config.getSID();
        if (session_id) {
            headers = headers.append('sessionid', session_id);
        }
        if (localStorage.getItem('sid_translate')) {
            headers = headers.append('sid_translate', localStorage.getItem('sid_translate'));
        }
        return headers;
    }

    get(url) {
        return this.http.get(this.URL + url, {
            headers: this.getHeader()
        }).pipe(
            map((res: any) => {
                if (!res.status && (res.res_code == "invalid_user" || res.res_code == "invalid_session")) {
                    return res;
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

    addFileURL(files) {
        return files.map(item => {
            item['downloadURL'] = environment.baselink + environment.servicesprefix + "/rest" + "/download.php?folder=TRANSLATION_FILES&file=" + item['FILE_PATH'];
            item['downloadTransURL'] = environment.baselink + environment.servicesprefix + "/rest" + "/download.php?folder=TRANSLATION_FILES&file=" + item['TRANSLATION_FILE'];
            return item;
        });
    }
    downloadPDF(response) {
        if (response['status']) {
            const linkSource = `data:application/pdf;base64,${response['data']['content']}`;
            const downloadLink = document.createElement("a");
            const fileName = "cert.pdf";

            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
        } else {
            this.notifyError(response['res_code']);
        }
    }
}

