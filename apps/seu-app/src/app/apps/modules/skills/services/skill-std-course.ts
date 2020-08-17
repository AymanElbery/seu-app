import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
    providedIn: 'root'
})
export class StudentCoursesService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService
    ) {
        super(http, router, config, translate);
    }

    getAllCourses() {
        return this.get("std/courses/available");
    }
    getCourseDetails(id) {
        return this.get("std/courses/details/" + id);

    }
}

