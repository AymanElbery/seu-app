import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  // tslint:disable-next-line: variable-name
  private _apiURI: string;
  baseUrl: string;
  private  cmsURI: string;
  private  stdapi: string;

  // tslint:disable-next-line: variable-name
  private _tokenName: string;
  constructor() {
    this._apiURI = 'https://seuapps.seu.edu.sa/';
    this.cmsURI  = 'http://64.202.186.104:86/umbraco/Surface/';
    this.stdapi  =   'https://seuapps.seu.edu.sa/';
    this._tokenName = 'auth_token';

  }
  getSid()
  {
 return   localStorage.getItem('sid');
  }

  useCmsURI() {
    ////console.log('use 1' + this._apiURI);
    this._apiURI = this.cmsURI;
    ////console.log('use 2' + this._apiURI);
  }

  EndCmsURI() {
    this._apiURI = this.cmsURI;
    this._apiURI = this.stdapi;
  }


  getToken() {
    return this._tokenName;
  }

  getApiURI() {
      return this._apiURI + this.baseUrl;
      ////console.log('getApiURI' + this._apiURI);

  }

}
