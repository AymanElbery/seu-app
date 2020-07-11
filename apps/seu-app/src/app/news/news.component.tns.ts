import { Component, OnInit } from '@angular/core';
import { UserService } from '../account/services/user.service';
import { HomeService } from '../rootservices/home.service';
import { ApiUserRoles } from '../shared/models/StaticData/api-user-roles';
import { CMSUserRoles } from '../shared/models/StaticData/cmsuser-roles';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsLen = 0;
  newsLoaded;
  sindex = 1;
  constructor(public userService: UserService, public homeService: HomeService, private routerExtensions: RouterExtensions
    ) { }

  ngOnInit() {
  
    if (!this.userService.logedIn) {
    
      this.loadEmployessNews();
    } else {
      
      this.LoadData();
    }
  }

  LoadNews() {
      if (this.userService.userData.activeRole === ApiUserRoles.Student) {
          return this.loadStudentNews();
        } else if (this.userService.userData.activeRole === ApiUserRoles.Emplpyee) {
          return this.loadEmployessNews();
        } else if (this.userService.userData.activeRole === ApiUserRoles.Instructor) {
          return this.loadStaffNews();
        } else {
          console.log('studentssssssss newwwwwwwwwwwwwwwwwws');

          return this.loadStudentNews();

        }

      }
      private loadStudentNews() {
        return this.homeService.getNews(CMSUserRoles.Student,
          this.userService.userData.level,
          this.userService.userData.coll,
          this.userService.userData.camp).
          then(res => {
            console.log(res);
            this.userService.newsData = (res as any).Data;
            this.newsLen = this.userService.newsData ? this.userService.newsData.length : 0;
            this.homeService.reqData = this.userService.newsData;
            this.newsLoaded = true;
          });
      }

      private loadEmployessNews() {
        return this.homeService.getNews(CMSUserRoles.Employee,
          this.userService.userData.level,
          this.userService.userData.coll,
          this.userService.userData.camp).
          then(res => {
            this.userService.newsData = (res as any).Data;
            this.newsLen = this.userService.newsData ? this.userService.newsData.length : 0;
            this.homeService.reqData = this.userService.newsData;
            this.newsLoaded = true;
          }).catch(res => {alert(res) ; this.newsLoaded = true; } );
      }

      private loadStaffNews() {
        return this.homeService.getNews(CMSUserRoles.Staff,
          this.userService.userData.level,
          this.userService.userData.coll,
          this.userService.userData.camp).
          then(res => {
            this.userService.newsData = (res as any).Data;
            this.newsLen = this.userService.newsData ? this.userService.newsData.length : 0;
            this.homeService.reqData = this.userService.newsData;

            this.newsLoaded = true;
          });
      }

      LoadData() {

        this.LoadNews();

        setInterval(
          () => {
            this.sindex = this.sindex + 1;
            if (this.sindex > 5) {
              this.sindex = 0;
            }
          }, 3000
        );
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

goBack() {
    this.routerExtensions.backToPreviousPage();
  }
}
