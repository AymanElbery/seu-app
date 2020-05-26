import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRequestsService } from '../../services/employee-requests.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AppToasterService } from '../../../shared/services/app-toaster';

@Component({
  selector: 'app-evacuate-party-request',
  templateUrl: './evacuate-party-request.component.html',
  styleUrls: ['./evacuate-party-request.component.css']
})
export class EvacuatePartyRequestComponent implements OnInit {
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
  constructor(private route: ActivatedRoute,
              private toastr: AppToasterService,
              private empreqservice: EmployeeRequestsService,
              private translate: TranslateService,
              private router: Router) {

  }


  onFormSubmit(event) {
    const submitdatavalue = {};
   

    // console.log("submit data", submitdatavalue);
    this.submitted = true;

    this.empreqservice.submitreqserviceleavededuction(submitdatavalue).subscribe(leavdedcut => {
      //// console.log("saved data", leavdedcut);
      if ((!leavdedcut as any).data['saveRequest']) {
        let error = (leavdedcut as any).data['errorMassege'];
        // console.log("response data",error);
        this.toastr.push([{ type: 'error', body: error }]);
        this.submitted = false;

      } else {
        this.toastr.push([{ type: 'success', body: this.translate.instant('wafi.request_saved') }]);
        this.router.navigate(['/wafi/employee-requests']);
      }
    }
    );

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.FillDDLReqType(this.id);
    });
    // this.FillDDLReqType();
    this.subscriptions = this.translate.onLangChange.subscribe(() => {
      this.FillDDLReqType(this.id);
    });

  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  FillDDLReqType(reqtypeid: any) {
    this.isLoading = true;
  //  this.AddReqForm.controls.requestType.setValue(this.id);
    this.subscriptionDDLReqtype = this.empreqservice.getDDLVacationType(reqtypeid).subscribe(reqtype => {
      if (reqtype) {

        this.disclaimerReasonItems = (reqtype as any).data['disclaimerReasonItems'];
        // console.log("vac item data", this.vacationreqtype);
        this.isLoading = false;
      } else {
      }
    });
  }

  back() {
    this.router.navigate(['/requests/add-new-request']);
  }

}

