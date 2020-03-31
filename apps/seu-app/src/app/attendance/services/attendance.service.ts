import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class AttendanceService {

    URL = environment.baselink + environment.servicesprefix + "/rest/attend/";
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.auth
    });

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    getAllCurrentTermCrns(pidm) {
        return this.http.get(this.URL + "attendance/crns/"+pidm, {
            headers: this.headers
        });
    }
}
