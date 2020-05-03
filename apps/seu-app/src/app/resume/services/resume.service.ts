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

    addResume(data, lang) {
        let url = (lang == 'en') ? "resume/adden" : "resume/add";
        return this.http.post(this.URL + url,
        { 
            id: data.id, 
            photo: data.photo, 
            name: data.name, 
            email: data.email, 
            phone: data.phone, 
            address: data.address, 
            jobTitle: data.jobTitle, 
            faculty: data.faculty, 
            section: data.section, 
            nationality: data.nationality, 
            titles: data.titles, 
        },
        {
            headers: this.headers,
        });
    }

    getResumeByEmail(email, lang) {
        return this.http.post(this.URL + "resume/getresume",
        { 
            email: email,
            lang: lang
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

    getStuffByID(id) {
        return this.http.get(this.URL + "resume/getStuffByID/"+id,
        {
            headers: this.headers,
        });
    }

    getDept(pidm) {
        return this.http.get(this.URL + "resume/getDept/"+pidm,
        {
            headers: this.headers,
        });
    }

    getDeptStr(dep) {
        return this.http.get(this.URL + "resume/getDeptStr/"+dep,
        {
            headers: this.headers,
        });
    }
}
