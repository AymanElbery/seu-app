import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract  class GlobalBaseService {

  constructor() { }

   abstract getSID(): string;
}
