import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import { filter } from 'rxjs/operators';
import * as app from 'tns-core-modules/application';
import { GlobalBaseService } from './shared/services/global-base.service';
import { UserService } from './account/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { isAndroid, isIOS } from 'tns-core-modules/ui/frame/frame';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { ListViewEventData } from 'nativescript-ui-listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Downloader } from 'nativescript-downloader';
declare var UIView, NSMutableArray, NSIndexPath;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.tns.html'
})
export class AppComponent implements OnInit {

    // tslint:disable-next-line: variable-name
    private _dataItems: Array<{"title":string,"subTitles":Array<object>}>;
    public clickedArray: Array<{"title":string,"subTitles":Array<object>}>= [{"title":"","subTitles":[{}]}];
    clickedd={};s
    @ViewChild(RadSideDrawerComponent,
        {
            static: false
    }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    // tslint:disable-next-line: variable-name
    private _activatedUrl: string;
    // tslint:disable-next-line: variable-name
    private _sideDrawerTransition: DrawerTransitionBase;
    // tslint:disable-next-line: ban-types
    public userName: String = 'UserName';
    level = '';
    role = '';
    UG_Menu:Array<any> = [];
    GR_Menu:Array<any> = [];
    constructor(    private translate: TranslateService,
                    public userService: UserService,
                    private router: Router, private routerExtensions: RouterExtensions,
                    private  globalService: GlobalBaseService ,
                    private changeDetectionRef: ChangeDetectorRef) {
        // Use the component constructor to inject services.
        translate.addLangs(['ar', 'en']);
        translate.setDefaultLang('ar');
        translate.use('ar');


    }


    // clicked(item) {
    //     if (this.clickedArray.indexOf(item) != -1) {
    //         var index = this.clickedArray.indexOf(item)
    //         this.clickedArray.splice(index, 1)
    //     } else {
    //         this.clickedArray.push(item)
    //     }
    // }


    
    ngOnInit(): void {

        this._activatedUrl = '/home';
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        const draw =   app.getRootView() as RadSideDrawer;
        this.userService.logedIn = false;
     //   draw.drawerLocation = SideDrawerLocation.Right;

        this._dataItems = [{"title":"","subTitles":[{}]}];
        Downloader.init();
        this.UG_Menu = [
        {
            'title':'الشئون الاكاديمية',
            'subTitles': [
                {
                'subTitle':'الحالة الاكاديمية',
                'route':'/academicaff/status'
            },
            {
                'subTitle':'شهادة تعريف',
                'route':'/academicaff/certificate'
            },
            {
                'subTitle':'السجل الاكاديمى',
                'route':'/academicaff/record'
            },
            {
                'subTitle':'افادة خريج',
                'route':'/academicaff/graduationstatment'
            }
        ]
    },
    {
        'title':'الاجراءات الاكاديمية',
        'subTitles': [
            {
            'subTitle':'الانسحاب من الجامعه',
            'route':'/procedures/withdrawuniv'
        },
        {
            'subTitle':'تأجيل الفصل الدراسي',
            'route':'/procedures/postpone'
        },
        {
            'subTitle':'الاعتذار عن فصل دراسي',
            'route':'/procedures/execuse'
        },
        {
            'subTitle':'الاعتذار عن الفصل الصيفي',
            'route':'/procedures/summer'
        },
        {
            'subTitle':'اعادة قيد',
            'route':'/procedures/reenrol'
        },
        {
            'subTitle':'حذف مقرر',
            'route':'/procedures/cancelcourse'
        },
        {
            'subTitle':'معادلة المقررات',
            'route':'/procedures/equalize'
        },
        {
            'subTitle':'معادلة اللغه الانجليزيه',
            'route':'/procedures/eequalize'
        },
        {
            'subTitle':'تغيير التخصص',
            'route':'/procedures/changemajor'
        },
        {
            'subTitle':'تغيير الفرع',
            'route':'/procedures/changerequest'
        },
        {
            'subTitle':'رفع الاعذار للمحاضرات',
            'route':'/procedures/lecexecuse'
        },
        {
            'subTitle':'الاعتراض على نتيجة الاختبار النهائي',
            'route':'/procedures/objectexam'
        },
        {
            'subTitle':'طلب الدراسة كطالب زائر',
            'route':'/procedures/visitorstudent'
        }
    ]
},
{
    'title':'تسجيل المقررات',
    'subTitles': [
        {
        'subTitle':'رغبات التسجيل للمستجدين',
        'route':'/registercourses/registerwishes'
    }
]
},
{
    'title':'الشئون المالية',
    'subTitles': [
        {
        'subTitle':'افادة بالرسوم الدراسيه',
        'route':'/finance/fees'
    },
    {
        'subTitle':'اعفاء من الرسوم الدراسيه',
        'route':'/finance/feesexception'
    }
]
},
{
    'title':'شئون الاختبارات',
    'subTitles': [
        {
        'subTitle':'شهادة حضور اختبارات',
        'route':'/exams/attend'
    },
    {
        'subTitle':'شهادة اثبات حضور اختبارات',
        'route':'/exams/attendapp'
    },
    {
        'subTitle':'رفع الاعذار للاختبارات',
        'route':'/exams/examexcuse'
    }
]
},
{
    'title':'طلبات أخرى',
    'subTitles': [
        {
        'subTitle':'طلب تقرير طبي',
        'route':'/other/medicalreport'
    },
    {
        'subTitle':'طلب البطاقة الجامعية',
        'route':'/other/universitycard'
    },
    {
        'subTitle':'بيانات خريج',
        'route':'/other/studentinfo'
    },
    {
        'subTitle':'طلب التدريب الميداني',
        'route':'/other/training'
    }
]
}
    ];

        this.GR_Menu = [
        {
            'title':'بيانات الطالب',
            'subTitles': [
                {
                'subTitle':'الحالة الاكاديمية',
                'route':'/masteraff/stdata'
            },
            {
                'subTitle':'السجل الاكاديمى',
                'route':'/masteraff/strec'
            }
        ]
    },
    {
        'title':'الطلبات الاكاديمية',
        'subTitles': [
            {
            'subTitle':'طلب الإنسحاب من الجامعة',
            'route':'/academicrequests/withdrawal'
        },
        {
            'subTitle':'طلب تأجيل الدراسة',
            'route':'/academicrequests/studypostpone'
        },
        {
            'subTitle':'طلب حذف المقررات ',
            'route':'/academicrequests/termexecuse'
        },
        {
            'subTitle':'اعادة قيد',
            'route':'/academicrequests/reEnroll'
        },
        {
            'subTitle':'حذف مقرر',
            'route':'/academicrequests/cancelcourse'
        },
        {
            'subTitle':'رفع الاعذار للمحاضرات',
            'route':'/academicrequests/lecturesexecuses'
        },
        {
            'subTitle':'رفع اللأعذار للإختبارات',
            'route':'/academicrequests/examsexecuses'
        },
        {
            'subTitle':'الاعتراض على نتيجة الاختبار النهائي',
            'route':'/academicrequests/objectexam'
        }
    ]
},
{
    'title':' طباعة الشهادات',
    'subTitles': [
        {
        'subTitle':' شهادة التعريف',
        'route':'/cert/id'
    },
    {
        'subTitle':'شهادة حضور اختبارات',
        'route':'/cert/examatt'
    },
    {
        'subTitle':'شهادة اثبات حضور اختبارات',
        'route':'/cert/examattapp'
    }
]
},
{
    'title':'طلبات أخرى',
    'subTitles': [
        {
        'subTitle':'استعلام عن الغياب',
        'route':'/other/absencequery'
    },
    {
        'subTitle':'تغير تخصص',
        'route':'/other/changecourse'
    },   {
        'subTitle':'تغير فرع',
        'route':'/other/changebranch'
    },   {
        'subTitle':'بيانات خريج',
        'route':'/other/graduateprofile'
    },
    {
        'subTitle':'البطاقة الجامعيه',
        'route':'/other/personalid'
    },

]
}
    ];
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        this.userName = this.userService.userData.name_ar;

        this.level = this.userService.userData.student_details.level;
        if (this.level == 'UG') {
            this._dataItems = this.UG_Menu;

        } else if (this.level == 'GR') {
            this._dataItems = this.GR_Menu;

        }
        this.role = this.userService.userData.activeRole;
        // console.log('act' + this.role);
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade'
            }
        });

        const sideDrawer =  app.getRootView() as RadSideDrawer;
        sideDrawer.closeDrawer();

    }

    ngAfterViewInit(): void {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();

        if (isIOS) {
          // This disables the swipe gesture to open menu
          this.drawer.ios.defaultSideDrawer.allowEdgeSwipe = false;

          // You can set other properties the same way, to style your RadSideDrawer for iOS.
          // Such as:
          // ios.defaultSideDrawer.style.dimOpacity;
          // ios.defaultSideDrawer.style.shadowOpacity;
          // ios.defaultSideDrawer.style.shadowRadius;
          // ios.defaultSideDrawer.transitionDuration;
        }
      }

      onLoaded() {
        if (isAndroid) {
          // This disables the swipe gesture to open menu, by setting the treshhold to '0'
          this.drawer.android.setTouchTargetThreshold(0);

        }
      }

      onBSC() {
          this.level = 'UG';
          this.changeDetectionRef.detectChanges();
      }


      onMSC() {
        this.level = 'GR';
        this.changeDetectionRef.detectChanges();
    }

    templateSelector(item: any, index: number, items: any): string {
        if (index == 0) {
            return !item.expanded ? 'expanded' : 'default';
          }
        return item.expanded ? 'expanded' : 'default';
    }

    onItemTap(event: ListViewEventData) {
        // tslint:disable-next-line: one-variable-per-declaration
        const listView = event.object,
            rowIndex = event.index,
            dataItem = event.view.bindingContext;

        dataItem.expanded = !dataItem.expanded;
        if (isIOS) {
          // Uncomment the lines below to avoid default animation
          UIView.animateWithDurationAnimations(0, () => {
              const indexPaths = NSMutableArray.new();
              indexPaths.addObject(NSIndexPath.indexPathForRowInSection(rowIndex, event.groupIndex));
              listView.ios.reloadItemsAtIndexPaths(indexPaths);
           });
        }

        if (isAndroid) {
           listView.androidListView.getAdapter().notifyItemChanged(rowIndex);
        }
    }
    
    logout() {
        const sideDrawer =  app.getRootView() as RadSideDrawer;
        sideDrawer.closeDrawer();
        this.router.navigate(['/login']);
   }
   clickme(item) {
    this.clickedd = item;
  }
  uclickme(item) {
    this.clickedd = {};
  }

}
