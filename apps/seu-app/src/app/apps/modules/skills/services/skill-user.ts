import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { User } from '../models/user';
import { Student } from '../models/student';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Injectable({
    providedIn: 'root'
})
export class SkillsUserService extends SkillsRootService {

    user: User;
    student: Student;

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
        this.get("skills/user").subscribe(res => {
            if (res['status']) {
                this.user = res['user'];
                this.student = res['student'];
                this.userLoaded = true;
                this.userHasLoaded.next();
            } else {
                this.config.relogin();
            }
        });
    }

    getStuffUsers() {
        return this.get("emp/users/list_instructors");
    }

    inactiveUser(id){
        return this.post("emp/users/update", {'USER_ID' : id,'ACTIVE' : 0});
    }
    is_admin() {
        return this.has_role('admin');
    }
    is_admission() {
        return this.has_role('admission');
    }
    is_college() {
        return this.has_role('college');
    }
    is_emp() {
        return this.is_admin() || this.is_admission() || this.is_college();
    }
    is_instructor() {
        return this.has_role('instructor');
    }
    is_std() {
        return this.student ? true : false;
    }
    has_role(role) {
        return this.user.ROLE == role;
    }

}

