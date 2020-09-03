import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-services-landig',
  templateUrl: './services-landig.component.html',
  styleUrls: ['./services-landig.component.css']
})
export class ServicesLandigComponent implements OnInit {

  constructor(public appUserService: StudentService) { }

  ngOnInit() {
  }

}
