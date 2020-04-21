import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppUserService } from 'src/app/apps/services/app-user.service';
import { environment } from 'src/environments/environment';
import { AdmissionUGService } from '../services/admission-ug.service';

@Injectable({
  providedIn: 'root'
})
export class AppsUgGuard implements CanActivate {
  constructor(private router: Router, private appuserService: AppUserService, private admissionugService: AdmissionUGService, private http: HttpClient) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.isLoggedIn();
  }

  isLoggedIn() {
    if (this.admissionugService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/apps/admission-ug/ug-login/']);
    return false;
  }
}