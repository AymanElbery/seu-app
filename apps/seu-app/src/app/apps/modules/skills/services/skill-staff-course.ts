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
export class StaffCoursesService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    mycourses() {
        return this.get("staff/courses/mycourses");
    }
    getCourseDetails(id) {
        return this.get("staff/courses/details/" + id);
    }
    getCourseStudents(id) {
        return this.get("staff/courses/students/" + id);
    }
    getCourseAttendance(id) {
        return this.get("staff/courses/attendance/" + id);
    }
    saveCourseAttendance(post) {
        return this.post("staff/courses/save_attendance", post);
    }

    getCourseFiles(id) {
        return this.get("staff/courses/files/" + id);
    }
    saveCourseFile(post) {
        return this.post("staff/courses/save_file", post);
    }
}

