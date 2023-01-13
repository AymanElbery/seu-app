import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { environment } from 'src/environments/environment'
@Injectable({
    providedIn: 'root'
})
export class StatementsService {


    constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
        this.configService.baseUrl = environment.gr;
    }


    getStatements() {
        this.configService.baseUrl = environment.gr;
        return this.httRequest.GetRequest('statements').toPromise();
    }

    getDoaunloadURL() {
        this.configService.baseUrl = environment.gr;
        return this.configService.getApiURI();
    }
}



