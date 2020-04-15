import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGpaComponent } from './course-gpa.component';

describe('CourseGpaComponent', () => {
  let component: CourseGpaComponent;
  let fixture: ComponentFixture<CourseGpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
