import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { StudentServicesModule } from './student-services.module';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { StudentService } from './student.service'

@Injectable({
    providedIn: StudentServicesModule
})
export class AppointmentService extends StudentService {

    constructor(router: Router, globalService: GlobalBaseService, http: HttpClient, translate: TranslateService, toaster: AppToasterService) {
        super(router, globalService, http, translate, toaster)
    }

    get_list() {
        return this.get('/stds/appoint/list');
    }
    add(data) {
        return this.post('/stds/appoint/add', data);
    }
    available() {
        return this.get('/stds/appoint/available');
    }
    cancel(id) {
        return this.get('/stds/appoint/cancel/' + id);
    }
    print(id) {
        return this.get('/stds/appoint/print/' + id);
    }
}
