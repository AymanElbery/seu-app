import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../account/services/user.service';
import { AppToasterService } from '../../shared/services/app-toaster';
import { MasterGraduatesAddressService } from '../services/graduates-address.service';


@Component({
    selector: 'app-master-graduate-address',
    templateUrl: './graduate-address.component.html',
    styleUrls: ['./graduate-address.component.css']
})
export class MasterGraduateAddressComponent implements OnInit, OnDestroy {

    isLoading = false;
    insertBefore = false;
    addressData;
    isClosed = false;


    cities;
    msgs;
    name;
    ssn;
    sid;
    city_selected;

    addressForm: FormGroup;
    submitted = false;

    constructor(
        private transalte: TranslateService,
        private graduateAddressSer: MasterGraduatesAddressService,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private toastr: AppToasterService
    ) {

    }


    ngOnInit() {
        this.name = this.userService.getActiveRoleDetails().name_ar;
        this.ssn = this.userService.getActiveRoleDetails().ssn;
        this.sid = this.userService.getActiveRoleDetails().id;
        this.getReqs();
        this.addressForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
            city: ['', Validators.required],
            area: ['', Validators.required],
            street: ['', Validators.required],
            building_no: ['', Validators.required],
        });
    }


    getReqs() {
        this.isLoading = true;
        this.graduateAddressSer.getAddress().then(
            (res) => {
                this.addressData = res['data'];
                this.msgs = res['messages'];
                this.cities = this.addressData.cities;
                this.isClosed = !this.addressData.can_add_new_request;
                this.isLoading = false;
                if (typeof this.addressData.user.FULLNAME == "string") {
                    this.insertBefore = true;
                    this.addressForm.controls['email'].setValue(this.addressData.user.EMAIL);
                    this.addressForm.controls['phone'].setValue(this.addressData.user.PHONE);
                    this.addressForm.controls['city'].setValue(this.addressData.user.CITY);
                    this.city_selected = this.addressData.user.CITY;
                    this.addressForm.controls['area'].setValue(this.addressData.user.AREA);
                    this.addressForm.controls['street'].setValue(this.addressData.user.STREET);
                    this.addressForm.controls['building_no'].setValue(this.addressData.user.BUILDING_NO);
                } else {
                    this.insertBefore = false;
                }
            }
        );
    }
    get f() { return this.addressForm.controls; }
    onSubmit() {
        // stop here if form is invalid
        if (this.addressForm.invalid) {
            return;
        }
        this.submitted = true;
        let data = this.addressForm.value;
        this.graduateAddressSer.saveAddress(data).then(
            (res) => {
                this.toastr.push(data.messages);
                if (res['status']) {
                    this.ngOnInit();
                }
            },
            error => {
                this.toastr.tryagain();
            }
        );
    }

    ngOnDestroy() {

    }

}
