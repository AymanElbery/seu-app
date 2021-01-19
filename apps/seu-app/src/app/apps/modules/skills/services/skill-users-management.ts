import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SkillsModule } from '../skills.module';
import { SkillServicesModule } from './skills-service.module';

@Injectable({
    providedIn: SkillServicesModule
})
export class SkillsUsersManagementService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster:AppToasterService
    ) {
        super(http, router, config, translate,toaster);
    }

    getAllUsers(instructors = false) {
        if (instructors) {
            return this.get("emp/instructors/list");
        }
        return this.get("emp/users/list");
    }

    inactiveUser(id, instructors = false) {
        if (instructors) {
            return this.post("emp/instructors/update", { 'USER_ID': id, 'ACTIVE': 0 });
        }
        return this.post("emp/users/update", { 'USER_ID': id, 'ACTIVE': 0 });
    }

    activeUser(id, instructors) {
        if (instructors) {
            return this.post("emp/instructors/update", { 'USER_ID': id, 'ACTIVE': 1 });
        }
        return this.post("emp/users/update", { 'USER_ID': id, 'ACTIVE': 1 });
    }

    addUser(data, instructors = false) {
        if (instructors) {
            return this.post("emp/instructors/add", data);
        }
        return this.post("emp/users/add", data);
    }

    addInstructor(data, instructors) {
        if (instructors) {
            return this.post("emp/instructors/add", data);
        }
        return this.post("emp/users/add", data);
    }

    stdClassifications(std_id, print = 0) {
        return this.get("emp/courses/std_classifications/" + std_id + "/" + print);
    }

    blockNewUser(data) {
        return this.post("emp/users/block_new_std" , data );
    }

    removeUserFromBlock(id) {
        let data = {'id' : id};
        return this.post("emp/users/remove_from_block_list" , data );
    }

    getBlockedStudents(){
        return this.get("emp/users/list_blocked");
    }
}

