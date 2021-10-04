import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { Teaching_loadService } from '../../../services/teaching_load.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dean-reject-reason',
  templateUrl: './reject_dialogue.component.html',
  styleUrls: ['./reject_dialogue.component.css']
})
export class RejectDeanReasonComponent implements OnInit {

  isLoading = false;
  submitted = false;
  RejectForm: FormGroup;
  id;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<RejectDeanReasonComponent>,
    private fb: FormBuilder,
    private teaching_loadService: Teaching_loadService,
    private toastr: AppToasterService,
    private router: Router,
    private translate: TranslateService,
    private route: ActivatedRoute,
  ) {
      this.id = this.data.id;
    this.RejectForm = this.fb.group({
        'reason': ['', [Validators.required]],
    });
  }
  ngOnInit() {
  }

  onSubmit(){
    if (this.RejectForm.invalid) {
        return;
    }
    let data = this.RejectForm.value;
    let url = "dean/update_status";
    data.id = this.id;
    data.status = 0;
    this.submitted = true;
    this.teaching_loadService.post(url, data)
    .subscribe(
      (response: any) => {
        if (response) {
          this.toastr.messagesdis(this.translate.instant('teaching_load.' + response['res_code']));
          this.closeDiag();
          this.isLoading = false;
          this.submitted = false;
        }
      },
      error => {
      }
    )
  }

  closeDiag() {
    this.dialogRef.close(true);
  }

}
