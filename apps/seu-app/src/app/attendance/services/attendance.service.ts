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

    getCrn(crn) {
        return this.http.post(this.URL + "attendance/crn",
        {
            crn: crn
        },
        {
            headers: this.headers,
        });
    }

    getCodeByCrn(crn, meet_id) {
        return this.http.post(this.URL + "attendance/codebycrn",
        { 
            crn: crn,
            meet_id: meet_id
        },
        {
            headers: this.headers,
        });
    }

    disActiveCode(code) {
        return this.http.post(this.URL + "attendance/disactivecode",
        { 
            code: code
        },
        {
            headers: this.headers,
        });
    }

    setCode(code, data){
        
        let startTime = new Date().getTime();
        let endTime = startTime + (10 * 60000 );
        return this.http.post(this.URL + "attendance/setcode",
        { 
            code: code,
            startTime: startTime,
            endTime: endTime,
            active: 1,
            crn: data.CRN,
            meet_id: data.SSRMEET_SURROGATE_ID,
            term: data.TERM_CODE,
        },
        {
            headers: this.headers,
        });
    }

    getDates(crn){
        return this.http.post(this.URL + "attendance/crndates",
        { 
            crn: crn,
        },
        {
            headers: this.headers,
        });
    }

    getAllStds(crn){
        return this.http.post(this.URL + "attendance/crnallstds",
        { 
            crn: crn,
        },
        {
            headers: this.headers,
        });
    }

    getAttendStds(crn){
        return this.http.post(this.URL + "attendance/attends",
        { 
            crn: crn,
        },
        {
            headers: this.headers,
        });
    }
}
