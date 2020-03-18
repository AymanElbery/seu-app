import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'seu-search',
  templateUrl: './seu-search.component.html',
  styleUrls: ['./seu-search.component.css']
})


export class SeuSearchComponent implements OnInit,OnDestroy {
  form: FormGroup;
	@Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
	searchText: string = '';
	constructor(private fb: FormBuilder) {}
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
	ngOnInit(): void {
		this.buildForm();
	}
	buildForm(): void {
		this.form = this.fb.group({
			EmpName: new FormControl(''),		
			EmpNo: new FormControl('')
		});
  }

  
search(filters: any): void {
	Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
	this.groupFilters.emit(filters);
}
}