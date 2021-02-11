import { Component, OnInit } from '@angular/core';
import { StatementsService } from '../../services/statements.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-statements-list',
  templateUrl: './statements-list.component.html',
  styleUrls: ['./statements-list.component.css']
})
export class StatementsListComponent implements OnInit {
    isLoading = false;
    statements;
    lang;
    baseApiUrl;
    constructor(
        private translate: TranslateService,
        private statementsService: StatementsService, 
        private router: Router, 
        private route: ActivatedRoute,
        private toastr: AppToasterService
    ) { 
        this.lang = this.translate.currentLang;
        this.baseApiUrl = this.statementsService.URL + "/stdservicesapi/";
        this.getStatements();
    }

    ngOnInit() {
        
    }
    getStatements() {
        this.isLoading = true;
        this.statementsService.getStatements().then(
            res => {
                if (res['status']) {
                this.statements = (res as any).data;
            } 
            this.isLoading = false;
            }, err => {
                this.toastr.tryagain();
                this.isLoading = false;
            }
        );
    }
}
