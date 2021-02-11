import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ConfigService } from '../../shared/services/config.service';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { StatementsServicesModule } from './statements-service.module';


@Injectable({
    providedIn: StatementsServicesModule
})
export class StatementsRootService {
    URL = this.configService.getApiURI();
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;

    langPrefix = '_AR';

    constructor(
        public http: HttpClient,
        public router: Router,
        private configService: ConfigService,
        public translate: TranslateService,
        public toaster: AppToasterService,
        
    ) {
        this.configService.baseUrl = 'stdservicesapi';
        this.langPrefix = this.translate.currentLang == 'ar' ? '_AR' : '_EN';
        this.translate.onLangChange.subscribe(() => {
            this.langPrefix = this.translate.currentLang == 'ar' ? '_AR' : '_EN';
        });

    }

    getHeader() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.auth,
            'sessionid': this.configService.getSid()
        });
        return headers;
    }

    get(url) {
        return this.http.get(this.URL + url, {
            headers: this.getHeader()
        }).pipe(
            map((res: any) => {
                if (!res.status && (res.res_code == "invalid_user" || res.res_code == "invalid_session")) {
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

