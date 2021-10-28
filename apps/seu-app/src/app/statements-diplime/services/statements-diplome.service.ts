import { Injectable } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StatementsDiplomeService {


    constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
        this.configService.baseUrl = environment.ud;
    }


    getStatements() {
        this.configService.baseUrl = environment.ud;
        return this.httRequest.GetRequest('statements').toPromise();
    }

    getDoaunloadURL() {
        this.configService.baseUrl = environment.ud;
        return this.configService.getApiURI();
    }
}



