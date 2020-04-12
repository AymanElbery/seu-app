import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  constructor(public router: Router) {
  }

get fulName(){
return '';
}

appRedirect(){
  this.router.navigate(['/apps'])  
}

logout() {
  // add custom code
  this.appRedirect();
}

}

