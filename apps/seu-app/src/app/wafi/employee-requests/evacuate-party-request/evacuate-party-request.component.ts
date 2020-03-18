import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-evacuate-party-request',
  templateUrl: './evacuate-party-request.component.html',
  styleUrls: ['./evacuate-party-request.component.css']
})
export class EvacuatePartyRequestComponent implements OnInit {
  AddReqForm: FormGroup;
  submitted = false;
  vacationreqtype: any;
  fileToUpload: File = null;
  disclaimerReasonItems;
 
  
  subscriptionDDLReqtype: Subscription;
  subscriptionvac: Subscription;
  vacationsbal;
  isLoading = true;
  subscriptions;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private toastr: AppToasterService, private empreqservice: EmployeeRequestsService, private fb: FormBuilder, private translate: TranslateService, private router: Router) {
    this.AddReqForm = fb.group({
      'requestType': [this.id],  
      'disclaimerReason': ['', [Validators.required]],     
      'notes': [''],
      'file':['']
    });
  } 


handleFileInput(e) {
  const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  const reader = new FileReader();
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleReaderLoaded(e) {
  const reader = e.target;
  this.AddReqForm.controls['file'].setValue(reader.result);
}

  onFormSubmit(event) {
    this.submitted = true;
    const submitdatavalue = (this.AddReqForm.value);
    if (this.AddReqForm.invalid) {
      return;
    }

    console.log("submit data", submitdatavalue);

    this.empreqservice.submitreqserviceleavededuction(submitdatavalue).subscribe(leavdedcut => {
      //console.log("saved data", leavdedcut);
      if (!leavdedcut['saveRequest']) {
        var error = (leavdedcut as any).data["errorMassege"]   
        console.log("response data",error);
        this.toastr.push([{ type: 'error', 'body': error }]);

      }else {
        this.toastr.push([{ type: 'success', 'body': this.translate.instant('wafi.request_saved')}]);
        this.router.navigate(['/wafi/employee-requests'])
      }
    }
    );

    // this.formSubmitted = true;
    if (this.AddReqForm.invalid) {
      return;
    }
   
  }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number      
      this.FillDDLReqType(this.id);
    });
    //this.FillDDLReqType();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDLReqType(this.id);
    });

  }
  get f() { return this.AddReqForm.controls; }
  ngOnDestroy() {
    if (this.subscriptions)
      this.subscriptions.unsubscribe();
  }

  FillDDLReqType(reqtypeid: any) {
    this.isLoading = true
    this.AddReqForm.controls['requestType'].setValue(this.id);
    this.subscriptionDDLReqtype = this.empreqservice.getDDLVacationType(reqtypeid).subscribe(reqtype => {
      if (reqtype) {
       
        this.disclaimerReasonItems = (reqtype as any).data["disclaimerReasonItems"]; 
        console.log("vac item data", this.vacationreqtype);
        this.isLoading = false
      } else {
      }
    });
  }


}

