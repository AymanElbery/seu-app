import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrintService } from '../shared/services/print.service';
import { HomeService } from '../rootservices/home.service';
import { GlobalService } from '../shared/services/global.service';
import { UserService } from '../account/services/user.service';
import { ApiUserRoles } from '../shared/models/StaticData/api-user-roles';
import { CMSUserRoles } from '../shared/models/StaticData/cmsuser-roles';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

// declare function LoadCrsAds(): any;
// declare function OWLmoveDotsToNav(): any;
// declare function LoadCrsNews(): any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  SlideOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    autoplayHoverPause: true,
    navText: [
      '<i class="ik ik-chevron-right"></i>',
      '<i class="ik ik-chevron-left"></i>'
    ],
    // margin: 10,
    // animateOut: "slideOutRight",
    // animateIn: "slideInLeft",
    rtl: true
  };
  resumeAdmins;
  traficUsers;
  isResumeUser = false;
  isTraficUser = false;
  // CarouselOptions = { items: 3, dots: true, nav: true };
  jobs_gate_url = '';
  hasNoRole = false;

  constructor(
    public printService: PrintService,
    public homeService: HomeService,
    public userService: UserService,
    public globalService: GlobalService,
    private router: Router,
    private translate: TranslateService,
    private sanitized: DomSanitizer
  ) {
    this.jobs_gate_url = 'https://jobs.seu.edu.sa/sso_auth/' + this.globalService.getSID();
    // tslint:disable-next-line: only-arrow-functions
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe(event => {
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
  sysNotes;
  subscriptions;
  ngOnInit() {
    this.userService.userDataSubject.subscribe(res => {
      if (res) {
        this.LoadData();
      }
    });
    this.getSysMessage();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      if (this.userService.userDataLoaded) {
        this.LoadData();
        this.getSysMessage();
      }
    });
  }
  getSysMessage() {
    this.translate.get('general.mysystemNotes').subscribe(value => {
      this.sysNotes = this.sanitized.bypassSecurityTrustHtml(value);
    })
  }

  OWLmoveDotsToNav() {
    const owlCarousel = document.getElementsByClassName('owl-carousel');
    [].forEach.call(owlCarousel, (el, index) => {
      const dots = el.querySelector('.owl-dots');
      const nav = el.querySelector('.owl-nav');
      nav.appendChild(dots);
    });
  }

  LoadNews() {
    if (this.userService.userData.activeRole == ApiUserRoles.Student || this.userService.userData.activeRole == ApiUserRoles.Emplpyee || this.userService.userData.activeRole == ApiUserRoles.Instructor) {
      this.hasNoRole = false;
    } else {
      this.hasNoRole = true;
    }
    // console.log('LoadNews');
    // console.log('user is ' + this.userService.userData);
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
    // console.log('loadStudentNews :' + CMSUserRoles.Student);
    return this.homeService
      .getNews(
        CMSUserRoles.Student,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        this.userService.newsData = (res as any).Data;
        this.newsLen = this.userService.newsData
          ? this.userService.newsData.length
          : 0;
        this.homeService.reqData = this.userService.newsData;
        // LoadCrsNews();
        this.newsLoaded = true;
        // this.OWLmoveDotsToNav();
      });
  }
  private loadEmployessNews() {
    // console.log('loadEmployessNews :' + CMSUserRoles.Employee);

    return this.homeService
      .getNews(
        CMSUserRoles.Employee,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        // console.log(res);
        this.userService.newsData = (res as any).Data;
        // console.log(this.userService.newsData.length);
        this.newsLen = this.userService.newsData
          ? this.userService.newsData.length
          : 0;
        // console.log(this.userService.newsData);
        this.homeService.reqData = this.userService.newsData;
        // LoadCrsNews();
        this.newsLoaded = true;
        // this.OWLmoveDotsToNav();
      });
  }

  private loadStaffNews() {
    return this.homeService
      .getNews(
        CMSUserRoles.Staff,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        // console.log(res);
        this.userService.newsData = (res as any).Data;
        // console.log(this.userService.newsData.length);
        this.newsLen = this.userService.newsData
          ? this.userService.newsData.length
          : 0;
        // console.log(this.userService.newsData);
        this.homeService.reqData = this.userService.newsData;
        // LoadCrsNews();
        this.newsLoaded = true;
        // this.OWLmoveDotsToNav();
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
    return this.homeService
      .getEvents(
        CMSUserRoles.Student,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        // console.log(res);
        this.userService.eventsData = (res as any).Data;
        // console.log(this.userService.eventsData.length);
        // console.log(this.userService.eventsData);
        this.eventsLoaded = true;
      });
  }

  private loadResumeAdminUsers(){
    this.userService.getResumeAdminUsers().subscribe((res: any) => {
      if (res) {
        this.resumeAdmins = res.data;
        for (let i = 0; i < this.resumeAdmins.length; i++) {
          if (this.resumeAdmins[i].WORK_EMAIL.toLowerCase() == this.userService.userData.email.toLowerCase()) {
            this.isResumeUser = true;
          }
        }
      }
    });
  }

  private loadTraficUsers(){
    this.userService.getTraficUsers().subscribe((res: any) => {
      if (res) {
        this.traficUsers = res.data;
        for (let i = 0; i < this.traficUsers.length; i++) {
          let email = this.traficUsers[i].U_EMAIL + "@seu.edu.sa";
          if (email == this.userService.userData.email) {
            this.isTraficUser = true;
          }
        }
      }
    });
  }

  private loadEmployeesEvents() {
    return this.homeService
      .getEvents(
        CMSUserRoles.Employee,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        // console.log(res);
        this.userService.eventsData = (res as any).Data;
        // console.log(this.userService.eventsData.length);
        // console.log(this.userService.eventsData);
        this.eventsLoaded = true;
      });
  }
  private loadStaffEvents() {
    return this.homeService
      .getEvents(
        CMSUserRoles.Staff,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        // console.log(res);
        this.userService.eventsData = (res as any).Data;
        // console.log(this.userService.eventsData.length);
        // console.log(this.userService.eventsData);
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
    return this.homeService
      .getAds(
        CMSUserRoles.Student,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        // console.log(res);
        this.userService.adsData = (res as any).Data;
        // console.log(this.userService.adsData.length);
        this.newsLen = this.userService.adsData.length;
        // console.log(this.userService.adsData);
        // LoadCrsAds();
        this.adsLoaded = true;
      });
  }
  private loadEmployeesAds() {
    return this.homeService
      .getAds(
        CMSUserRoles.Employee,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        // console.log(res);
        this.userService.adsData = (res as any).Data;
        // console.log(this.userService.adsData.length);
        this.newsLen = this.userService.adsData.length;
        // console.log(this.userService.adsData);
        // LoadCrsAds();
        this.adsLoaded = true;
      });
  }
  private loadStuffAds() {
    return this.homeService
      .getAds(
        CMSUserRoles.Staff,
        this.userService.userData.level,
        this.userService.userData.coll,
        this.userService.userData.camp
      )
      .then(res => {
        // console.log(res);
        this.userService.adsData = (res as any).Data;
        // console.log(this.userService.adsData.length);
        this.newsLen = this.userService.adsData.length;
        // console.log(this.userService.adsData);
        // LoadCrsAds();
        this.adsLoaded = true;
      });
  }

  studentType = '';
  LoadData() {
    this.loadResumeAdminUsers();
    this.loadTraficUsers();
    this.studentType = this.userService.userData.level;
    this.LoadNews()
      .then(() => this.LoadAds())
      .then(() => this.LoadEvents())
      .then(() => this.OWLmoveDotsToNav());
  }


  onPrintFile() {
    const paramsData = ['101', '102'];
    this.printService.printDocument('print-file', paramsData);
  }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }
}
