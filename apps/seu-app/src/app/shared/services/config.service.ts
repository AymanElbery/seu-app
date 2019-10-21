import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // tslint:disable-next-line: variable-name
  private _apiURI: string;
  baseUrl: string;


  // tslint:disable-next-line: variable-name
  private _tokenName: string;
  constructor() {
    this._apiURI = 'https://seuapps.seu.edu.sa/';
    this._tokenName = 'auth_token';

  }

  getToken() {
    return this._tokenName;
  }

  getApiURI() {
      return this._apiURI + this.baseUrl;

  }

}
