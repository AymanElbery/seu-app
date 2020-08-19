import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SkillsModule } from '../skills.module';
@Injectable({
    providedIn: SkillsModule
})
export class StaffFileService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getAllFiles(id) {
        return this.get("staff/course_files/get_all_files/" + id);
    }

    delete(id) {
        return this.get("staff/course_files/delete_file/" + id);
    }

    addFile(data) {
        return this.post("staff/course_files/add_file" , {data : data});
    }
}

