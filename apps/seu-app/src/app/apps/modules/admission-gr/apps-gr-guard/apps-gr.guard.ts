import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdmissionGRService } from '../services/admission-gr.service';

@Injectable()
export class AppsGrGuard implements CanActivate {
  
  constructor(private router: Router,  private admissionGRService: AdmissionGRService, private http: HttpClient) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isLoggedIn();
  }

  isLoggedIn() {
    if (this.admissionGRService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/apps/admission-gr/gr-login/']);
    return false;
  }
}