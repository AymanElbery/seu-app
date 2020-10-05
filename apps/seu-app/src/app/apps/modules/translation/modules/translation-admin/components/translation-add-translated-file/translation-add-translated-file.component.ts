import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../../../../services/translation-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { AdminUsersService } from '../../../../services/translation-admin-users';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { TranslationUserService } from '../../../../services/translation-user';


export interface DialogData {
  reqId: number
}

@Component({
  selector: 'app-translation-add-translated-file',
  templateUrl: './translation-add-translated-file.component.html',
  styleUrls: ['./translation-add-translated-file.component.css']
})

export class TranslationAddTranslatedFileComponent implements OnInit {

  isLoading = false;
  addFileForm: FormGroup;
  submitted= false;
  reqId;
  fileName;
  FILE_PATH;
  ext;
  showFileName = false;

  constructor(
  private fb: FormBuilder, 
  private router: Router,
  private toastr: AppToasterService,
  private translate: TranslateService,
  private userService: TranslationUserService,
  private requestsService: ClientAdminRequestsService,
  public dialogRef: MatDialogRef<TranslationAddTranslatedFileComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.reqId = data;
    this.addFileForm = this.fb.group({
    });
  }

  ngOnInit() {
    
  }  

  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.fileName = file.name;
    this.showFileName = true;
    this.ext = file.name.substring(file.name.lastIndexOf('.') + 1);
    if (!this.validateFile(file.name, this.ext)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("new_request_page.wrong_file") }]);
      return false;
    }
    if (!this.validateFileSize(file.size)) {
      this.toastr.push([{ type: 'error', 'body': this.translate.instant("new_request_page.wrong_file_size") }]);
      return false;
    }
    const pattern = /image-*/;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    this.FILE_PATH = reader.result;
  }

  validateFileSize(size){
    return (size < 5000000) ? true : false;
  }

  validateFile(name: String, ext) {
    if (['pdf', 'xls', 'xlsx', 'doc', 'docx', 'pptx', 'pptm', 'ppt', 'png', 'jpeg', 'jpg'].includes(ext.toLowerCase())) {
      return true;
    }
    return false;
  }

  onSubmit(){
    this.submitted = true;
    let data = this.addFileForm.value;
    data['REQ_ID'] = this.reqId;
    data['FILE_PATH'] = this.FILE_PATH;
    data['FILE_EXT'] = this.ext;
    data['TRANSLATION_USER_ID'] = this.userService.user['USER_ID'];
    this.requestsService.addTranslatedFile(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.requestsService.tryagain();
    });
  }
}
