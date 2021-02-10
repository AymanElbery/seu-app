import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/account/services/user.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class NotificationsService {

  private NOTIFICAATIONSETTINGS = {
    WITHDRAW_REQUEST: { path: '/procedures/withdrawuniv' },
    POSTPHONE_REQUEST: { path: '/procedures/postpone' },
    SUMMER_WITHDRAW: { path: '/procedures/summer' },
    CANCEL_COURSE: { path: '/procedures/cancelcourse' },
    EXCUSE_REQUEST: { path: '/procedures/execuse' },
    RETURN_REQUEST: { path: '/procedures/reenrol' },
    CHANGE_MAJOR: { path: '/procedures/changemajor' },
    CHANGE_CAMP: { path: '/procedures/changerequest' },
    // terminate: { path: '/procedures/terminate' },
    VISITOR_STUDENT: { path: '/procedures/visitorstudent' },
    COURSES_REQUEST: { path: '/procedures/equalize' },
    ENGLISH_REQUEST: { path: '/procedures/eequalize' },
    EXAM_OBJECTION: { path: '/procedures/objectexam', masterPath: '/academicrequests/objectexam' },
    EXAM_FINAL_EXCUSE: { path: '/exams/examexcuse', masterPath: '/academicrequests/examsexecuses' },
    EXAM_TERM_EXCUSE: { path: '/exams/examexcuse', masterPath: '/academicrequests/examsexecuses' },
    LECTURES: { path: '/procedures/lecexecuse', masterPath: '/academicrequests/lecturesexecuses' },
    CANCEL_COURSE_MASTER: { path: '/academicrequests/cancelcourse' },
    CHANGE_CAMP_MASTER: { path: '/otherrequests/changebranch' },
    CHANGE_MAJOR_MASTER: { path: '/otherrequests/changecourse' },
    RETURN_REQUEST_MASTER: { path: '/academicrequests/reEnroll' },
    EXCUSE_REQUEST_MASTER: { path: '/academicrequests/termexecuse' },
    WITHDRAW_REQUEST_MASTER: { path: '/academicrequests/withdrawal' },
    POSTPHONE_REQUEST_MASTER: { path: '/academicrequests/studypostpone' }
    //FEES_REFUND_MASTER: { path: '/academicrequests/lecexecuse' },
  }

  notsURL = environment.baselink + environment.servicesprefix + "/rest/notifications/";
  auth = `Basic ${window.btoa('nots:N0t!fic@ti0n$')}`;
  notesList = [];

  constructor(private http: HttpClient, public userService: UserService, private router: Router) {
    this.userService.userDataSubject.
      subscribe(res => {
        if (res) {
          this.reload();
        }
      });
  }

  reset() {
    this.notesList = [];
  }
  reload() {
    const udata = this.userService.getActiveRoleDetails();
    let username = udata.username;
    if (udata.role == "Student") {
      username = username.substr(1);
    }
    this.getList(username);
    // setTimeout(() => {
    //   this.reload();
    // }, 60000);
  }

  getList(username) {
    if (!username) {
      return;
    }
    const url = this.notsURL;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'username': username,
      'Authorization': this.auth
    });
    this.http.get(this.notsURL + 'unreadlist', { headers }).subscribe(res => {
      this.notesList = res['data'];
      //console.log("notesList", this.notesList);
    });
  }
  redirect(note) {
    //console.log(note);
    const url = this.notsURL;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Id': note['REC_PK'],
      'Authorization': this.auth
    });

    this.http.get(this.notsURL + 'markread', { headers }).subscribe(res => {
      this.reload();
    });
    if (!this.NOTIFICAATIONSETTINGS[note['SERVICECODE']]) {
      return;
    }
    let path = this.NOTIFICAATIONSETTINGS[note['SERVICECODE']]['path'];
    if (this.NOTIFICAATIONSETTINGS[note['SERVICECODE']]['masterPath']) {
      const udata = this.userService.getActiveRoleDetails();
      if (udata.level == 'GR') {
        path = this.NOTIFICAATIONSETTINGS[note['SERVICECODE']]['masterPath'];
      }
    }
    this.router.navigateByUrl(path);
  }

}
