import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class LeadershipService {
    URL = environment.baselink + environment.servicesprefix + "/rest/leadership/";
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.auth
    });

    constructor(
        private http: HttpClient,
        private router: Router
    ) {

    }

    getHeader() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.auth
        });
        return headers;
    }

    get(url) {
        return this.http.get(this.URL + url, {
            headers: this.getHeader()
        });
    }

    post(url, data) {
        return this.http.post(this.URL + url, data,
            {
                headers: this.getHeader(),
            });
    }

    list_jobs() {
        return this.get("job/list");
    }

    add_update_job(data) {
        return (data.JOB_PK != 0) ? this.post("job/update", data) : this.post("job/add", data);
    }

    get_job_by_id(id) {
        return this.get("job/get_job_by_id/"+id);
    }

    delete_job(id) {
        return this.get("job/delete/" + id);
    }


    list_ads() {
        return this.get("ads/list");
    }

    add_ads(data) {
        return this.post("ads/add", data);
    }

    delete_ads(id) {
        return this.get("ads/delete/" + id);
    }
}
