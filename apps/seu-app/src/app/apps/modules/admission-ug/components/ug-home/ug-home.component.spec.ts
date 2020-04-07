import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgHomeComponent } from './ug-home.component';

describe('UgHomeComponent', () => {
  let component: UgHomeComponent;
  let fixture: ComponentFixture<UgHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
