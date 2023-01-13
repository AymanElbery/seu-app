import { Component, OnInit } from '@angular/core';
import { StatementsDiplomeService } from '../../services/statements-diplome.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppToasterService } from 'src/app/shared/services/app-toaster';

@Component({
  selector: 'app-statements-diplome-list',
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
        private statementsService: StatementsDiplomeService, 
        private router: Router, 
        private route: ActivatedRoute,
        private toastr: AppToasterService
    ) { 
        this.lang = this.translate.currentLang;
        this.baseApiUrl = this.statementsService.getDoaunloadURL()+'/';
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
