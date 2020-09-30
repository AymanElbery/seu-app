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
        toaster:AppToasterService
    ) {
        super(http, router, config, translate,toaster);
    }

    getUser() {
        this.get("translation/user").subscribe(res => {
            if (res['status']) {
                this.user = res['user'];
                this.userLoaded = true;
                this.userHasLoaded.next();
            } else {
                this.config.relogin();
            }
        });
    }

    inactiveUser(id){
        return this.post("emp/users/update", {'USER_ID' : id,'ACTIVE' : 0});
    }
    is_admin() {
        return this.has_role('admin');
    }
    is_client() {
        return this.has_role('client');
    }
    is_emp() {
        return this.is_admin() || this.is_client();
    }
    has_role(role) {
        return this.user.ROLE == role;
    }

}

