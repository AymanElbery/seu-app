import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class AttendanceService {

    URL = environment.baselink + environment.servicesprefix + environment.common + "/attend/";
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

    getSTD(crn, code, id) {
        return this.http.post(this.URL + "attendance/stdbycode",
        { 
            crn: crn,
            code: code,
            id: id
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

    setCode(data, code){
        
        let startTime = new Date().getTime();
        let endTime = startTime + (10 * 60000 );
        return this.http.post(this.URL + "attendance/setcode",
        { 
            code: code,
            startTime: startTime,
            endTime: endTime,
            active: 1,
            crn: data.CRN,
        },
        {
            headers: this.headers,
        });
    }

    getStdCrns(id) {
        return this.http.post(this.URL + "attendance/stdcrns",
        { 
            id: id
        },
        {
            headers: this.headers,
        });
    }

    confirmAttend(id, crn, code){
        return this.http.post(this.URL + "attendance/confirmattend",
        { 
            id: id,
            crn: crn,
            code: code
        },
        {
            headers: this.headers,
        });
    }

    getAttendStd(crn, id){
        return this.http.post(this.URL + "attendance/getattendstd",
        { 
            id: id,
            crn: crn
        },
        {
            headers: this.headers,
        });
    }
}
