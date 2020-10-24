import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalBaseService } from 'src/app/shared/services/global-base.service';
import { TranslateService } from '@ngx-translate/core';
import { AppToasterService } from 'src/app/shared/services/app-toaster';


@Injectable({
  providedIn: 'root'
})
export class LeadershipService {
  _settings;
  currentApp;
  currentAddApps;
  currentJobAds;
  currentAdd;
  instructor;

  URL = environment.baselink + environment.servicesprefix + '/rest/leadership/';
  auth = `Basic ${window.btoa('emp:Emp@201620')}`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.auth
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private globalService: GlobalBaseService,
    private translate: TranslateService,
    private toaster: AppToasterService
  ) {

  }

  notifyError(code) {
    this.toaster.push([{ type: 'error', 'body': this.translate.instant('leadership.messages.' + code) }]);
  }

  notifySucc(code) {
    this.toaster.push([{ type: 'success', 'body': this.translate.instant('leadership.messages.' + code) }]);
  }

  tryagain() {
    this.toaster.tryagain();
  }

  getHeader() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.auth
    });
    if (this.globalService.getSID()) {
      headers = headers.append('sessionid', this.globalService.getSID());
    }
    return headers;
  }

  get(url) {
    return this.http.get(this.URL + url, {
      headers: this.getHeader()
    }).pipe(
      map((res: any) => {
        if (!res.status && (res.res_code == 'invalid_user' || res.res_code == 'invalid_session')) {
          this.globalService.relogin();
        }
        return res;
      })
    );
  }

  post(url, data) {
    return this.http.post(this.URL + url, data,
      {
        headers: this.getHeader(),
      }).pipe(
        map((res: any) => {
          if (!res.status && (res.res_code == 'invalid_user' || res.res_code == 'invalid_session')) {
            this.globalService.relogin();
          }
          return res;
        })
      );
  }

  settings() {
    if (this._settings) {
      return of(this._settings);
    }
    return this.get('leadership/user').pipe(map(response => {
      if (response['status']) {
        let setting = {
          show_menu: false,
          menu_user: false,
          menu_admin: false,
          menu_interviewer: false,
          menu_agency: false,
          menu_instructor: false,
          menu_recommender: false,
        };

        if (response['data']['instructor']) {
          setting.show_menu = true;
          setting.menu_instructor = true;
        }

        if (response['data']['user']) {
          setting.show_menu = true;
          setting.menu_user = true;
        }
        setting.menu_admin = (response['data']['IS_ADMIN']) ? true : false;
        setting.menu_interviewer = (response['data']['IS_INTERVIEWER']) ? true : false;
        setting.menu_agency = (response['data']['IS_AGENCY']) ? true : false;
        setting.menu_recommender = (response['data']['IS_RECOMMENDER']) ? true : false;
        this._settings = setting;
        return setting;
      } else {
        return {};
      }
    }));
  }

  _lookups;
  _lookups_observ = new Subject<any>();

  lookups() {
    if (this._lookups) {
      return;
    }
    return this.get('lookups/list').subscribe(response => {
      if (response['status']) {
        this._lookups = response['data'];
        console.log(this._lookups);
        this._lookups_observ.next();
      }
    });
  }


  agences() {
    return this._lookups['depts'].filter(item => item['DEPT_TYPE'] == 'AGENCY');
  }

  colleges_deans_agenceis() {
    return this._lookups['depts'].filter(item => (item['DEPT_TYPE'] == 'COLLEGE' || item['DEPT_TYPE'] == 'AGENCY' || item['DEPT_TYPE'] == 'DEAN'));
  }

  colleges_deans() {
    return this._lookups['depts'].filter(item => (item['DEPT_TYPE'] == 'COLLEGE' || item['DEPT_TYPE'] == 'DEAN'));
  }

  depts() {
    return this._lookups['depts'].filter(item => (item['DEPT_TYPE'] == 'DEPT'));
  }

  job_cats() {
    return this._lookups['lookups'].filter(item => (item['LOOKUP_CAT'] == 'JOB_CAT'));
  }

  jobcats_list() {
    if (this._lookups) {
      return of(this.job_cats());
    }
    return this._lookups_observ.pipe(
      map(() => {
        return this.job_cats();
      }));
  }

  colleges_deans_list() {
    if (this._lookups) {
      return of(this.colleges_deans());
    }
    return this._lookups_observ.pipe(
      map(() => {
        return this.colleges_deans();
      }));
  }

  colleges_deans_agenceis_list() {
    if (this._lookups) {
      return of(this.colleges_deans_agenceis());
    }
    return this._lookups_observ.pipe(
      map(() => {
        return this.colleges_deans_agenceis();
      }));
  }

  depts_list() {
    if (this._lookups) {
      return of(this.depts());
    }
    return this._lookups_observ.pipe(
      map(() => {
        return this.depts();
      }));
  }

  agences_list() {
    if (this._lookups) {
      return of(this.agences());
    }
    return this._lookups_observ.pipe(
      map(() => {
        return this.agences();
      }));
  }

  list_jobs() {
    return this.get("job/list");
  }

  add_update_job(data) {
    return (data.JOB_PK != 0) ? this.post('job/update', data) : this.post('job/add', data);
  }

  get_job_by_id(id) {
    return this.get('job/get_job_by_id/' + id);
  }

  delete_job(id) {
    return this.get('job/delete/' + id);
  }


  list_ads() {
    return this.get('ads/list');
  }

  save_ads(data) {
    return this.post('ads/save', data);
  }

  ads_apps(id, type = 'admin', print = 0) {
    return this.get('ads/apps/' + id + '/' + type + '/' + print);
  }

  ads_recommendations(id, print = 0) {
    return this.get('recommendations/adrecommendation/' + id + '/' + print);
  }

  delete_ads(id) {
    return this.get('ads/delete/' + id);
  }

  users_list() {
    return this.get('users/list');
  }

  user_save(data) {
    return this.post('users/save', data);
  }

  myapplications() {
    return this.get('applications/mylist');
  }

  get_my_recommendations() {
    return this.get('recommendations/myrecommendation');
  }

  get_recommendations() {
    return this.get('recommendations/recommendation');
  }

  get_my_add_recommendations(id) {
    return this.get('recommendations/recommendation/' + id);
  }

  file(name) {
    return this.get('applications/file/' + name);
  }

  addslist() {
    return this.get('applications/addslist');
  }

  get_instructor(data) {
    return this.post('recommendations/get_instructor_by', data);
  }

  save_recommend(data) {
    return this.post('recommendations/save', data);
  }

  application_create(data) {
    return this.post('applications/save', data);
  }

  load_app_files(app_id) {
    return this.get('applications/files/' + app_id);
  }

  save_app_file(post) {
    return this.post('applications/save_file', post);
  }

  get_interviewers(ad_id) {
    return this.get('ads/interviewers/' + ad_id);
  }

  save_interviewers(data) {
    return this.post('ads/save_interviewers', data);
  }

  get_app_by_id(id, type) {
    return this.get('applications/get_app_by_id/' + id + '/' + type);
  }

  get_app_files_by_app_id(id) {
    return this.get('applications/get_app_files_by_app_id/' + id);
  }

  get_indicators(id, type, emp_id = 1) {
    return this.get('applications/indicators/' + id + '/' + type + '/' + emp_id);
  }

  get_indicators_report_for_admin(id, type) {
    return this.get('applications/indicators_report/' + id + '/' + type);
  }

  save_files_indicators_rating(data) {
    return this.post('applications/save_files_indicators', data);
  }

  get_agencies(ad_id) {
    return this.get('ads/agencies/' + ad_id);
  }

  save_agencies(data) {
    return this.post('ads/save_agencies', data);
  }


  save_interview_indicators_rating(data) {
    return this.post('applications/save_interview_indicators', data);
  }

  save_agency_indicators_rating(data) {
    return this.post('applications/save_agency_indicators', data);
  }

  loadInterviewrCurrentAds() {
    return this.get('personal_interview/current_ads');
  }

  loadAgencyCurrentAds() {
    return this.get('agency_interview/current_ads');
  }


  get_dean(ad_id) {
    return this.get('ads/dean/' + ad_id);
  }

  save_dean(data) {
    return this.post('ads/save_dean', data);
  }

  list_recommender_ads() {
    return this.get('ads/recommender_ads');
  }

  get_dean_recommendations(ad_id) {
    return this.get('ads/dean_recommendations/' + ad_id);
  }

  save_dean_recommendation(data) {
    return this.post('ads/save_dean_recommendation', data);
  }

  delete_dean_recommendation(ad_id, empId) {
    return this.get('ads/delete_dean_recommendation/' + ad_id + '/' + empId);
  }

  list_ad_recommendations(ad_id) {
    return this.get('ads/ad_recommendations/' + ad_id);
  }

  confirm_recommendation(data) {
    return this.post('ads/ad_recommendation_confirm', data);
  }

  primary_report(ad_id, excel = 0) {
    return this.get('ads/ad_primary_report/' + ad_id + '/' + excel);
  }

  final_report(ad_id, excel = 0) {
    return this.get('ads/ad_final_report/' + ad_id + '/' + excel);
  }

  delete_app(app_id) {
    return this.get("applications/delete_app/" + app_id);
  }
}
