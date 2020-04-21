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
        return this.http.get(this.URL + "client-messages/list-all-unreplied",
        {
            params: {
                page: '0',
                size: '100'
            },
            headers: this.headers,
        });
    }

    addAnswer(id, replyMessage) {
        return this.http.put(this.URL + "client-messages/reply-message",
        { 
            id: id,
            replyMessage: replyMessage
        },
        {
            headers: this.headers,
        });
    }
}
