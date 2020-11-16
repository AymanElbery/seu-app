import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BBReportService } from '../../services/bb.report.service';

@Component({
  selector: 'app-bb-report',
  templateUrl: './bb-report.component.html',
  styleUrls: ['./bb-report.component.css']
})
export class BbReportComponent implements OnInit {
  isLoading = false;
  report: any = { code: '', name: '' };
  report_code = '';
  colleges = [];
  columnDefs = [];
  rowData = [];

  defaultColDef = {
    flex: 1,
    minWidth: 150,
    editable: true,
  };

  showGrid = false;

  submitted = false;
  form: FormGroup;


  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private bbservice: BBReportService) {
    route.params.subscribe(() => {
      this.report_code = this.route.snapshot.paramMap['params']['code'];
      this.reset();
    });
    this.form = this.fb.group({
      'college': ['', [Validators.required]],
      'start_date': ['', [Validators.required]],
      'end_date': ['', [Validators.required]],
    });
    this.datePickerConfig = { dateInputFormat: 'DD-MM-YYYY', showWeekNumbers: false };
    this.colleges = this.bbservice.collges();
  }


  ngOnInit() {
    this.bbservice.report({}).subscribe((response) => {
      this.rowData = response['data']['report'];
    });
  }

  reset() {
    const code = this.report_code;
    this.report = this.bbservice.get_report_by_code(code);
    if (!this.report) {
      this.router.navigate(['../../'], { relativeTo: this.route })
    }
    this.rowData = [];
    this.columnDefs = [];
    this.showGrid = false;
  }

  onGridReady(params) {
  }


  fetch() {
    //          this.course.START_DATE = (this.course.START_DATE) ? this.datePipe.transform(this.course.START_DATE, 'MM/dd/yyyy') : "";

  }

}
