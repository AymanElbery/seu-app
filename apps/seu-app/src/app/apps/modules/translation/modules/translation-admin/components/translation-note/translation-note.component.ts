import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientAdminRequestsService } from '../../../../services/translation-admin-requests';
import { AppToasterService } from '../../../../../../../shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';
import { TranslationUserService } from '../../../../services/translation-user';


export interface DialogData {
  req: any
}

@Component({
  selector: 'app-translation-note',
  templateUrl: './translation-note.component.html',
  styleUrls: ['./translation-note.component.css']
})

export class TranslationNoteComponent implements OnInit {

  isLoading = false;
  req;

  constructor(
  private fb: FormBuilder, 
  private router: Router,
  private toastr: AppToasterService,
  private translate: TranslateService,
  private userService: TranslationUserService,
  private requestsService: ClientAdminRequestsService,
  public dialogRef: MatDialogRef<TranslationNoteComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.req = data.req;
  }

  ngOnInit() {
    
  }  

  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }
}
