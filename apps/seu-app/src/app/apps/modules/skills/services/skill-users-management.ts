import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from '../../../../shared/services/global.service';

@Injectable({
    providedIn: 'root'
})
export class SkillsUsersManagementService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService
    ) {
        super(http, router, config);
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
            return this.post("emp/instructor/update", { 'USER_ID': id, 'ACTIVE': 0 });
        }
        return this.post("emp/users/update", { 'USER_ID': id, 'ACTIVE': 1 });
    }

    addUser(data,instructors=false) {
        if(instructors){
            return this.post("emp/instructors/add", data);
        }
        return this.post("emp/users/add", data);
    }

    addInstructor(data,instructors) {
        if(instructors){
            return this.post("emp/instructors/add", data);
        }
        return this.post("emp/users/add", data);
    }
}

