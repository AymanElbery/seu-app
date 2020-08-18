import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
@Injectable({
    providedIn: 'root'
})
export class SkillsCourseService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster:AppToasterService
    ) {
        super(http, router, config, translate,toaster);
    }

    getAllCourses() {
        return this.get("emp/courses/list");
    }

    getCampus() {
        return this.get("lookups/campus");
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

    getClassificatios() {
        return this.get("emp/courses/list_classifications");
    }

    updateCourse(data) {
        return this.post("emp/courses/add_update", data);
    }

    updateStatus(data){
        return this.post("emp/courses/change_course_std_status", data);
    }

    addCourseAppointment(data){
        return this.post("emp/courses/add_course_appointment", data);
    }

    addCourseStd(data){
        return this.post("emp/courses/add_course_std", data);
    }

    deleteCourse(data){
        return this.post("emp/courses/delete", data);
    }

    deleteCourseAppointment(data) {
        return this.post("emp/courses/delete_appointment", data);
    }
}

