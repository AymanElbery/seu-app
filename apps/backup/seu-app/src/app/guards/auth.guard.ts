import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagerService } from '../shared/services/user-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate  {

  /**
   *
   */
  constructor(private user: UserManagerService,private router: Router) {
    

  }
  canActivate(){
    
   
    if( !this.user.IsLoggedIn())
    {

this.router.navigate(['/login'])
    }
    return true;
  }
  
}
