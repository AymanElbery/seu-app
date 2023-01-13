import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../environments/environment';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Injectable({
    providedIn: "root"
})
export class CardService {
    _settings;
    currentApp;
    currentAddApps;
    currentAdd;
    instructor;
    URL = environment.baselink + environment.servicesprefix + environment.common + "/univcard/";
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

    getRequest(id) {
        return this.get("card/get_request/" + id);
    }

    addRequest(data) {
        return this.post("card/add_request", data);
    }

    deleteRequest(id) {
        return this.get("card/delete_request/" + id);
    }

    printRequest(id) {
        return this.get("card/print_request/" + id);
    }

    downloadImage(response) {
        if (response['status']) {
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                this.iedownload(response['data']['content'], "Card.png");
            } else {
                this.browserDonload(response['data']['content'], "Card.png");
            }
        } else {
            this.notifyError(response['res_code']);
        }
    }

    browserDonload(content, fileName) {
        const linkSource = `data:image/png;base64,${content}`;
        const downloadLink = document.createElement("a");

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();

    }

    iedownload(data, fileName) {
        const byteCharacters = atob(data)
        let byteNumbers = new Array(byteCharacters.length)
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: 'application/pdf' })
        window.navigator.msSaveOrOpenBlob(blob, fileName)
    }
}