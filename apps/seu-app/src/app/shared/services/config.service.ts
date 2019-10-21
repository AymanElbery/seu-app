import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

 isMasterUrl = false;
 // tslint:disable-next-line: variable-name
 private _apiURI: string;
 // tslint:disable-next-line: variable-name
 private _apiURIMaster: string;


 // tslint:disable-next-line: variable-name
 private _tokenName: string;
  constructor() {
      this._apiURI = 'https://seuapps.seu.edu.sa/stdservicesapi';
      this._apiURIMaster = 'http://seuapps.seu.edu.sa/stdsUnivapi';
      this._tokenName = 'auth_token';
   }

   getToken() {
     return this._tokenName;
   }

   getApiURI() {
     if (this.isMasterUrl) {
     return this._apiURIMaster;
     }
     return this._apiURI;
   }
   getMasterApiURI() {
    return this._apiURIMaster;
}
}
