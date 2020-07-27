import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../../../environments/environment';
import { GlobalService } from 'src/app/shared/services/global.service';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class SkillsRootService {
    URL = environment.baselink + environment.servicesprefix + "/rest/skills/";
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    

    constructor(
        public http: HttpClient,
        public router: Router,
        public config:GlobalService
    ) {
        
    }

    getHeader(){
        const headers = new HttpHeaders({
            'Content-Type'  : 'application/json',
            'Authorization' : this.auth,
            'sessionid'     : this.config.getSID()
        });
        return headers;
    }

    get(url){
        return this.http.get(this.URL + url, {
            headers: this.getHeader()
        }).pipe(
            map((res: any) =>{
                if (!res.status && (res.error == "invalid_user" || res.error == "invalid_session")) {
                    this.config.relogin();
                }else{
                    return res;
                }
            })
        );
    }

    post(url, data){
        return this.http.post(this.URL + url, data,
        {
            headers: this.getHeader(),
        });
    }

}

