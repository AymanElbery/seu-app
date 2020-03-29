import { Component, OnInit } from '@angular/core';
import { AcademicRecordService } from '../services/academic-record.service';
import { RadSideDrawer, SideDrawerLocation } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { ListViewEventData } from 'nativescript-ui-listview';
import { isIOS, isAndroid } from 'tns-core-modules/ui/page/page';
import * as utils from 'tns-core-modules/utils/utils';
import { DataDownLoadService } from '../../shared/services/http-downloader.service.tns';
import { Downloader } from 'nativescript-downloader';
import { TranslateService } from '@ngx-translate/core';
// tslint:disable-next-line: one-variable-per-declaration
declare var UIView, NSMutableArray, NSIndexPath;
@Component({
  selector: 'app-academic-record',
  templateUrl: './academic-record.component.html',
  styleUrls: ['./academic-record.component.scss']
})
export class AcademicRecordComponent implements OnInit {
  constructor(private academicService: AcademicRecordService,
    private downloader: DataDownLoadService,
    private transalte: TranslateService) { }
  recoredData={
    "coll":"",
    "major":"",
    "std_id":"",
    "ssn":"",
    "grade":"",
    "status":"",
    "terms":[],
  };
  arabicPrint: string;
  EngPrint: string;
  isLoading = false;
  printAR = '';
  printEN = '';
  isDownLoaded = false;

  templateSelector(item: any, index: number, items: any): string {
    if(index==0){      
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

  ngOnInit() {
    Downloader.init();
    this.transalte.get('general.ar_language').subscribe(res => {
      this.printAR = res;
    }
    );
    this.transalte.get('general.en_language').subscribe(res => {
      this.printEN = res;
    });
    this.isLoading = true;
    this.academicService.getRecord().then(
      res => {
    this.recoredData =    (res as any).data;
    this.isLoading = false;
      }
    );
    this.arabicPrint =   this.academicService.Download();
    this.EngPrint = this.academicService.DownloadEng();
  }

  onArabicPrint() {
    this.downloader.downloadFile(this.arabicPrint);
    console.log('downloiad');
    this.printAR = '1%';
    this.downloader.csize.subscribe(x => {
      this.printAR = x;
      if (x == '100') {
        this.isDownLoaded = true;
        this.transalte.get('general.ar_print').subscribe(res => {
            this.printAR = res;
          }
          );

      }
    });
    }
  onEnglishPrint() {
    this.downloader.downloadFile(this.EngPrint);
    this.printEN = '1%';
    this.downloader.csize.subscribe(x => {
      this.printEN = x;
      if (x == '100') {
        this.isDownLoaded = true;
        this.transalte.get('general.en_print').subscribe(res => {
            this.printEN = res;
          }
          );

      }
    });
  }
  }

