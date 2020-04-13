import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  LoggedInUser;
  constructor(public router: Router) {
  }

get fulName(){
  return '';
}

get isLoggedIn(){
  return false;
}

appRedirect(){
  this.router.navigate(['/apps/'])
  
}

logout() {
  // add custom code
  this.appRedirect();
}

}

