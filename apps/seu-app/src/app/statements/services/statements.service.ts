import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
    providedIn: 'root'
})
export class StatementsService {


    constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
        this.configService.baseUrl = "stdservicesapi";
    }


    getStatements() {
        this.configService.baseUrl = "stdservicesapi";
        return this.httRequest.GetRequest('statements').toPromise();
    }

    getDoaunloadURL() {
        this.configService.baseUrl = "stdservicesapi";
        return this.configService.getApiURI();
    }
}



