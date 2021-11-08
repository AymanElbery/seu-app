import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {

  isLoading = false;
  have_docs_permession = false;
  have_reenroll_permession = false;
  constructor(private stdservice: StudentService) { }

  ngOnInit() {
    this.have_docs_permession = this.stdservice.have_docs_permession;
    this.have_reenroll_permession = this.stdservice.have_reenroll_permession;
    this.stdservice.userLoadedObservable.subscribe(() => {
      this.have_docs_permession = this.stdservice.have_docs_permession;
      this.have_reenroll_permession = this.stdservice.have_reenroll_permession;
    });
  }

}
