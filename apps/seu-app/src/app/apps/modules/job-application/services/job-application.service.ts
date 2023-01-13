import { Injectable } from '@angular/core';
import { AppUserService } from '../../../services/app-user.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService extends AppUserService {
  
  URL = environment.baselink + environment.servicesprefix + environment.common + "/employment/";
    auth = `Basic ${window.btoa('emp:Emp@201620')}`;
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.auth
    });

  constructor(router: Router, globalService: GlobalBaseService, private http: HttpClient,) {
    super(router, globalService);
  }

  getLookups(lang){
    let url = (lang == "ar") ? this.URL + "application/lookups" : this.URL + "application/lookups?lang=en";
    return this.http.get(url,
    {
        headers: this.headers,
    });
  }

  addRequest(data) {
    return this.http.post(this.URL + "application/submit",
    { 
      name          : data.name,
      email         : data.email,
      birth_date     : data.birth_date,
      phone         : data.phone,
      nationality   : data.nationality,
      city          : data.city,
      gender        : data.gender,
      qualifications: data.qualification,
      general_major : data.general_major,
      private_major : data.private_major,
      branch        : data.branch,
      job_type      : data.job_type,
      resume        : data.resume,
    },
    {
      headers: this.headers,
    });
  }

}


