import { Injectable } from '@angular/core';
import { GlobalBaseService } from './global-base.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // tslint:disable-next-line: variable-name
  private _apiURI: string;
  baseUrl: string;
  private cmsURI: string;
  private stdapi: string;

  // tslint:disable-next-line: variable-name
  private _tokenName: string;
  constructor(private globalBaseService: GlobalBaseService) {
    this._apiURI = environment.baselink + environment.servicesprefix ;
    this.stdapi = environment.baselink + environment.servicesprefix ;
    this.cmsURI = environment.cmslink;

    this._tokenName = 'auth_token';
  }
  getSid() {
    return this.globalBaseService.getSID();
  }

  useCmsURI() {
    //// console.log('use 1' + this._apiURI);
    this._apiURI = this.cmsURI;
    //// console.log('use 2' + this._apiURI);
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
    //// console.log('getApiURI' + this._apiURI);

  }

}
