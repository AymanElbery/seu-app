import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/app/account/services/user.service';
import { Router } from '@angular/router';

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
    objectexam: { path: '/procedures/objectexam' },
    lecexecuse: { path: '/procedures/lecexecuse' },
    terminate: { path: '/procedures/terminate' },
    visitorstudent: { path: '/procedures/visitorstudent' },
    lectabs: { path: "/procedures/lectabs" },
    equalize: { path: '/procedures/equalize' },
    eequalize: { path: '/procedures/eequalize' }
  }

  notsURL = "https://apps.seu.edu.sa/api/api/notifications/";
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
    this.getList(this.userService.getActiveRoleDetails().username);
    setTimeout(() => {
      this.reload();
    }, 60000);
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
    const path = this.NOTIFICAATIONSETTINGS[note['SERVICECODE']]['path'];
    this.router.navigateByUrl(path);
  }

}
