import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUserRootService } from '../../../services/app-user-root.service';
import { Router } from '@angular/router';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { StudentServicesModule } from './student-services.module';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Injectable({
    providedIn: StudentServicesModule
})
export class StudentService extends AppUserRootService {
    tokenKey = 'services-token';
    userKey = 'services-student';

    login_std_id = '';
    constructor(router: Router, globalService: GlobalBaseService, http: HttpClient, translate: TranslateService, toaster: AppToasterService) {
        super(router, globalService, translate, toaster, http);
    }
    get have_docs_permession() {
        if (this.isLoggedIn)
            return (this.LoggedInUser['LEVEL_CODE'] == 'UG' ); //&& this.LoggedInUser['STD_STATUS_CODE'] == 'IG'
        return false;
    }
    
    get have_docs_gr_permession() {
        if (this.isLoggedIn)
            return (this.LoggedInUser['LEVEL_CODE'] == 'GR' && this.LoggedInUser['STD_STATUS_CODE'] == 'IG')
        return false;
    }

    get have_docs_ud_permession() {
        if (this.isLoggedIn)
            return (this.LoggedInUser['LEVEL_CODE'] == 'UD' && this.LoggedInUser['STD_STATUS_CODE'] == 'IG')
        return false;
    }

    get have_reenroll_permession() {
        if (this.isLoggedIn)
            return (this.LoggedInUser['LEVEL_CODE'] == 'GR' ); //&& this.LoggedInUser['STD_STATUS_CODE'] == 'IG'
        return false;
    }
    get have_refund_permession() {
        if (this.isLoggedIn)
            return true;
            // return (this.LoggedInUser['STD_STATUS_CODE'] == 'AS' || 
            //         this.LoggedInUser['STD_STATUS_CODE'] == 'AD' || 
            //         this.LoggedInUser['STD_STATUS_CODE'] == 'WD' || 
            //         this.LoggedInUser['STD_STATUS_CODE'] == 'WA' ||
            //         this.LoggedInUser['STD_STATUS_CODE'] == 'DS'); //&& this.LoggedInUser['STD_STATUS_CODE'] == 'IG'
        return false;
    }
    get fullName() {
        if (this.isLoggedIn)
            return this.LoggedInUser['FULL_NAME_AR'];
        return '';
    }

    get isLoggedIn() {
        if (this.LoggedInUser) {
            return true;
        }
        return false
    }

    login(data) {
        return this.post('/stds/session/login', data);
    }

    autologin(data){
        return this.post('/stds/session/autologin', data);
    }

    verify(data) {
        return this.post('/stds/session/verify', data);
    }
    send_verify_code(){
        return this.get('/stds/stds/send_verify_code');
    }
    sms_verify(data){
        return this.post('/stds/stds/sms_verify', data);
    }

    load_token_data() {
        return this.post('/stds/session/details', { token: this.LoggedInToken }).subscribe(response => {
            if (!response['status']) {
                this.redirect_login();
                return false;
            }
            this.LoggedInUser = response['data']['student'];
            this.pushuserLoaded();
        });
    }

    logout_stduent() {
        return this.post('/stds/session/logout', { token: this.LoggedInToken });
    }

    appRedirect() {
        this.redirect_login();
    }

    redirect_login() {
        this.router.navigate(['/apps/stds-services/login']);
    }

    logout() {
        this.logout_stduent().subscribe();
        super.logout();
        this.pushuserLoaded();
    }

    download_pdf_get(url) {
        return this.get('/stds/' + url);
    }

}


