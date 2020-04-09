import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrHomeComponent } from './gr-home.component';

describe('GrHomeComponent', () => {
  let component: GrHomeComponent;
  let fixture: ComponentFixture<GrHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
