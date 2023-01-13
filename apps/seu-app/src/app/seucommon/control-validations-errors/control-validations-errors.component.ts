import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'control-validations-errors',
  templateUrl: './control-validations-errors.component.html',
  styleUrls: ['./control-validations-errors.component.css']
})
export class ControlValidationsErrorsComponent implements OnInit {


  @Input() control;
  constructor() { }

  ngOnInit() {
  }

}
