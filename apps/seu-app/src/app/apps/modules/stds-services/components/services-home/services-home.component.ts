import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-services-home',
  templateUrl: './services-home.component.html',
  styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent implements OnInit {

  isLoading = false;
  is_ug = false;
  constructor(private stdservice: StudentService) { }

  ngOnInit() {
    this.is_ug = this.stdservice.is_ug;
    this.stdservice.userLoadedObservable.subscribe(() => {
      this.is_ug = this.stdservice.is_ug;
    });
  }

}
