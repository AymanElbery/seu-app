import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../translation-admin-add-users/translation-admin-add-users.component';
import { AppToasterService } from '../../../../../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-translation-complete-form',
  templateUrl: './translation-complete-form.component.html',
  styleUrls: ['./translation-complete-form.component.css']
})
export class TranslationCompleteFormComponent implements OnInit {


  isLoading = false;
  submitted = false;

  fileName;
  FILE_PATH;
  ext;
  showFileName = false;


  constructor(private fb: FormBuilder, private requestsService: ClientAdminRequestsService,
    private route:ActivatedRoute,    private router: Router, public dialogRef: MatDialogRef<TranslationCompleteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private toastr: AppToasterService,
    private translate: TranslateService
  ) {

  }
  request;
  ngOnInit() {
    this.request = this.data['req'];
    console.log("this.request",this.request);
  }
  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!this.validateFile(file.name, file.name.substring(file.name.lastIndexOf('.') + 1))) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("new_request_page.wrong_file") }]);
      this.showFileName = false;
      this.fileName = this.ext = '';

      return false;
    }
    if (!this.validateFileSize(file.size)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("new_request_page.wrong_file_size") }]);
      this.showFileName = false;
      this.fileName = this.ext = '';
      return false;
    }
    this.fileName = file.name;
    this.showFileName = true;
    this.ext = file.name.substring(file.name.lastIndexOf('.') + 1);
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.FILE_PATH = reader.result;
  }

  validateFileSize(size) {
    return (size < 5000000) ? true : false;
  }

  validateFile(name: String, ext) {
    if (['pdf', 'xls', 'xlsx', 'doc', 'docx', 'pptx', 'pptm', 'ppt', 'png', 'jpeg', 'jpg'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  onSubmit() {
    if(!this.FILE_PATH){
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("new_request_page.file_required") }]);
      return false;
    }
    this.submitted = true;
    this.isLoading = true;
    let data = {
      'FILE': this.FILE_PATH,
      'FILE_EXT': this.ext,
      'REQ_ID': this.request['REQ_ID']
    }
    this.requestsService.reviewRequest(data).subscribe((response) => {
      this.toastr.push([{ type: 'success', 'body': this.translate.instant('new_request_page.request_saved') }]);
      this.isLoading = false;
      this.closeDiag(true);
      this.router.navigate(['../my-requests'], { relativeTo: this.route })
    }, err => {
      this.requestsService.tryagain();
      this.isLoading = false;
    });
  }
}

