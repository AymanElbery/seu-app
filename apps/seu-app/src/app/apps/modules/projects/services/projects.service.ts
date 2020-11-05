import { Injectable } from '@angular/core';
import { AppUserRootService } from '../../../services/app-user-root.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../../../environments/environment';
import { ProjectsModule } from '../projects.module'
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends AppUserRootService {
  
  URL = environment.baselink + environment.servicesprefix + "/rest/employment/";
  constructor(router: Router, globalService: GlobalBaseService, http: HttpClient, translate: TranslateService, toaster: AppToasterService) {
        super(router, globalService,  translate, toaster,http)
    }

  getLookups(lang){
    return this.get('/projects/lookups?lang='+lang);
  }

  addRequest(data) {
    return this.post("projects/save",data);
  }

}


