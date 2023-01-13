import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ResumeRootService } from './resume-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { User } from '../models/user';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { ResumeServicesModule } from './resume-service.module';

@Injectable({
    providedIn: ResumeServicesModule
})
export class ResumeUserService extends ResumeRootService {

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
        super(http, router, config, translate,toaster);
    }

    getUser() {
        this.get("resume/user").subscribe(res => {
            if (res['status']) {
                this.user = res['user'];
                this.userLoaded = true;
                this.userHasLoaded.next();
            } else {
                this.config.relogin();
            }
        });
    }

    is_admin() {
        return this.has_role('admin');
    }
    is_instructor() {
        return this.has_role('instructor');
    }
    is_manager() {
        return this.has_role('manager');
    }
    has_role(role) {
        return this.user.ROLE == role;
    }

}

