import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';

@Injectable({
    providedIn: 'root'
})
export class StatementsDiplomeService {


    constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
        this.configService.baseUrl = "std_api_diplome";
    }


    getStatements() {
        this.configService.baseUrl = "std_api_diplome";
        return this.httRequest.GetRequest('statements').toPromise();
    }

    getDoaunloadURL() {
        this.configService.baseUrl = "std_api_diplome";
        return this.configService.getApiURI();
    }
}



