import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SkillsModule } from '../skills.module';
import { SkillServicesModule } from './skills-service.module';
@Injectable({
    providedIn: SkillServicesModule
})
export class StudentCoursesService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getAllCourses() {
        return this.get("std/courses/available");
    }
    mycourses() {
        return this.get("std/courses/mycourses");
    }
    getCourseDetails(id) {
        return this.get("std/courses/details/" + id);
    }
    register(id) {
        return this.post("std/courses/register", { course_id: id });
    }
    cancel(id) {
        return this.post("std/courses/cancel", { course_id: id });
    }
    excuse(id) {
        return this.post("std/courses/excuse", { course_id: id });
    }
}

