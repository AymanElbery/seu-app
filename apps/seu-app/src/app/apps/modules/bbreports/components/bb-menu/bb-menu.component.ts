import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BBReportService } from '../../services/bb.report.service';

@Component({
  selector: 'app-bb-menu',
  templateUrl: './bb-menu.component.html',
  styleUrls: ['./bb-menu.component.css']
})
export class BbMenuComponent implements OnInit {

  reports = [];
  constructor(private bb: BBReportService, private router: Router) { }

  ngOnInit() {
    this.reports = this.bb.reports();
  }

  report(report) {
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    this.router.navigate(['/view/', { code: report['code'] }]);
  }

}
