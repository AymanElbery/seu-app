import { Component, OnInit } from '@angular/core';

import { AdmissionGRService } from '../../services/admission-gr.service';

@Component({
  selector: 'app-gr-home',
  templateUrl: './gr-home.component.html',
  styleUrls: ['./gr-home.component.css']
})
export class GRHomeComponent implements OnInit {

  constructor(public appUserService: AdmissionGRService) { }

  ngOnInit() {
  }

}
