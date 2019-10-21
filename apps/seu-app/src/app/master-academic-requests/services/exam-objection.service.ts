import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamObjectionService {

  constructor(private configService: ConfigService, private httRequest: HttpRequestService) {
    this.configService.baseUrl = 'stdsUnivapi';
  }
}
