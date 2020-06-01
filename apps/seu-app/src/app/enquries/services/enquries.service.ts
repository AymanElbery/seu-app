import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: "root"
})
export class EnquriesService {

    URL = environment.enquery_URL;
    auth = `Basic ${window.btoa('chatbotadmin:P@s$w0rdCPTIT^2020')}`;
    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.auth
    });

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    getListEnquries() {
        return this.http.get(this.URL + "client-messages/list-all",
        {
            params: {
                page: '0',
                size: '1000000'
            },
            headers: this.headers,
        });
    }
    getNotificationsEnq() {
        return this.http.get(this.URL + "client-messages/unreplied-messages-count",
        {
            headers: this.headers,
        });
    }

    getUnrepliedEnquries() {
        return this.http.get(this.URL + "client-messages/list-all-unreplied",
        {
            params: {
                page: '0',
                size: '1000000'
            },
            headers: this.headers,
        });
    }

    getRepliedEnquries() {
        return this.http.get(this.URL + "client-messages/list-all-replied",
        {
            params: {
                page: '0',
                size: '1000000'
            },
            headers: this.headers,
        });
    }


    getRepliedByEnquries(email) {
        return this.http.get(this.URL + "client-messages/list-all-replied-email",
        {
            params: {
                page: '0',
                size: '1000000',
                userEmail: email
            },
            headers: this.headers,
        });
    }

    addAnswer(id, email,  replyMessage) {
        return this.http.put(this.URL + "client-messages/reply-message",
        { 
            id: id,
            userEmail: email,
            replyMessage: replyMessage
        },
        {
            headers: this.headers,
        });
    }
}
