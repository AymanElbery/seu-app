import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from 'src/app/shared/services/global.service';
@Injectable({
    providedIn: 'root'
})
export class SkillsUserService extends SkillsRootService{

    constructor(
        public http: HttpClient,
        public router: Router,
        config:GlobalService
    ) {
        super(http, router,config);
    }

    getAllUsers() {
        return this.get("emp/users/list");
    }


}

