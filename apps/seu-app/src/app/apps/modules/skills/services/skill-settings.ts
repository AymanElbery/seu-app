import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { SkillsRootService } from './skill-root.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { SkillServicesModule } from './skills-service.module';
@Injectable({
    providedIn: SkillServicesModule
})
export class SkillsSettingsService extends SkillsRootService {

    constructor(
        public http: HttpClient,
        public router: Router,
        config: GlobalService,
        translate: TranslateService,
        toaster: AppToasterService
    ) {
        super(http, router, config, translate, toaster);
    }

    getSettings() {
        return this.get("emp/settings/list");
    }

    getSettingById(id) {
        return this.get("emp/settings/get_by_id/"+ id);
    }

    update_setting(data) {
        return this.post("emp/settings/update_setting", data);
    }

}