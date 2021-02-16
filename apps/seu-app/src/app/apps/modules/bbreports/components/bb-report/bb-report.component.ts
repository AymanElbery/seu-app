import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BBReportService } from '../../services/bb.report.service';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-bb-report',
  templateUrl: './bb-report.component.html',
  styleUrls: ['./bb-report.component.css']
})
export class BbReportComponent implements OnInit {
  isLoading = false;
  exporting = false;
  report: any = { code: '', name: '' };
  report_code = '';
  colleges = [];
  depts = [];
  selectdepts = [];
  columnDefs = [];
  rowData = [];

  private gridApi;
  private gridColumnApi;


  defaultColDef = {
    flex: 1,
    minWidth: 150,
    editable: true,
    suppressSizeToFit: true,
    resizable: true
  };

  showGrid = false;

  submitted = false;
  form: FormGroup;


  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private bbservice: BBReportService) {
    this.datePickerConfig = { dateInputFormat: 'DD-MM-YYYY', showWeekNumbers: false };
  }


  ngOnInit() {
    this.form = this.fb.group({
      'report': ['', [Validators.required]],
      'college': ['', [Validators.required]],
      'dept': [''],
      'start_date': [''],
      'end_date': [''],
    });

    this.route.params.subscribe(() => {
      this.report_code = this.route.snapshot.paramMap['params']['code'];
      this.reset();
    });

    this.colleges = this.bbservice.collges();
    this.depts = this.bbservice.depts();
    if (this.colleges.length == 0) {
      this.form.controls['college'].setValidators(null);
      this.form.controls['dept'].setValidators([Validators.required]);
      this.selectdepts = this.depts;
    }
    this.form.controls['college'].valueChanges.subscribe(() => {
      const coll_code = this.form.controls['college'].value;
      this.selectdepts = this.depts.filter(item => item['coll'] == coll_code);
    });
  }

  reset() {
    const code = this.report_code;
    this.report = this.bbservice.get_report_by_code(code);
    if (!this.report) {
      this.router.navigate(['../../'], { relativeTo: this.route })
    }
    this.form.controls['report'].setValue(code);
    this.rowData = [];
    this.columnDefs = [];
    this.showGrid = false;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.resizeGrid();
  }

  resizeGrid() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, false);

  }


  fetch() {
    if (!this.form.valid) {
      return false;
    }
    this.isLoading = true;
    this.showGrid = false;
    this.bbservice.report(this.form.value).subscribe((response) => {
      if (response['status']) {
        this.rowData = response['data']['report'];
        this.columnDefs = response['data']['columns'];
        this.showGrid = true;
      } else {
        this.rowData = [];
        this.columnDefs = [];
        this.showGrid = false;
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.showGrid = false;
    });
    //this.course.START_DATE = (this.course.START_DATE) ? this.datePipe.transform(this.course.START_DATE, 'MM/dd/yyyy') : "";
  }


  exportToExcel() {
    this.exporting = true;
    const fileName = this.report['name'] + ".xlsx";
    let headers = {};
    this.columnDefs.forEach(item => {
      headers[item['field']] = item['headerName'];
    })
    let data = JSON.parse(JSON.stringify((this.rowData)));
    data.unshift(headers);
    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(data, { skipHeader: true });
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, fileName);
    this.exporting = false;
  }

}
