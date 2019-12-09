import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from './config.service';
import { AppStorageService } from './app-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  // tslint:disable-next-line: variable-name
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();
  constructor(private configService: ConfigService, private appStore: AppStorageService) { }

  logout() {
    this.appStore.removeItem('auth_token');
    this._authNavStatusSource.next(false);
  }

  saveToken(token) {



    this.appStore.setItem(this.configService.getToken(), token);


  }

  getApp() {
    return this.appStore.getItem(this.configService.getToken());
  }

  IsLoggedIn() {
    let IsLoggedIn = false;

    this.authNavStatus$.subscribe(x => IsLoggedIn = x);

    return IsLoggedIn;
  }

  login() {

    this._authNavStatusSource.next(true);


  }
}
