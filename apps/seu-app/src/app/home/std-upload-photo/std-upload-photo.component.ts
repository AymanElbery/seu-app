import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UserService } from '../../account/services/user.service';
import { HttpRequestService } from '../../shared/services/http-request.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppToasterService } from '../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-std-upload-photo',
  styleUrls: ['./std-upload-photo.component.css'],
  templateUrl: './std-upload-photo.component.html'
})
export class StdUploadPhotoComponent implements OnInit, OnDestroy {
    allowSelection = true;
    showPhotoName = false;
    showSsnName = false;
    photoName;
    ssnName;
    photoExt;
    ssnExt;
    PHOTO_FILE_PATH;
    SSN_FILE_PATH;
    
    constructor(public userService: UserService, private http: HttpClient, private reqservice: HttpRequestService, private router: Router, private toastr: AppToasterService, public translate: TranslateService,
        public dialogRef: MatDialogRef<StdUploadPhotoComponent>,
    ) {

    }

    ngOnInit() {
        document.getElementById("side-menu").style.display = "none";
    }

    ngOnDestroy() {
        document.getElementById("side-menu").style.display = "block";
    }

    onScroll(e) {
        if (parseInt(e.srcElement.scrollTop + e.srcElement.clientHeight) >= (e.srcElement.scrollHeight - 50)) {
            this.allowSelection = true;
        }
    }

    handlePhotoChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        this.photoName = file.name;
        this.showPhotoName = true;
        this.photoExt = file.name.substring(file.name.lastIndexOf('.') + 1);
        if (!this.validatePhotoFile(file.name, this.photoExt)) {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("upload_photo.wrong_file") }]);
          return false;
        }
        if (!this.validatePhotoFileSize(file.size)) {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("upload_photo.wrong_file_size") }]);
          return false;
        }
        const pattern = /image-*/;
        const reader = new FileReader();
        reader.onload = this._handleReaderLoadedPhoto.bind(this);
        reader.readAsDataURL(file);
    }

    _handleReaderLoadedPhoto(e) {
        const reader = e.target;
        this.PHOTO_FILE_PATH = reader.result;
    }
    
    validatePhotoFileSize(size){
        return (size < 5000000) ? true : false;
    }
    
    validatePhotoFile(name: String, ext) {
        if (['png', 'jpeg', 'jpg'].includes(ext.toLowerCase())) {
            return true;
        }
        return false;
    }


    handleSsnChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        this.ssnName = file.name;
        this.showSsnName = true;
        this.ssnExt = file.name.substring(file.name.lastIndexOf('.') + 1);
        if (!this.validateSsnFile(file.name, this.ssnExt)) {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("upload_photo.wrong_file") }]);
          return false;
        }
        if (!this.validateSsnFileSize(file.size)) {
          this.toastr.push([{ type: 'error', 'body': this.translate.instant("upload_photo.wrong_file_size") }]);
          return false;
        }
        const pattern = /image-*/;
        const reader = new FileReader();
        reader.onload = this._handleReaderLoadedSsn.bind(this);
        reader.readAsDataURL(file);
    }

    _handleReaderLoadedSsn(e) {
        const reader = e.target;
        this.SSN_FILE_PATH = reader.result;
    }
    
    validateSsnFileSize(size){
        return (size < 5000000) ? true : false;
    }
    
    validateSsnFile(name: String, ext) {
        if (['png', 'jpeg', 'jpg', 'pdf'].includes(ext.toLowerCase())) {
            return true;
        }
        return false;
    }

    save(){
        let data = { 
            'STD_ID': this.userService.userData.id ,
            'PHOTO_FILE_PATH': this.PHOTO_FILE_PATH,
            'PHOTO_FILE_EXT': this.photoExt,
            'SSN_FILE_PATH': this.SSN_FILE_PATH,
            'SSN_FILE_EXT': this.ssnExt,
        }
        console.log(data);
        const headers = new HttpHeaders({
            Authorization: this.reqservice.getSSOAuth(),
            'Content-Type': 'application/json',
        });
        this.http.post(environment.baselink + environment.servicesprefix + "/rest/upload_photo/update_std_data", data, { headers }).subscribe(res => {
        if (res['status']) {
            this.userService.userData['UPLOAD_PHOTO_STATUS'] = "Done";
            this.dialogRef.close();
        } else {
            this.toastr.tryagain();
        }
        },
        err => {
            this.toastr.tryagain();
        });
    }
}
