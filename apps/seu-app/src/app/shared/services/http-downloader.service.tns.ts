import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Downloader, ProgressEventData, DownloadEventData } from 'nativescript-downloader';
import { GlobalBaseService } from './global-base.service';
import { getFile } from 'tns-core-modules/http';
import * as fileSystem from 'tns-core-modules/file-system';
import { isAndroid } from 'tns-core-modules/platform';
import * as utils from 'tns-core-modules/utils/utils';

declare var android;


@Injectable({
    providedIn: 'root',
})


export class DataDownLoadService {
    public database: any;
    downloader: Downloader = new Downloader();
     csize = new Subject<any>();
    constructor(private globalService: GlobalBaseService) { }
    

    /**
    // tslint:disable-next-line: jsdoc-format
    * @ngdoc method
    * @name downloadDb
    * @description  download generic method for nay file
    // tslint:disable-next-line: no-redundant-jsdoc
    * @memberof DataDownLoadService
    * @param apiUrl : - https://myserver.com/mypath
    * @param filename :- myfile.zip ...
    * @param downloadlocation : mobile local location
    */
    downloadFile(apiUrl) {
        const subject = new Subject<any>();
        this.csize.next(0);

        const sid = this.globalService.getSID();
        const headerHttp = {
            'Content-Type': 'application/json',
            'Session-ID': sid
        };
   
        if (isAndroid) {
            const  downloadedFilePath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).getAbsolutePath();
            console.log(downloadedFilePath);
            const zipDownloaderId = this.downloader.createDownload({
                url: apiUrl,
                headers: headerHttp,
                path: downloadedFilePath,
                fileName: 'mypdffile.pdf'
            });
            console.log('android');
            const permissions = require('nativescript-permissions');
            // tslint:disable-next-line: max-line-length
            permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE, 'I need these permissions because I\'m cool').then(
                () => {
                    console.log("permissions")
                    this.downloader
                    .start(zipDownloaderId, (progressData: ProgressEventData) => {
                        console.log(`Progress : ${progressData.value}%`);
                        console.log(`Current Size : ${progressData.currentSize}%`);
                        console.log(`Total Size : ${progressData.totalSize}%`);
                        console.log(`Download Speed in bytes : ${progressData.speed}%`);
                        this.csize.next(progressData.value);
                    })
                    .then((completed: DownloadEventData) => {
                        console.log(`zip file saved at : ${completed.path}`);
                        utils.openFile(completed.path);
                        subject.next(true);

                    },
                    err=>{console.log('errrrrrrrrrrrrrrrrrrrrrrrrrr',err)});
                                 })
                 .catch( () => {
                    console.log('Uh oh, no permissions - plan B time!');
                 }
            );
         //   permissions.requestPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE, 'I need these permissions because I\'m cool')

        }else{
            const zipDownloaderId = this.downloader.createDownload({
                url: apiUrl,
                headers: headerHttp,
                path: fileSystem.knownFolders.ios.library().path,
                fileName: 'mypdffile.pdf'
            });

            this.downloader
            .start(zipDownloaderId, (progressData: ProgressEventData) => {
                this.csize.next(progressData.value);
            })
            .then((completed: DownloadEventData) => {
                console.log(`zip file saved at : ${completed.path}`);
                utils.openFile(completed.path);
                subject.next(true);

            },
            err=>{console.log('errrrrrrrrrrrrrrrrrrrrrrrrrr',err)});
        }


        return subject.asObservable();
    }



}
