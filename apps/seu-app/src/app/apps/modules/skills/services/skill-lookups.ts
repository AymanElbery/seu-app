import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from '../../../../shared/services/global.service';
import { User } from '../models/user';
import { Student } from '../models/student';
import { Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class SkillsLookupsService extends SkillsRootService {


    private colleges;
    private groups;
    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService
    ) {
        super(http, router, config, translate);
    }

    getCollegesGroups() {
        return this.get("lookups/colleges_groups");
    }
    getColleges() {
        if (this.colleges) {
            return of(this.colleges);
        }
        return this.getCollegesGroups().pipe(
            map(result => {
                this.colleges = result['data']['colleges'];
                this.groups = result['data']['colleges'];
                return this.colleges;
            })
        );
    }
    getgroups() {
        if (this.colleges) {
            return of(this.colleges);
        }
        return this.getCollegesGroups().pipe(
            map(result => {
                this.colleges = result['data']['colleges'];
                this.groups = result['data']['colleges'];
                return this.groups;
            })
        );
    }
}

