import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class ResumeService {

    URL = environment.baselink + environment.servicesprefix + "/rest/resume/";
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.auth
    });

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    addResume(data) {
        return this.http.post(this.URL + "resume/add",
        { 
            id: data.id, 
            photo: data.photo, 
            name: data.name, 
            email: data.email, 
            phone: data.phone, 
            jobTitle: data.jobTitle, 
            section: data.section, 
            nationality: data.nationality, 
            titles: data.titles, 
        },
        {
            headers: this.headers,
        });
    }

    getResumeById(id) {
        return this.http.post(this.URL + "resume/getresume",
        { 
            id: id
        },
        {
            headers: this.headers,
        });
    }

    getCountries() {
        return this.http.get(this.URL + "resume/getcountries",
        {
            headers: this.headers,
        });
    }
}
