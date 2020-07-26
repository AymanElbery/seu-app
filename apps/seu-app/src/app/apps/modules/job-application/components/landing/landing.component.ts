import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../../services/job-application.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public appUserService: JobApplicationService) { 
  }

  ngOnInit() {
  }

}
