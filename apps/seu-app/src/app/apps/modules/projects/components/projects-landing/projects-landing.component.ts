import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-landing',
  templateUrl: './projects-landing.component.html',
  styleUrls: ['./projects-landing.component.css']
})
export class ProjectsLandingComponent implements OnInit {

  constructor(public appUserService: ProjectsService) { 
  }
  ngOnInit() {
  }

}
