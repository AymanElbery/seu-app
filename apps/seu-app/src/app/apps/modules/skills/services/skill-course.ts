import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from 'src/app/shared/services/global.service';
@Injectable({
    providedIn: 'root'
})
export class SkillsCourseService extends SkillsRootService{

    constructor(
        public http: HttpClient,
        public router: Router,
        config:GlobalService
    ) {
        super(http, router,config);
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
    
    getCourseAppointments(id) {
        return this.post("emp/courses/get_course_appointments", id);
    }
    
    getClassificatios() {
        return this.get("emp/courses/list_classifications");
    }

    updateCourse(data){
        return this.post("emp/courses/add_update", data);
    }

    addCourseAppointment(data){
        return this.post("emp/courses/add_course_appointment", data);
    }

    deleteCourse(data){
        return this.post("emp/courses/delete", data);
    }

    deleteCourseAppointment(data){
        return this.post("emp/courses/delete_appointment", data);
    }
}

