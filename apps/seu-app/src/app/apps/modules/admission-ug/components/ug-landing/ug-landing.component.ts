import { Component, OnInit } from '@angular/core';
import { AdmissionUGService } from '../../services/admission-ug.service';

@Component({
  selector: 'app-ug-landing',
  templateUrl: './ug-landing.component.html',
  styleUrls: ['./ug-landing.component.css']
})
export class UGLandingComponent implements OnInit {

  constructor(public appUserService: AdmissionUGService) { }

  ngOnInit() {
  }

}
