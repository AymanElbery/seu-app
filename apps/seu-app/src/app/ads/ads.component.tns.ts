import { Component, OnInit } from '@angular/core';
import { UserService } from '../account/services/user.service';
import { HomeService } from '../rootservices/home.service';
import { ApiUserRoles } from '../shared/models/StaticData/api-user-roles';
import { CMSUserRoles } from '../shared/models/StaticData/cmsuser-roles';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  newsLen = 0;
  adsLoaded;
  sindex = 1;

  constructor(public userService: UserService,public homeService: HomeService) { }

  ngOnInit() {
    this.LoadData();
  }

  
  LoadAds() {
    if (this.userService.userData.activeRole === ApiUserRoles.Student) {
      return this.loadStudentAds();
    } else if (this.userService.userData.activeRole === ApiUserRoles.Emplpyee) {
      return this.loadEmployeesAds();
    } else {
      this.loadStuffAds();
    }

  }

  private loadStudentAds() {
    return this.homeService.getAds(CMSUserRoles.Student,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        this.userService.adsData = (res as any).Data;
        this.newsLen = this.userService.adsData.length;
        this.adsLoaded = true;
      });
  }
  private loadEmployeesAds() {
    return this.homeService.getAds(CMSUserRoles.Employee,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        this.userService.adsData = (res as any).Data;
        this.newsLen = this.userService.adsData.length;
        this.adsLoaded = true;
      });
  }
  private loadStuffAds() {
    return this.homeService.getAds(CMSUserRoles.Staff,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        this.userService.adsData = (res as any).Data;
        this.newsLen = this.userService.adsData.length;
        this.adsLoaded = true;
      });
  }

  getfn(str) {
    
    return str.substring(str.lastIndexOf('/') + 1);
}
getdfn(str) {
  
  return encodeURIComponent(str.substring(str.lastIndexOf('/') + 1));
}
  decodeURL(img) {
const  fmn = this.getfn(img);
const  fmnd = this.getdfn(img);

return (img as string).replace(fmn, fmnd);
  }
  LoadData() {

    this.LoadAds();

    setInterval(
      () => {
        this.sindex = this.sindex + 1;
        if (this.sindex > 5) {
          this.sindex = 0;
        }
      }, 3000
    );
          }

}
