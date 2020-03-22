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


        // Request format for Downlaoder
        //      DownloadOptions {
        //     url: string;
        //     query?: Object | string;
        //     headers?: Object;
        //     path?: string;
        //     fileName?: string;
        //   }

        // Prepare the header with token work
        const sid = this.globalService.getSID();
        console.log("siiiiiiiiiiiiiiiiiiiiid",sid)
        const headerHttp = {
            'Content-Type': 'application/json',
            'Session-ID': sid
        };

       /*  const url =  apiUrl;
        let downloadedFilePath;
        if (isAndroid) {
            const permissions = require('nativescript-permissions');
            permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE, 'I need these permissions because I\'m cool')
                .then(() => {
                     downloadedFilePath = fileSystem.path.join(android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).getAbsolutePath(), new Date().toString());
                     console.log('pathhhhhhhhhh', downloadedFilePath);
                     getFile({url, method:'GET', headers: headerHttp}, downloadedFilePath).then(resultFile => {
                        alert({
                            title: 'Saved!',
                            okButtonText: 'OK',
                            message: `File saved here:\n${resultFile.path}`
                        });
                    }, error => {
                        alert({
                            title: 'Error',
                            okButtonText: 'OK',
                            message: `${error}`
                        });
                    });
                });
        }
 */

// tslint:disable-next-line: max-line-length
        const  downloadedFilePath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).getAbsolutePath();
        console.log(downloadedFilePath);
        const zipDownloaderId = this.downloader.createDownload({
            url: apiUrl,
            headers: headerHttp,
            path: downloadedFilePath,
            fileName: 'mypdffile.pdf'
        });
        if (isAndroid) {
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

                    });                 })
                 .catch( () => {
                    console.log('Uh oh, no permissions - plan B time!');
                 }
            );
         //   permissions.requestPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE, 'I need these permissions because I\'m cool')

        }


        return subject.asObservable();
    }



}
