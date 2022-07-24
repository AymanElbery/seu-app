import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation-client-price',
  templateUrl: './translation-price.component.html',
  styleUrls: ['./translation-price.component.css']
})
export class TranslationPriceComponent implements OnInit {

    isLoading = false;
    constructor(
        private router: Router,
        private toastr: AppToasterService,
        private route: ActivatedRoute,
        private translate: TranslateService
    ) {

    }

    ngOnInit() {

    }

}
