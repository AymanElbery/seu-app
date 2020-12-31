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
export class SkillsCourseService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getAllCourses(active) {
        return this.get("emp/courses/list/" + (active ? 1 : 0));
    }

    getAllCompletedSkills(){
        return this.get("emp/courses/skills")
    }

    getCampus() {
        return this.get("lookups/campus");
    }

    getAllFiles(id) {
        return this.get("emp/courses/get_all_files/" + id);
    }

    getRatings(id, files) {
        return this.get("emp/courses/get_all_ratings/" + id + "/" + files);
    }

    getColleges() {
        return this.get("lookups/colleges_groups");
    }

    getCourseById(id) {
        return this.post("emp/courses/get_course", id);
    }

    getCourseStdRequest(id) {
        return this.post("emp/courses/get_course_std_req", id);
    }

    getCourseStudents(id) {
        return this.post("emp/courses/get_course_students", id);
    }

    getCourseAppointments(id) {
        return this.post("emp/courses/get_course_appointments", id);
    }

    getAppStd(id) {
        return this.post("emp/courses/get_course_app_std", id);
    }

    getClassificatios() {
        return this.get("emp/courses/list_classifications");
    }

    updateCourse(data) {
        return this.post("emp/courses/add_update", data);
    }

    updateStatus(data) {
        return this.post("emp/courses/change_course_std_status", data);
    }

    updateBulkStatus(data) {
        return this.post("emp/courses/change_course_std_status_bulk", data);
    }

    addCourseAppointment(data) {
        return this.post("emp/courses/add_course_appointment", data);
    }

    addCourseStd(data) {
        return this.post("emp/courses/add_course_std", data);
    }

    deleteCourse(data) {
        return this.post("emp/courses/delete", data);
    }
    completeCourse(id){
        return this.get("emp/courses/close/"+id);
    }

    deleteCourseAppointment(data) {
        return this.post("emp/courses/delete_appointment", data);
    }


    excuses_list(id) {
        return this.get("emp/excuses/list/" + id);
    }

    excuses_update(data) {
        return this.post("emp/excuses/update", data);
    }
}

