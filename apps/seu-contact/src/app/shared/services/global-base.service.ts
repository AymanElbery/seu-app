import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GlobalBaseService {

  constructor() {

  }
  abstract getSID(): string;
  abstract removeItem(key);
  abstract getItem(key): string;
  abstract setItem(key, value);
  abstract relogin();

}
