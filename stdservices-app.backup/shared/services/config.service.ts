import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

 private _apiURI  : string;
 private _tokenName:string;
  constructor() {
      this._apiURI = 'http://192.168.8.105:7300/api';
      this._tokenName='auth_token';
   }

   getToken()
   {
     return this._tokenName;
   }

   getApiURI() {
       return this._apiURI;
   }    
}
