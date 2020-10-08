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
  selector: 'app-translation-review-form',
  templateUrl: './translation-review-form.component.html',
  styleUrls: ['./translation-review-form.component.css']
})

export class TranslationReviewFormComponent implements OnInit {

  isLoading = false;
  addReviewForm: FormGroup;
  submitted= false;
  req;
  showNote = false;

  constructor(
  private fb: FormBuilder, 
  private router: Router,
  private toastr: AppToasterService,
  private translate: TranslateService,
  private userService: TranslationUserService,
  private requestsService: ClientAdminRequestsService,
  public dialogRef: MatDialogRef<TranslationReviewFormComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.req = data.req;
    console.log(this.req);
    this.addReviewForm = this.fb.group({
      STATUS: ["", [Validators.required]],
      REVIEWING_NOTE: [""],
    });
  }

  ngOnInit() {
    
  }  

  closeDiag(refresh = false) {
    this.dialogRef.close(refresh);
  }

  onChange(status) {
    this.showNote = (status == 'completed') ? false : true;
  }

  onSubmit(){
    if (this.addReviewForm.invalid) {
      return;
    }
    this.submitted = true;
    let data = this.addReviewForm.value;
    data['REQ_ID'] = this.req.REQ_ID;
    this.requestsService.addReview(data).subscribe((response) => {
      this.closeDiag(true);
    },err=>{
      this.requestsService.tryagain();
    });
  }
}
