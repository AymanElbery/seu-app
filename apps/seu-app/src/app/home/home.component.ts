import { Component, OnInit } from '@angular/core';
import { PrintService } from '../shared/services/print.service';
import { HomeService } from '../rootservices/home.service';
import { UserService } from '../account/services/user.service';
import { ApiUserRoles } from '../shared/models/StaticData/api-user-roles';
import { CMSUserRoles } from '../shared/models/StaticData/cmsuser-roles';
import { NavigationEnd, Router } from '@angular/router';

declare function LoadCrsAds(): any;
declare function LoadCrsNews(): any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public printService: PrintService, public homeService: HomeService, public userService: UserService, private router: Router) {
    // tslint:disable-next-line: only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //     // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }
  // newsData;
  // eventsData;
  // adsData;
  newsLen = 0;
  newsLoaded;
  adsLoaded;
  eventsLoaded;
  mySubscription: any;


  ngOnInit() {
    //console.log('home');
    //console.log(this.userService.userData);
    //console.log('intial');
    this.userService.userDataSubject.subscribe(res => {
      if (res)
        this.LoadData();
    });

  }

  LoadNews() {
    //console.log('LoadNews');
    //console.log('user is ' + this.userService.userData);
    // tslint:disable-next-line: triple-equals
    if (this.userService.userData.activeRole === ApiUserRoles.Student) {
      return this.loadStudentNews();
    } else if (this.userService.userData.activeRole === ApiUserRoles.Emplpyee) {
      return this.loadEmployessNews();
    } else {
      return this.loadStaffNews();
    }

  }
  private loadStudentNews() {
    //console.log('loadStudentNews :' + CMSUserRoles.Student);
    return this.homeService.getNews(CMSUserRoles.Student,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        //console.log(res);
        this.userService.newsData = (res as any).Data;
        //console.log(this.userService.newsData.length);
        this.newsLen = this.userService.newsData ? this.userService.newsData.length : 0;
        //console.log(this.userService.newsData);
        this.homeService.reqData = this.userService.newsData;
        LoadCrsNews();
        this.newsLoaded = true;
      });
  }
  private loadEmployessNews() {
    //console.log('loadEmployessNews :' + CMSUserRoles.Employee);

    return this.homeService.getNews(CMSUserRoles.Employee,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        //console.log(res);
        this.userService.newsData = (res as any).Data;
        //console.log(this.userService.newsData.length);
        this.newsLen = this.userService.newsData ? this.userService.newsData.length : 0;
        //console.log(this.userService.newsData);
        this.homeService.reqData = this.userService.newsData;
        LoadCrsNews();
        this.newsLoaded = true;
      });
  }

  private loadStaffNews() {
    return this.homeService.getNews(CMSUserRoles.Staff,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        //console.log(res);
        this.userService.newsData = (res as any).Data;
        //console.log(this.userService.newsData.length);
        this.newsLen = this.userService.newsData ? this.userService.newsData.length : 0;
        //console.log(this.userService.newsData);
        this.homeService.reqData = this.userService.newsData;
        LoadCrsNews();
        this.newsLoaded = true;
      });
  }
  LoadEvents() {
    if (this.userService.userData.activeRole === ApiUserRoles.Student) {
      return this.loadStudentsEvents();
    } else if (this.userService.userData.activeRole === ApiUserRoles.Emplpyee) {
      return this.loadEmployeesEvents();
    } else {
      return this.loadStaffEvents();
    }
  }

  private loadStudentsEvents() {
    return this.homeService.getEvents(CMSUserRoles.Student,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        //console.log(res);
        this.userService.eventsData = (res as any).Data;
        //console.log(this.userService.eventsData.length);
        //console.log(this.userService.eventsData);
        this.eventsLoaded = true;
      });
  }


  private loadEmployeesEvents() {
    return this.homeService.getEvents(CMSUserRoles.Employee,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        //console.log(res);
        this.userService.eventsData = (res as any).Data;
        //console.log(this.userService.eventsData.length);
        //console.log(this.userService.eventsData);
        this.eventsLoaded = true;
      });
  }
  private loadStaffEvents() {
    return this.homeService.getEvents(CMSUserRoles.Staff,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        //console.log(res);
        this.userService.eventsData = (res as any).Data;
        //console.log(this.userService.eventsData.length);
        //console.log(this.userService.eventsData);
        this.eventsLoaded = true;
      });
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
        //console.log(res);
        this.userService.adsData = (res as any).Data;
        //console.log(this.userService.adsData.length);
        this.newsLen = this.userService.adsData.length;
        //console.log(this.userService.adsData);
        LoadCrsAds();
        this.adsLoaded = true;
      });
  }
  private loadEmployeesAds() {
    return this.homeService.getAds(CMSUserRoles.Employee,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        //console.log(res);
        this.userService.adsData = (res as any).Data;
        //console.log(this.userService.adsData.length);
        this.newsLen = this.userService.adsData.length;
        //console.log(this.userService.adsData);
        LoadCrsAds();
        this.adsLoaded = true;
      });
  }
  private loadStuffAds() {
    return this.homeService.getAds(CMSUserRoles.Staff,
      this.userService.userData.level,
      this.userService.userData.coll,
      this.userService.userData.camp).
      then(res => {
        //console.log(res);
        this.userService.adsData = (res as any).Data;
        //console.log(this.userService.adsData.length);
        this.newsLen = this.userService.adsData.length;
        //console.log(this.userService.adsData);
        LoadCrsAds();
        this.adsLoaded = true;
      });
  }

  LoadData() {
    this.LoadNews();
    this.LoadAds();
    this.LoadEvents();

  }

  onPrintFile() {
    alert('start');
    const paramsData = ['101', '102'];
    alert('1');
    this.printService
      .printDocument('print-file', paramsData);
  }
}
