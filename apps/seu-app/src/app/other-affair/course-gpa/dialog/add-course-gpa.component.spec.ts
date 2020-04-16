import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseGpaComponent } from './add-course-gpa.component';

describe('AddCourseGpaComponent', () => {
  let component: AddCourseGpaComponent;
  let fixture: ComponentFixture<AddCourseGpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseGpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseGpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
