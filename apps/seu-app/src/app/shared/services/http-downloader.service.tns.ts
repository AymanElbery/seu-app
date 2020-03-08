import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Downloader, ProgressEventData, DownloadEventData } from 'nativescript-downloader';
import { GlobalBaseService } from './global-base.service';
import { getFile } from 'tns-core-modules/http';
import * as fileSystem from "tns-core-modules/file-system";
import { isAndroid } from "tns-core-modules/platform";

declare var android;


@Injectable({
    providedIn: 'root',
})


export class DataDownLoadService {
    public database: any;
    downloader: Downloader = new Downloader();
    constructor(private globalService: GlobalBaseService) { }


    /**
    * @ngdoc method
    * @name downloadDb
    * @description  download generic method for nay file 
    * @memberof DataDownLoadService
    * @param apiUrl : - https://myserver.com/mypath
    * @param filename :- myfile.zip ...
    * @param downloadlocation : mobile local location
    */
    downloadFile(apiUrl) {
        const subject = new Subject<any>();
    
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
        const headerHttp = {
            "Content-Type": "application/json",
            'Session-ID': sid
        }

        const url =  apiUrl;
        let downloadedFilePath;
        if (isAndroid) {
            const permissions = require("nativescript-permissions");
            permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE, "I need these permissions because I'm cool")
                .then(() => {
                     downloadedFilePath = fileSystem.path.join(android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).getAbsolutePath(),new Date().toString());
                    console.log("pathhhhhhhhhh",downloadedFilePath);
                    getFile({url:url,method:"GET",headers:headerHttp}, downloadedFilePath).then(resultFile => {
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
        /*const zipDownloaderId = this.downloader.createDownload({
            url: url,
            headers: headerHttp,
            path:downloadedFilePath
        });

        this.downloader
            .start(zipDownloaderId, (progressData: ProgressEventData) => {
                console.log(`Progress : ${progressData.value}%`);
                console.log(`Current Size : ${progressData.currentSize}%`);
                console.log(`Total Size : ${progressData.totalSize}%`);
                console.log(`Download Speed in bytes : ${progressData.speed}%`);
            })
            .then((completed: DownloadEventData) => {
                console.log(`zip file saved at : ${completed.path}`);
              
               
                
                subject.next(true);
              
            })
            .catch(error => {
                console.log('downloadDb', error.message);
                subject.error(error);

            });

        return subject.asObservable();*/
    }



}