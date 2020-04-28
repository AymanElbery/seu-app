import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';

@Component({
  selector: 'app-ug-home',
  templateUrl: './ug-home.component.html',
  styleUrls: ['./ug-home.component.css']
})
export class UGHomeComponent implements OnInit {

  constructor(public appUserService: AdmissionUGService) { }

  ngOnInit() {
  }

}
