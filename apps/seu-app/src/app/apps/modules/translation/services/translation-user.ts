import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { TranslationRootService } from './translation-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { User } from '../models/user';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslationServicesModule } from './translation-service.module';

@Injectable({
    providedIn: TranslationServicesModule
})
export class TranslationUserService extends TranslationRootService {

    user: User;

    userLoaded: boolean = false;
    userHasLoaded = new Subject();


    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getUser() {
        this.get("translation/user").subscribe((res) => {
            if (res['status']) {
                this.setUser(res['user']);
            } else {
                if (localStorage.getItem('sid_out')) {
                    this.router.navigate(["/apps/translation/auth/login"]);
                } else {
                    this.config.relogin();
                }
            }
        },
            err => {
                console.log("ERR:", err);
            });
    }

    setUser(user) {
        this.user = user;
        this.userLoaded = true;
        this.userHasLoaded.next();
    }

    is_sso() {
        return this.user['SSO'] == '1';
    }

    is_admin() {
        return this.has_role('admin');
    }
    is_client() {
        return this.has_role('client');
    }
    is_emp() {
        return this.has_role('emp');
    }
    has_role(role) {
        return this.user.ROLE == role;
    }

}

