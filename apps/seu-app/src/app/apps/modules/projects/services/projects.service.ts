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

  constructor(router: Router, globalService: GlobalBaseService, http: HttpClient, translate: TranslateService, toaster: AppToasterService) {
    super(router, globalService, translate, toaster, http)
  }

  getLookups(lang) {
    return this.get('/innovation/application/lookups?lang=' + lang);
  }

  addRequest(data) {
    return this.post("/innovation/application/save", data);
  }

  gethackathonLookups(lang) {
    return this.get('/innovation/hackathon/lookups?lang=' + lang);
  }

  addhackathonRequest(data) {
    return this.post("/innovation/hackathon/save", data);
  }

  getDistanceLearningLookups(lang) {
    return this.get('/innovation/distancelearning/lookups?lang=' + lang);
  }

  getCertsByEmail(data) {
    return this.post('/innovation/distancelearning/get_certs_by_email' , data);
  }

  addDistanceLearningRequest(data) {
    return this.post("/innovation/distancelearning/save", data);
  }

  printCert(c_id, r_id) {
    return this.get("/innovation/distancelearning/cert/" + c_id + '/' + r_id);
  }

  downloadPDF(response) {
    if (response['status']) {
        const linkSource = `data:application/pdf;base64,${response['data']['content']}`;
        const downloadLink = document.createElement("a");
        const fileName = "cert.pdf";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    } else {
        this.notifyError(response['res_code']);
    }
  }

}


